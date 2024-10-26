//import { Root } from 'postcss';
import React from 'react';
//import './App.css';
//import Navbar from './components/header/navbar';
import Explore from './pages/explore/Explore';
import Experiences from './pages/experiences/Experiences';
import Top_visit from './pages/top_visited/Top_visit';
import Login from './pages/login/Login';


import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";

import Layout from './layout/Layout';
import Home from './pages/Home/home';
import Footer from './components/footer/Footer';
import Signup from './pages/signup/Signup';

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/explore" element={<Explore/>}></Route>
        <Route path="/experiences" element={<Experiences/>}></Route>
        <Route path="/top_visited" element={<Top_visit/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/footer" element={<Footer/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
    </Route>
    )
  );
  return <RouterProvider router={router} />;

};

export default App;
