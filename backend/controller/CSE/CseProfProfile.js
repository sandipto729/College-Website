const CseProfModel = require("./../../models/CSE/CseProf");
const getCseProfProfile = async (req, res) => {
    try {
        // console.log(req.body);
        const cseProfData = await CseProfModel.findById(req.body.id);
        if (!cseProfData) {
            return res.status(404).json({ error: "Professor not found" });
        }
        res.json(cseProfData);
    } catch (error) {
        console.error("Error fetching CSE Professors:", error);
        res.status(500).json({ error: "Failed to fetch CSE Professors." });
    }
};

module.exports = getCseProfProfile;
  