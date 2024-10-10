const express = require('express');
const router = express.Router();
//Cse Department
const CseProf = require('../controller/CSE/people/CseProf');
const CseNews = require('./../controller/CSE/news/CseNews');
const CseProfProfile = require('./../controller/CSE/people/CseProfProfile');
const CseProject = require('./../controller/CSE/project/CseProject');
const CseStaff = require('./../controller/CSE/people/CseStaff');
const DevLogin=require('../controller/CSE/developer/DevLogin');
const DevCseAdd=require('../controller/CSE/people/CseProfAdd');



// Cse DepartMent
router.get('/CseProf', CseProf);
router.get('/CseNews', CseNews);
router.post('/CseProfProfile', CseProfProfile);
router.post('/CseProjectDetails', CseProject);
router.get('/CseStaff', CseStaff); 

//Developer
router.post('/DevLogin',DevLogin);
router.post('/CseProfAdd',DevCseAdd);

module.exports = router;