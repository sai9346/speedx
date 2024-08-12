// backend/controllers/performanceController.js
const { analyzePerformance } = require('../services/performanceService');

const getPerformanceMetrics = async (req, res) => {
    const { url } = req.body;
    try {
        const metrics = await analyzePerformance(url);
        res.json(metrics);
    } catch (error) {
        res.status(500).json({ error: 'Failed to analyze website performance' });
    }
};

module.exports = { getPerformanceMetrics };
