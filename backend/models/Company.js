// ===== Module 8: Company/University Model =====
const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: String,
  email: String,
  website: String,
  services: String,
  tagline: String,
  logo: String, // for future enhancement (image uploads)
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // linked to user
});

module.exports = mongoose.model('Company', companySchema);
