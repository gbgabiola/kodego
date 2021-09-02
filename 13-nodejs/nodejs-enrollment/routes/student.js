const express = require('express');
const studentController = require('../controllers/student');

const router = express.Router();

router.post('/add', studentController.add);
router.get('/students', studentController.listOfStudents);

module.exports = router;
