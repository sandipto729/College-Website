const CseProjectModel = require("./../../../models/CSE/CseProject");
const CseProfModel = require("./../../../models/CSE/CseProf");

const CseProjectController = async (req, res) => {
  try {
    const ProfId = req.body.id;
    
    // Fetch the professor's data
    const professor = await CseProfModel.findById(ProfId);

    if (!professor) {
      return res.status(404).json({ error: "Professor not found" });
    }

    const ProfName = professor.name;
    console.log("Professor Name:", ProfName);

    // Fetch the project data for the professor
    const SponseredProject = await CseProjectModel.find({ 
      "NameofthePI": ProfName,
      "type": "Sponsored"
     });
     
    const ConsultancyProject = await CseProjectModel.find({ "NameofthePI": ProfName, "type": "Consultancy" });
    // If both are empty
    if (!SponseredProject.length && !ConsultancyProject.length) {
      return res.status(404).json({ error: "No projects found for this professor" });
    }
    res.json({
      sponsered: SponseredProject,
      consultancy: ConsultancyProject,
    });
  } catch (error) {
    console.error("Error fetching CSE Project:", error);
    res.status(500).json({ error: "Failed to fetch CSE Project." });
  }
};

module.exports = CseProjectController;
