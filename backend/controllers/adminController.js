// ===== Module 10: Admin Controller =====
const User = require('../models/User');
const Job = require('../models/Job');
const Event = require('../models/Event'); // Optional if you made events

// View all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

// Approve or reject job
exports.updateJobStatus = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(
      req.params.jobId,
      { status: req.body.status },
      { new: true }
    );
    res.json(job);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update job status' });
  }
};

// Approve or reject event (optional if events created)
exports.updateEventStatus = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(
      req.params.eventId,
      { status: req.body.status },
      { new: true }
    );
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update event status' });
  }
};
