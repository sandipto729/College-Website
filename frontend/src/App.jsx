// App.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

import NewsBar from './component/NewsBar/NewsBar';


function App() {
  return (
    <>
    <NewsBar/>
      <Outlet />
    </>
  );
}

export default App;
