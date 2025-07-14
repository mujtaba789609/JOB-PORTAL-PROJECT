// ===== Module 4: Job Controller =====

//These functions handle job creation and listing. We use populate to 
//include the company name and email in the job listings.
const Job = require('../models/Job');

// ➕ POST /api/jobs – Create a job
exports.createJob = async (req, res) => {
  try {
    const job = new Job({ ...req.body, postedBy: req.user.id });
    await job.save();
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 📃 GET /api/jobs – List all jobs
// 📃 GET /api/jobs – List all jobs with pagination
// 📃 GET /api/jobs – List all jobs with pagination
// 📃 GET /api/jobs?page=1&limit=5
exports.getJobs = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    const jobs = await Job.find()
      .populate('postedBy', 'name email')
      .skip(skip)
      .limit(limit);

    const total = await Job.countDocuments();
    const totalPages = Math.ceil(total / limit);

    res.json({ jobs, totalPages, currentPage: page });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

