const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router.post('/api/register',
  userController.validateRegister,
  userController.isEmailAvailable,
  userController.register,
  authController.login
);

router.post('/api/login', authController.login);
router.post('/api/logout', authController.logout);

router.get('/api/is-authenticated', authController.isAuthenticated);

module.exports = router;