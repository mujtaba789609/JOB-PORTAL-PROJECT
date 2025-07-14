// ===== Module 10: Admin Routes =====
const express = require('express');
const router = express.Router();
const { getAllUsers, updateJobStatus, updateEventStatus } = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/users', authMiddleware, getAllUsers); // View all users
router.put('/job/:jobId/status', authMiddleware, updateJobStatus); // Approve/reject job
router.put('/event/:eventId/status', authMiddleware, updateEventStatus); // Approve/reject event

module.exports = router;
