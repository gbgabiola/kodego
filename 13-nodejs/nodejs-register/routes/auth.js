const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/auth');

router.post('/login', registrationController.login);
router.post('/register', registrationController.register);
router.get('/updateForm/:email', registrationController.updateForm);
router.post('/updateUser', registrationController.updateUser);

module.exports = router;
