// backend/routes/performanceRoutes.js
const express = require('express');
const { getPerformanceMetrics } = require('../controllers/performanceController');

const router = express.Router();

router.post('/analyze', getPerformanceMetrics);

module.exports = router;
