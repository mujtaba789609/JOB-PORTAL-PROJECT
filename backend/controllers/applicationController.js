// ===== Module 5: Application Controller =====
const Application = require('../models/Application');

exports.applyToJob = async (req, res) => {
  try {
    const { jobId, resume, coverLetter } = req.body;

    const application = new Application({
      applicant: req.user.id,
      job: jobId,
      resume,
      coverLetter,
    });

    await application.save();
    res.status(201).json({ message: 'Applied successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ===== Module 6: Get all applications for a specific job =====
exports.getJobApplications = async (req, res) => {
  try {
    const jobId = req.params.jobId;

    const applications = await Application.find({ job: jobId })
      .populate('applicant', 'name email role');

    res.json(applications);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch applications' });
  }
};
