// ===== Module 1: Controller for Register/Login =====
//This controller handles the register and login API logic using JWT and bcrypt.
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// @route   POST /api/auth/register
exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    // it says if already have this gmail 
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ error: 'Email already exists' });

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
   

    const newUser = new User({ name, email, password: hashedPassword, role });
    await newUser.save();

    res.status(201).json({ message: '✅ User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @route   POST /api/auth/login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    // Create JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role }, // for module 7
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({
      token,
      user: { id: user._id, name: user.name, role: user.role }
    });
  } catch (err) {
    console.log('Register error:', err.message);
    res.status(500).json({ error: err.message });
  }
};
