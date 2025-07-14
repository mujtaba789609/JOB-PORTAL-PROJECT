// ===== Module 5: Job Application Model =====
// This stores who applied (applicant), which job (job),
//  and extra data like resume or cover letter.
const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  applicant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
  },
  resume: String,
  coverLetter: String,
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);
