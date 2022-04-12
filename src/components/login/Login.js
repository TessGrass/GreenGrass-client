import React from 'react'
import { useState } from "react"
import { auth } from '../../firebase-config'
import { setPersistence, signInWithEmailAndPassword, onAuthStateChanged, signOut,  browserSessionPersistence } from 'firebase/auth'
import './Login.css'

function Login() {

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const [user, setUser] = useState({})
  setPersistence(auth, browserSessionPersistence)

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })


  const login = async (e) => {
    e.preventDefault()
    console.log('----Login-----')
    try{
    const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    console.log(user)
  } catch (error) {
    console.log(error.message)
  }
  }

  const logout = async (e) => {
    e.preventDefault()
    await signOut(auth)

  }
  return (
    <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3>LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <form className="login-form">
          <input type="text" placeholder="username" onChange={(event) => {setLoginEmail(event.target.value)}}/>
          <input type="password" placeholder="password"onChange={(event) => {setLoginPassword(event.target.value)}}/>
          <button onClick={login}>login</button>
          <button onClick={logout}>Sign Out</button>
          <p className="message">Not registered? <a href="#">Create an account</a></p>
          <p>{user?.email}</p>
        </form>
      </div>
    </div>
  )
}

export default Login
