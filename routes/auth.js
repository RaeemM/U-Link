const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Login
router.post('/login', authController.login);

// Logout (optional)
router.post('/logout', authController.logout);

module.exports = router;
