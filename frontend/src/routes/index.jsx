// router.js
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './../App'; // Make sure this path is correct
import TecherProfile from './../pages/TecherProfile/TecherProfile';
import Education from './../pages/TecherProfile/TeacherData/Education/Education';
import WorkExperience from './../pages/TecherProfile/TeacherData/WorkExperience/WorkExperience';
import ResearchInterest from './../pages/TecherProfile/TeacherData/ResearchInterest/ResearchInterest';
import Publications from './../pages/TecherProfile/TeacherData/Publication/Publication';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/professor/:id',
    element: <TecherProfile />,
    children: [
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
      }
    ]
  }
]);

export default router;
