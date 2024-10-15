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
import DisplayFaculty from '../pages/People/DisplayFaculty';
import HodCse from '../pages/People/HodCse';
import DisplayStaff from '../pages/People/DisplayStaff';
import GalleryLogic from '../pages/ImageGallery/GalleryLogic';
import DeveloperLogin from '../Authentication/DeveloperLogin';
import ContactUs from './../pages/ContactUs/CSE/ConatctCse'
import CseProfAdd from './../pages/Developer/people/CseProfAdd';
import NotFound from './../pages/ErrorPages/404Page';
import AboutUs from './../pages/AboutUs/AboutUs';
import ProjectHomePage from '../pages/Project/ProjectHamepage';
import ProjectDetailsPage from '../pages/Project/ProjectDeatilsPage';
import ProjectDeatilsPageLogic from '../pages/Project/ProjectDetailsPageLogic';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutUs />,
      },
      {
        index:'about',
        element: <AboutUs />,
      },
      {
        path: 'professor',
        element: <DisplayFaculty />,
      },
      {
        path: 'professor/hod',
        element: <HodCse />,
      },
      {
        path: 'staff',
        element: <DisplayStaff />,
      },
      {
        path: 'professor/:id',
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
            path: 'publications/:id',
            element: <Publications />
          },
          {
            path: 'teaching-topics/:id',
            element: <TeachingTopics />
          },
          {
            path: 'doctoralstudents/:id',
            element: <DoctoralStudents />
          },
          {
            path: 'ugpgstudents/:id',
            element: <UGPGStudents />
          },
          {
            path: 'awards/:id',
            element: <AwardsAndRecognition />
          },
          {
            path: 'administation/:id',
            element: <AdministrativeResponsibilities />
          },
          {
            path: 'contact/:id',
            element: <ConactProf />
          },
          {
            path: 'miscellaneous/:id',
            element: <MiscellaneousProf />
          },
          {
            path: 'projects/:id',
            element: <CseProject />
          }

        ]
      },
      {
        path: 'photoGallery',
        element: <GalleryLogic />
      },
      {
        path: 'developer',
        element: <DeveloperLogin />,
      },
      {
        path: 'contactUs',
        element: <ContactUs />,
      }
      ,{
        path:'profile',
        
        children:[
          {
            path:'cseProfAdd',
            element:<CseProfAdd/> 
          }
        ]
      },
      {
        path:'research',
        element:<ProjectHomePage/>,
        children:[
          {
            path:'/projects',
            element:<ProjectDeatilsPageLogic/>
          }
        ]
      },{

    
      }
    ]
  }

]);

export default routers;
