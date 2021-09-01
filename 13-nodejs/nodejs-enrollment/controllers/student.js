const mysql = require('mysql2');

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

// Export addStudent
exports.add = (req, res) => {
  console.log(req.body);

  const {
    first_name: firstName,
    middle_name: middleName,
    last_name: lastName,
    email,
    contact_number: contactNumber,
    address,
  } = req.body;

  db.query(
    `SELECT * FROM students WHERE email = ?`,
    [email],
    (err, results) => {
      if (err) {
        console.log(err);
      }

      if (results.length > 0) {
        return res.render('addStudent', {
          message: 'Email entered is already in use.',
        });
      }

      db.query(
        `INSERT INTO students SET ?`,
        {
          first_name: firstName,
          middle_name: middleName,
          last_name: lastName,
          email,
          contact_number: contactNumber,
          address,
        },
        (err, results) => {
          if (err) {
            console.log(err);
          } else {
            console.log(results);
            return res.render('addStudent', {
              student: results,
              message: 'Student Enrolled!',
            });
          }
          db.query(`SELECT * FROM students`, (err, results) => {
            if (err) throw err;
            res.render('students', { student: results });
          });
        }
      );
    }
  );
};
