const fs = require('fs');
const path = require('path');

// USER AGENT LOG FILE
const userAgentFile = path.join(__dirname, "../userAgent.json");

// FUNCTION TO CLASSIFY USER AGENT TYPE
const classifyUserAgent = (agentName) => {
    const lowerAgent = agentName.toLowerCase();
    if (lowerAgent.includes("thunder client")) return "Thunder Client";
    if (lowerAgent.includes("postmanruntime")) return "Postman";
    if (lowerAgent.includes("edg")) return "Edge Browser";
    if (lowerAgent.includes("chrome")) return "Chrome Browser";
    if (lowerAgent.includes("curl")) return "Curl";
    return "Other";
};

// FUNCTION TO SAVE USER AGENT DATA TO FILE
const saveUserAgent = (userAgentData) => {
    let data = {};

    // CREATE USER AGENT FILE IF NOT EXISTS
    if (!fs.existsSync(userAgentFile)) {
        fs.writeFileSync(userAgentFile, JSON.stringify({}, null, 2));
    }

    try {
        const rawData = fs.readFileSync(userAgentFile, 'utf-8');
        data = rawData ? JSON.parse(rawData) : {};

        // AGENT TYPE
        const userAgentType = classifyUserAgent(userAgentData);

        // CREARE NEW OBJECT IF NOT EXISTS
        if (!data[userAgentType]) {
            data[userAgentType] = {
                userAgent: userAgentData,
                count: 0,
                timestamps: []
            };
        }

        // INCREMENT COUNT AND ADD LOG
        data[userAgentType].count += 1;
        const dateTime = new Date().toISOString();
        data[userAgentType].timestamps.push(dateTime);

        // KEEP ONLY LAST 20 TIMESTAMPS
        if (data[userAgentType].timestamps.length > 20) {
            data[userAgentType].timestamps.shift();
        }

        // SAVE THE FILE
        fs.writeFileSync(userAgentFile, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error("Error parsing user agent file:", error);
    }
}

module.exports = {
    saveUserAgent
};