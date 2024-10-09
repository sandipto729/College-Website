const CseProfModel = require("./../../../models/CSE/CseProf");

const CseProfAdd = async (req, res) => {
    try {
        const CseProfData = new CseProfModel(req.body);
        await CseProfData.save();
        res.json({ CseProfData });
    } catch (error) {
        console.error("Error adding CSE Professors:", error);
        res.status(500).json({ error: "Failed to add CSE Professors." });
    }
};

module.exports = CseProfAdd;