const express = require('express');
const authController = require('../controllers/auth');

const router = express.Router();

router.get('/', authController.isLoggedIn, (req, res) => {
  res.render('index', {
    user: req.user,
    student: req.student,
  });
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/profile', authController.isLoggedIn, (req, res) => {
  // console.log(req.message);
  if (req.user) {
    res.render('profile', {
      user: req.user,
    });
  } else {
    res.redirect('/login');
  }
});

router.get('/students', authController.isLoggedIn, (req, res) => {
  // console.log(req.message);
  if (req.user) {
    res.render('students', {
      user: req.user,
      student: req.student,
    });
  } else {
    res.redirect('/login');
  }
});

router.get('/students/add', authController.isLoggedIn, (req, res) => {
  if (req.user) {
    res.render('addStudent', {
      student: req.student,
    });
  } else {
    res.redirect('/login');
  }
});

module.exports = router;
