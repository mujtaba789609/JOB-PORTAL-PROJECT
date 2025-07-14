// ===== Module 8: Company/University Routes =====
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {
  createCompanyProfile,
  getCompanyProfile,
  getAllCompanies
} = require('../controllers/companyController');

router.post('/', authMiddleware, createCompanyProfile);
router.get('/me', authMiddleware, getCompanyProfile);
router.get('/', getAllCompanies);

module.exports = router;
