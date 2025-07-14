// ===== Module 1: Authentication Routes =====
//These are the routes for user registration and login.
const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// Register Route
router.post('/register', register);

// Login Route
router.post('/login', login);

module.exports = router;
