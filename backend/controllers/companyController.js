// ===== Module 8: Company/University Controller =====
console.log("✅ companyController loaded");

const Company = require('../models/Company');

exports.createCompanyProfile = async (req, res) => {
  try {
    const profile = new Company({ ...req.body, user: req.user.id });
    await profile.save();
    res.status(201).json({ message: 'Profile created!', profile });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCompanyProfile = async (req, res) => {
  try {
    const profile = await Company.findOne({ user: req.user.id });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
