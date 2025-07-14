// ===== Module 4: Job Model =====
// This schema defines the structure of each job post,
//  linking it to the user who created it (postedBy).
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  company: String,
  location: String,
  jobType: {
    type: String,
    enum: ['full-time', 'part-time', 'internship', 'remote'],
    default: 'full-time',
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);
