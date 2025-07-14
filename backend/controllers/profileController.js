// ===== Module 2: Controller to Get/Update User Profile =====
const User = require('../models/User');

// @route   GET /api/profile
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @route   PUT /api/profile
exports.updateProfile = async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.user.id, req.body, {
      new: true
    }).select('-password');

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
