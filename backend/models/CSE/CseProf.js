const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  degree: { type: String, required: true },
  institution: { type: String, required: true },
  year: { type: Number, required: true }
});

const workExperienceSchema = new mongoose.Schema({
  position: { type: String, required: true },
  institution: { type: String, required: true },
  duration: { type: String, required: true }
});

const publicationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  journal: { type: String, required: true },
  year: { type: Number, required: true },
  link: { type: String }
});

const studentSchema = new mongoose.Schema({
  photo: { type: String, required: true },
  type: { type: String, required: true },
  subject: { type: String, required: true }
});

const awardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  organization: { type: String, required: true }
});

const responsibilitySchema = new mongoose.Schema({
  position: { type: String, required: true },
  duration: { type: String, required: true }
});

const contactSchema = new mongoose.Schema({
  email: { type: String, required: true },
  phone: { type: String, required: true },
  office: { type: String, required: true }
});

const cseProfSchema = new mongoose.Schema({
  name: { type: String, required: true },
  photo: { type: String },
  professorType: { type: String, required: true },
  collegeJoinYear: { type: Number, required: true },
  socialMedia: {
    website: { type: String },
    linkedin: { type: String },
    twitter: { type: String },
    facebook: { type: String },
    googleScholar: { type: String },
    researchGate: { type: String }
  },
  publicationDetails: {
    totalPublications: { type: Number, required: true },
    sponsoredProjects: { type: Number },
    consultancyProjects: { type: Number }
  },
  ownEducation: [educationSchema],
  workExperience: [workExperienceSchema],
  researchInterest: [{ type: String }],
  publications: [publicationSchema],
  teachingTopics: [{ type: String }],
  doctoralStudents: [studentSchema],
  pgStudents: [studentSchema],
  ugStudents: [studentSchema],
  awardsAndRecognition: [awardSchema],
  administrativeResponsibilities: [responsibilitySchema],
  contact: contactSchema,
  miscellaneous: [{ type: String }]
});

const CseProf = mongoose.model('cseprofs', cseProfSchema);

module.exports = CseProf;
