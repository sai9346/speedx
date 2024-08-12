// backend/app.js
const express = require('express');
const cors = require('cors');
const performanceRoutes = require('./routes/performanceRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/performance', performanceRoutes);

module.exports = app;
