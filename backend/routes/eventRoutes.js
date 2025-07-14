// ===== Module 7: Event Routes =====
// This file defines routes:
// POST /api/events → create new event
// GET /api/events → fetch all events
// POST /api/events/register/:eventId → register for specific event

const express = require('express');
const router = express.Router();
const { createEvent, getEvents, registerForEvent } = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, createEvent); // for admin/institutes
router.get('/', getEvents); // public
router.post('/register/:eventId', authMiddleware, registerForEvent); // any logged-in user

module.exports = router;
