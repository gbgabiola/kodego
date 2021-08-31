const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect(err => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  } else {
    console.log('MySQL connected!');
  }
});

// Export register
exports.register = (req, res) => {
  console.log(req.body);

  // const firstName = req.body.first_name;
  // const lastName = req.body.last_name;
  // const email = req.body.email;
  // const password = req.body.password;
  // const confirmPassword = req.body.confirm_password;
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  db.query(
    `SELECT * FROM registry WHERE email = ?`,
    [email],
    async (err, results) => {
      if (err) {
        // throw err;
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

      // Encrypt password
      let hashPass = await bcrypt.hash(password, 8);
      console.log(hashPass);

      db.query(
        `INSERT INTO registry SET ?`,
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: hashPass,
        },
        (err, results) => {
          if (err) {
            // throw err;
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
exports.login = (req, res) => {
  console.log(req.body);

  const { firstName, email, password } = req.body;

  if (!email || !password)
    return res.status(400).render('index', {
      message: 'Please provide a valid email and password.',
    });

  db.query(
    `SELECT * FROM registry WHERE email = ?`,
    [email],
    async (err, result) => {
      console.log(result[0].registryId);
      if (!result || !(await bcrypt.compare(password, result[0].password))) {
        // throw err;
        res
          .status(401)
          .render('index', { message: 'Email or Password is incorrect.' });
        // console.log(err);
      } else {
        const id = result[0].registryId;
        const token = jwt.sign({ id }, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRES_IN,
        });
        console.log(token);
        const cookieOptions = {
          expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000
          ),
          httpOnly: true,
        };

        res.cookie('jwt', token, cookieOptions);
        res.status(200).redirect('/');
        // console.log(result);
        // return res.render('login', { message: `Welcome ${firstName}!` });
      }
    }
  );
};
