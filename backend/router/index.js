const express = require('express');
const router = express.Router();
//Cse Department
const CseProf = require('./../controller/CSE/CseProf');
const CseNews = require('./../controller/CSE/CseNews');
const CseProfProfile = require('./../controller/CSE/CseProfProfile');
const CseProject = require('./../controller/CSE/CseProject');
const CseStaff = require('./../controller/CSE/CseStaff');
const DevLogin=require('./../controller/CSE/DevLogin')



// Cse DepartMent
router.get('/CseProf', CseProf);
router.get('/CseNews', CseNews);
router.post('/CseProfProfile', CseProfProfile);
router.post('/CseProjectDetails', CseProject);
router.get('/CseStaff', CseStaff); 
router.post('/DevLogin',DevLogin);

module.exports = router;