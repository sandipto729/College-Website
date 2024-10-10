const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  degree: { type: String},
  institution: { type: String},
  year: { type: Number}
});

const workExperienceSchema = new mongoose.Schema({
  position: { type: String},
  institution: { type: String},
  duration: { type: String}
});

const publicationSchema = new mongoose.Schema({
  title: { type: String},
  journal: { type: String},
  year: { type: Number},
  link: { type: String }
});

const studentSchema = new mongoose.Schema({
  name: { type: String},
  photo: { type: String},
  type: { type: String},
  subject: { type: String }
});

const awardSchema = new mongoose.Schema({
  title: { type: String },
  year: { type: Number },
  organization: { type: String}
});

const responsibilitySchema = new mongoose.Schema({
  position: { type: String},
  duration: { type: String }
});

const contactSchema = new mongoose.Schema({
  email: { type: String },
  phone: { type: String },
  office: { type: String}
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
    totalPublications: { type: Number},
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
