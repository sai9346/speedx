// backend/services/performanceService.js
const axios = require('axios');

const analyzePerformance = async (url) => {
    const response = await axios.get(url);
    
    const performanceData = {
        loadTime: response.headers['x-response-time'] || 0, 
        requestSize: parseInt(response.headers['content-length'] || '0', 10),
        requestCount: response.headers['x-request-id'] ? response.headers['x-request-id'].split(',').length : 1,
    };

    return performanceData;
};

module.exports = { analyzePerformance };
