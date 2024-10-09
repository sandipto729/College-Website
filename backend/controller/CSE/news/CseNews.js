const CseNewsModel = require("../../../models/CSE/CseNews");

const getCseNews = async (req, res) => {
    try {
        const cseNewsData = await CseNewsModel.find(); 
        res.json(cseNewsData);
    } catch (error) {
        console.error("Error fetching CSE news:", error);
        res.status(500).json({ error: "Failed to fetch CSE news." });
    }
};

module.exports = getCseNews;
