// ===== Module 2: Profile Routes =====
const express = require('express');
const router = express.Router();
const { getProfile, updateProfile } = require('../controllers/profileController');
const authMiddleware = require('../middleware/authMiddleware');

// GET /api/profile - fetch user profile (Protected)
router.get('/', authMiddleware, getProfile);

// PUT /api/profile - update user profile (Protected)
router.put('/', authMiddleware, updateProfile);

module.exports = router;
