const mongoose = require('mongoose');

// Project Schema
const ProjectSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  NameofthePI: { type: String, required: true, index: true }, 
  NameoftheCoPIs: [{ type: String, required: true }],
  FundingAgency: { type: String, required: true },
  Amount: { type: Number, required: true },
  ProjectStatus: { type: String, required: true },
  DateofInitiation: { type: String, required: true },
  DateofCompletion: { type: String, required: true },
  type: { type: String, required: true }
});

module.exports = mongoose.model('CseProject', ProjectSchema);