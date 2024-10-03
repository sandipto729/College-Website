const CseProfModel = require('./../../models/CSE/CseProf');

const getCseProf = async (req, res) => {
    try {
        const cseProfData = await CseProfModel.find();  
        res.json({ cseProfData });  
    } catch (error) {
        console.error("Error fetching CSE Professors:", error);
        res.status(500).json({ error: "Failed to fetch CSE Professors." });
    }
};

module.exports = getCseProf;
