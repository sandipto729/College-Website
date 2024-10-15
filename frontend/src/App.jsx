// App.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './Layout/Navbar'
import Headroom from 'react-headroom'

function App() {
  return (
    <div >
      
{/* {    {/* <ContactUs /> */}
    <Headroom>
      <Navbar />
    </Headroom>
    {/* <NewsBar /> */}
    <ToastContainer />
    <Outlet /> */
    </div>
  );
}

export default App;
