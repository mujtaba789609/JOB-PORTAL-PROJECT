const User = require('../models/User');

//
// 🔸 Controller to add or update education & experience (Module 3)
//
exports.updateEducationExperience = async (req, res) => {
  try {
    // Get user from token (added by authMiddleware)
    const userId = req.user.id;

    // Destructure from frontend data
    const { education, experience } = req.body;

    // Update the fields in DB
    const updatedUser = await User.findByIdAndUpdate(userId, {
      education,
      experience
    }, { new: true }).select('-password');

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//
// 🔹 Controller to get user's education & experience
//
exports.getEducationExperience = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('education experience');
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
