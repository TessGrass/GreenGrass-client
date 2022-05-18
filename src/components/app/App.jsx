import React, { useState, useMemo } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  LoginContext, UserUidContext, tokenContext, AuthContextProvider
} from '../../context/Context'
import Login from '../login/Login'
import Signup from '../signup/Signup'
import Home from '../home/Home'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Season from '../season/Season'
import Irrigation from '../irrigation/Irrigation'
import GrassSeeds from '../grass-seeds/GrassSeeds'
import Fertilizer from '../fertilizer/Fertilizer'
import Error404 from '../error404/Error404'
import Dashboard from '../dashboard/dashboard'
import Todo from '../todo/Todo'
import IntegrityPolicy from '../integrityPolicy/IntegrityPolicy'
import ProtectedRoute from '../protectedRoute/ProtectedRoute'
import './App.css';

/**
 * Represents an App component.
 *
 * @returns {*} - returns the component.
 */
function App() {
  const session = JSON.parse(sessionStorage.getItem(Object.keys(sessionStorage)
    .filter((session) => session.includes('firebase'))[0]))
  const [userUid, setUserUid] = useState(session?.uid || undefined)
  const [token, setToken] = useState(session?.stsTokenManager?.accessToken || undefined)
  const [loggedIn, setLoggedIn] = useState(session?.stsTokenManager?.accessToken || false)
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
            <AuthContextProvider>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="seasonal" element={<Season />} />
                <Route path="seasonal/irrigation" element={<Irrigation />} />
                <Route path="seasonal/grass-seeds" element={<GrassSeeds />} />
                <Route path="seasonal/grass-fertilizer" element={<Fertilizer />} />
                <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Signup />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/integrity-policy" element={<IntegrityPolicy />} />
                <Route path="*" element={<Error404 />} />
              </Routes>
              <Footer />
            </AuthContextProvider>
          </BrowserRouter>
        </tokenContext.Provider>
      </UserUidContext.Provider>
    </LoginContext.Provider>
  )
}

export default App;
