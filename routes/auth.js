const express = require('express');
const authController = require('../controllers/auth');

const router = express.Router();

router.post('/login', authController.login);
router.post('/login2', authController.login2);
router.post('/login3', authController.login3);
router.post('/register', authController.register);
router.post('/register2', authController.register2);
router.get('/logout', authController.logout);
router.post('/editstudent', authController.editstudent);
router.post('/deletestudent', authController.deletestudent);

module.exports = router;