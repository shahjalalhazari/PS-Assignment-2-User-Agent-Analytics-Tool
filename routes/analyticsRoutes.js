const express = require('express');
const { countUserAgents } = require('../utils/mockLogger');
const { getUserAgentCount } = require('../controllers/analyticsControllers');
const router = express.Router();

router.get("/user-agent", getUserAgentCount);

module.exports = router;