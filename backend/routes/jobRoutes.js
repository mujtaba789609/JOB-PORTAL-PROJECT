// ===== Module 4: Job Routes =====
const express = require('express');
const router = express.Router();
const { createJob, getJobs } = require('../controllers/jobController');
const authMiddleware = require('../middleware/authMiddleware');

// 🚀 Routes
router.post('/', authMiddleware, createJob); // Only logged-in users can post jobs
router.get('/', getJobs); // Publicly viewable job listings

module.exports = router;
