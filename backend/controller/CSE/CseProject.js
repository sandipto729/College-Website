const CseProjectModel = require("./../../public/project.json");
const CseProfModel = require("./../../models/CSE/CseProf");

const CseProjectController = async (req, res) => {
  try {
    const ProfId = req.body.id;
    console.log(ProfId);
    const response = await CseProfModel.findById(ProfId);
    console.log(response);
    
    const ProfName = response.name;

    const SponseredProject = CseProjectModel.sponsered.filter(
      (project) => project["Name of the PI"] === ProfName
    );

    const ConsultancyProject = CseProjectModel.consultancy.filter(
      (project) => project["Name of the PI"] === ProfName
    );

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
