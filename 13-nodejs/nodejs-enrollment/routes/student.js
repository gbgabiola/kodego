const express = require('express');
const studentController = require('../controllers/student');

const router = express.Router();

// router.post('/add', studentController.addStudent);
router.get('/students', studentController.listOfStudents);
router.post('/addStudent', studentController.addStudent);

module.exports = router;
