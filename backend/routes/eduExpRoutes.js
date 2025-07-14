const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// ✅ Import our controller
const {
  updateEducationExperience,
  getEducationExperience
} = require('../controllers/eduExpController');

//
// 🔒 Routes are protected by authMiddleware (JWT token required)
//

// 📩 Save education + experience
router.put('/', authMiddleware, updateEducationExperience);

// 📤 Get education + experience
router.get('/', authMiddleware, getEducationExperience);

module.exports = router;
