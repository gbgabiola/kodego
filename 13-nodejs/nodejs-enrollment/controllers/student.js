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

// Export List of students
exports.listOfStudents = (req, res) => {
  db.query(`SELECT * FROM students`, (err, results) => {
    if (err) throw err;
    res.render('students', { student: results });
  });
};

// Export addStudent
exports.addStudent = (req, res) => {
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
    `SELECT email FROM students WHERE email = ?`,
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

          // db.query(`SELECT * FROM students`, (err, results) => {
          //   if (err) throw err;
          //   res.render('students', { student: results });
          // });
        }
      );
    }
  );
};

exports.updateStudentForm = (req, res) => {
  const email = req.params.email;

  db.query(
    `SELECT * FROM students WHERE email = ?`,
    [email],
    (err, results) => {
      if (err) throw err;
      res.render('updateStudentForm', {
        title: 'Edit Student',
        student: results[0],
      });
    }
  );
};

exports.updateStudent = (req, res) => {
  const {
    first_name: firstName,
    middle_name: middleName,
    last_name: lastName,
    email,
    contact_number: contactNumber,
    address,
  } = req.body;

  db.query(
    `UPDATE students SET first_name = '${firstName}', middle_name = '${middleName}', last_name = '${lastName}', contact_number = '${contactNumber}', address = '${address}' WHERE email = '${email}'`,
    (err, results) => {
      if (err) throw err;

      db.query(`SELECT * FROM students`, (err, results) => {
        if (err) throw err;
        res.render('students', { student: results });
      });
    }
  );
};
