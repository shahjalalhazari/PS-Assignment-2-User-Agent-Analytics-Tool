const { countUserAgents } = require("../utils/mockLogger");

const getUserAgentCount = (req, res) => {
    const userAgentCounts = countUserAgents();
    res.status(200).json(userAgentCounts);
}

module.exports = {
    getUserAgentCount
};