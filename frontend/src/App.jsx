// App.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GalleryLogic from './pages/ImageGallery/GalleryLogic';
import NewsBar from './component/NewsBar/NewsBar';
import ContactUs from './pages/ContactUs/CSE/ConatctCse'
import Navbar from './Layout/Navbar'

import Headroom from 'react-headroom'

function App() {
  return (
    <div >
      {/* <NewsBar />
      <ContactUs /> */}
      <Headroom>
        <Navbar />
      </Headroom>

      <ToastContainer />
      <Outlet />
    </div>
  );
}

export default App;
