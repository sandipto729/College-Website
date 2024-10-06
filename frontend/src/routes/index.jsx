// router.js
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './../App'; // Make sure this path is correct
import TecherProfile from './../pages/TecherProfile/TecherProfile';
import Education from './../pages/TecherProfile/TeacherData/Education/Education';
import WorkExperience from './../pages/TecherProfile/TeacherData/WorkExperience/WorkExperience';
import ResearchInterest from './../pages/TecherProfile/TeacherData/ResearchInterest/ResearchInterest';
import Publications from './../pages/TecherProfile/TeacherData/Publication/Publication';
import TeachingTopics from '../pages/TecherProfile/TeacherData/TeachingTopic/TechingTopic';
import DoctoralStudents from '../pages/TecherProfile/TeacherData/DoctoralStudent/DoctoralStudent';
import UGPGStudents from '../pages/TecherProfile/TeacherData/UGPGStudent/UGPGStudent';
import AwardsAndRecognition from '../pages/TecherProfile/TeacherData/Award/Award';
import AdministrativeResponsibilities from '../pages/TecherProfile/TeacherData/Administration/Adminintration';
import ConactProf from './../pages/TecherProfile/TeacherData/Contact/Contact';
import MiscellaneousProf from './../pages/TecherProfile/TeacherData/Miscellaneous/Miscellaneous'
import CseProject from './../pages/TecherProfile/TeacherData/Project/Project';
import DisplayFaculty from '../pages/Faculty/DisplayFaculty';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/faculty',
    element: <DisplayFaculty />,
  },
  {
    path: '/professor/:id',
    element: <TecherProfile />,
    children: [
      {
        index: true,
        element: <Education />,
      },
      {
        path: 'education/:id',
        element: <Education />,
      },
      {
        path: 'experience/:id',
        element: <WorkExperience />,
      },
      {
        path: 'research-interest/:id',
        element: <ResearchInterest />,
      },
      {
        path:'publications/:id',
        element:<Publications/>
      },
      {
        path:'teaching-topics/:id',
        element:<TeachingTopics/>
      },
      {
        path:'doctoralstudents/:id',
        element:<DoctoralStudents/>
      },
      {
        path:'ugpgstudents/:id',
        element:<UGPGStudents/>
      },
      {
        path:'awards/:id',
        element:<AwardsAndRecognition/>
      },
      {
        path:'administation/:id',
        element:<AdministrativeResponsibilities/>
      },
      {
        path:'contact/:id',
        element:<ConactProf/>
      },
      {
        path:'miscellaneous/:id',
        element:<MiscellaneousProf/>
      },
      {
        path:'projects/:id',
        element:<CseProject/>
      }
    ]
  }
]);

export default routers;
