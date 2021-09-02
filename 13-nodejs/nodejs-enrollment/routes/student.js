const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student');

router.get('/students', studentController.listOfStudents);
router.post('/addStudent', studentController.addStudent);
router.get('/updateStudentForm/:email', studentController.updateStudentForm);
router.post('/updateStudent', studentController.updateStudent);

module.exports = router;
