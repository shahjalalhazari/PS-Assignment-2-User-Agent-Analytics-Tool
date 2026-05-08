const path = require('path');
const { countUserAgents } = require("../utils/mockLogger");

const getUserAgentCount = (req, res) => {
    const userAgentCounts = countUserAgents();
    res.status(200).json(userAgentCounts);
};


const getVisualizedCharts = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "../analytics.html"));
}

module.exports = {
    getUserAgentCount,
    getVisualizedCharts
};