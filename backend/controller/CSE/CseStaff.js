const cseStaffModel = require('./../../models/CSE/CseStaff');

const getCseStaff = async (req, res) => {
    try {
        const cseStaffData = await cseStaffModel.find();
        res.json({ cseStaffData });
    } catch (error) {
        console.error("Error fetching CSE Staff:", error);
        res.status(500).json({ error: "Failed to fetch CSE Staff." });
    }
};

module.exports = getCseStaff;