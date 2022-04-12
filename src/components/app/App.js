import React from 'react';
import Login from '../login/Login'
import Signup from '../signup/Signup'
import Home from '../home/Home';
import Chart from '../chart/Chart'
import Navbar from '../navbar/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';

function App() {
  return (
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/forum" element={<Chart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      </Routes>
      </BrowserRouter>
 )
}

export default App;
