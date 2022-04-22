import React from 'react'
import Login from '../login/Login'
import Signup from '../signup/Signup'
import Home from '../home/Home'
import Chart from '../chart/Chart'
import Navbar from '../navbar/Navbar'
import Season from '../season/Season'
import Error404 from '../../error404'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProtectedRoute from '../protectedRoute/ProtectedRoute'
import { LoginContext } from '../../context/Context'
import { UserUidContext } from '../../context/Context'
import { tokenContext } from '../../context/Context'

import './App.css';

function App() {
// console.log(sessionStorage.getItem(Object.keys(sessionStorage).filter(session => session.includes('firebase'))[0]))
const session = JSON.parse(sessionStorage.getItem(Object.keys(sessionStorage).filter(session => session.includes('firebase'))[0]))
  const [userUid, setUserUid] = useState(session?.uid || undefined)
  const [token, setToken] = useState(session?.stsTokenManager?.accessToken || undefined)
  const [loggedIn, setLoggedIn] = useState((Date.now() - session?.stsTokenManager.expirationTime) < 0)
  // console.log(Date.now() - session.stsTokenManager.expirationTime)

  return (
    <LoginContext.Provider value={{loggedIn, setLoggedIn}}>
      <UserUidContext.Provider value={{userUid, setUserUid}}>
      <tokenContext.Provider value={{token, setToken}}>
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/seasonal" element={ <Season /> } />
       {/* <Route path="inloggadklient" element={<Chart />}/> */}
    <Route path="inloggadklient" element={ <ProtectedRoute ><Chart /></ProtectedRoute> }/>
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Signup /> } />
      <Route path="*" element={ <Error404 /> }/>
      </Routes>
      </BrowserRouter>
      </tokenContext.Provider>
      </UserUidContext.Provider>
      </LoginContext.Provider>
 )
}

export default App;

// A provider är egentligen bara en wrapper runt alla komponenter du vill ska ingå.

{/* <Route path="/forum" element={<ProtectedRoute element={'hej'} />} /> */}
