//import { Root } from 'postcss';
import React from 'react';
//import './App.css';
//import Navbar from './components/header/navbar';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";

import Layout from './layout/Layout';

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        
    </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
