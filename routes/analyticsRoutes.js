const express = require('express');
const { countUserAgents } = require('../utils/mockLogger');
const { getUserAgentCount, getVisualizedCharts } = require('../controllers/analyticsControllers');
const router = express.Router();


// VISUALIZATION ROUTES
router.get("/", getVisualizedCharts);

// GET USER AGENT COUNT
router.get("/user-agent", getUserAgentCount);

module.exports = router;