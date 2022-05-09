import React, { useState, useMemo } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginContext, UserUidContext, tokenContext } from '../../context/Context'
import Login from '../login/Login'
import Signup from '../signup/Signup'
import Home from '../home/Home'
import Navbar from '../navbar/Navbar'
import Season from '../season/Season'
import Irrigation from '../irrigation/Irrigation'
import Error404 from '../error404/Error404'
import Dashboard from '../dashboard/Dashboard'
import ProtectedRoute from '../protectedRoute/ProtectedRoute'
/* import { UserUidContext } from '../../context/Context'
import { tokenContext } from '../../context/Context' */

import './App.css';

/**
 * Represents an App component.
 *
 * @returns {*} - returns the component.
 */
function App() {
/* eslint-disable no-shadow */
  const session = JSON.parse(sessionStorage.getItem(Object.keys(sessionStorage)
    .filter((session) => session.includes('firebase'))[0]))
  const [userUid, setUserUid] = useState(session?.uid || undefined)
  const [token, setToken] = useState(session?.stsTokenManager?.accessToken || undefined)
  const [loggedIn, setLoggedIn] = useState()
  /*  const [loggedIn, setLoggedIn] = useState((Date.now() - session?.stsTokenManager.expirationTime) < 0) */

  const loggedInValue = useMemo(() => ({
    loggedIn, setLoggedIn
  }), [loggedIn])

  const tokenValue = useMemo(() => ({
    token, setToken
  }), [token])

  const userUidValue = useMemo(() => ({
    userUid, setUserUid
  }), [userUid])

  return (
    <LoginContext.Provider value={loggedInValue}>
      <UserUidContext.Provider value={userUidValue}>
        <tokenContext.Provider value={tokenValue}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="seasonal" element={<Season />} />
              <Route path="seasonal/irrigation" element={<Irrigation />} />
              <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Signup />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </BrowserRouter>
        </tokenContext.Provider>
      </UserUidContext.Provider>
    </LoginContext.Provider>
  )
}

export default App;

// A provider är egentligen bara en wrapper runt alla komponenter du vill ska ingå.

/* <Route path="/forum" element={<ProtectedRoute element={'hej'} />} /> */
