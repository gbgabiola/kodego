const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2');
const { promisify } = require('util');

// DB Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.log(`Error connecting: ${err.stack}`);
  } else {
    console.log('MySQL Connected...');
  }
});

// Export register
exports.register = (req, res) => {
  console.log(req.body);

  const {
    first_name: firstName,
    last_name: lastName,
    email,
    password,
    confirm_password: confirmPassword,
  } = req.body;

  db.query(
    `SELECT email FROM users WHERE email = ?`,
    [email],
    async (err, results) => {
      if (err) {
        console.log(err);
      }

      if (results.length > 0) {
        return res.render('register', {
          message: 'Email entered is already in use.',
        });
      } else if (password !== confirmPassword) {
        return res.render('register', {
          message: 'Password entered do not match.',
        });
      }

      let hashedPassword = await bcrypt.hash(password, 10);
      console.log(hashedPassword);

      db.query(
        `INSERT INTO users SET ?`,
        {
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: hashedPassword,
        },
        (err, results) => {
          if (err) {
            console.log(err);
          } else {
            console.log(results);
            return res.render('register', { message: 'User registered!' });
          }
        }
      );
    }
  );
};

// Export login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).render('login', {
        message: 'Please provide a valid email and password.',
      });
    }

    db.query(
      `SELECT * FROM users WHERE email = ?`,
      [email],
      async (err, results) => {
        console.log(results);
        if (
          !results ||
          !(await bcrypt.compare(password, results[0].password))
        ) {
          res
            .status(401)
            .render('login', { message: 'Email or Password is incorrect.' });
        } else {
          const id = results[0].user_id;
          const token = jwt.sign({ id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
          });
          console.log(`The token is: ${token}`);

          const cookieOptions = {
            expires: new Date(
              Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
            ),
            httpOnly: true,
          };

          res.cookie('jwt', token, cookieOptions);
          res.status(200).redirect('/');
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
};

// Export isLoggedIn
exports.isLoggedIn = async (req, res, next) => {
  // console.log(req.cookies);
  if (req.cookies.jwt) {
    try {
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      );
      // console.log(decoded);

      db.query(
        `SELECT * FROM users WHERE user_id = ?`,
        [decoded.id],
        (err, results) => {
          // console.log(result);

          if (!results) {
            return next();
          }

          req.user = results[0];
          return next();
        }
      );
    } catch (err) {
      console.log(err);
      return next();
    }
  } else {
    next();
  }
};

// Export logout
exports.logout = async (req, res) => {
  console.log(req.body);
  res.cookie('jwt', 'logout', {
    expires: new Date(Date.now() + 2 * 1000),
    httpOnly: true,
  });

  res.status(200).redirect('/');
};
