import React from 'react';
import Login from '../login/Login'
import Signup from '../signup/Signup'
import Home from '../home/Home'
import Chart from '../chart/Chart'
import Navbar from '../navbar/Navbar'
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from '../protectedRoute/ProtectedRoute';
import { LoginContext } from '../../context/Context';

import './App.css';

function App(Auth) {

  const [loggedIn, setLoggedIn] = useState(false)


  return (
    <LoginContext.Provider value={{loggedIn, setLoggedIn}}>
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route
          path="forum"
          element={
            <ProtectedRoute user={Auth}>
              <Chart />
            </ProtectedRoute>
          }
        />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />     
      </Routes>
      </BrowserRouter>
      </LoginContext.Provider>
 )
}

export default App;

// A provider är egentligen bara en wrapper runt alla komponenter du vill ska ingå.

{/* <Route path="/forum" element={<ProtectedRoute element={'hej'} />} /> */}
