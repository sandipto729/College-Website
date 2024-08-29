// router.js
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './../App'; // Make sure this path is correct

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  }
]);

export default router;
