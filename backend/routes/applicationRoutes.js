// ===== Module 5: Application Routes =====
const express = require('express');
const router = express.Router();
const { applyToJob,getJobApplications } = require('../controllers/applicationController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, applyToJob); // User must be logged in
// ===== Module 6: Get all applications for a specific job =====
router.get('/job/:jobId', authMiddleware, getJobApplications); 
module.exports = router;
