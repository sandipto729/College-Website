// App.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import NewsBar from './component/NewsBar/NewsBar';
import ContactUs from './pages/ContactUs/CSE/ConatctCse'


function App() {
  return (
    <>
    <NewsBar/>
    <ContactUs/>
    <ToastContainer />
      <Outlet />
    </>
  );
}

export default App;
