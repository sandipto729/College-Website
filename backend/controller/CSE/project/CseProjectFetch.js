const ProjectModel =require("../../../models/CSE/CseProject");

const CseProjectFetch = async (req, res) => {

    try {
        const Sponseredprojects = await ProjectModel.find({ type: "Sponsored" });
        const Consultancyprojects = await ProjectModel.find({ type: "Consultancy" });
        res.json({ sponsered: Sponseredprojects, consultancy: Consultancyprojects });
    } catch (error) {
        console.error('Error fetching project data:', error);
        res.status(500).json({ error: 'Failed to fetch project data' });
    }
}

module.exports = CseProjectFetch