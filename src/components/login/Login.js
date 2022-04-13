import React from 'react'
import { useState, useEffect, useContext } from "react"
import { Link } from 'react-router-dom'
import { auth } from '../../firebase-config'
import { setPersistence, signInWithEmailAndPassword, onAuthStateChanged, signOut, browserSessionPersistence } from 'firebase/auth'
import { LoginContext } from '../../context/Context'
import './Login.css'

function Login() {

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const [user, setUser] = useState({})

  useEffect(() =>{
    onAuthStateChanged(auth,
       currentUser => {
         currentUser
           ? setUser(currentUser)
           : setUser(null);
       },
    );
 }, []);

 /*  onAuthStateChanged(auth, (currentUser) => {
    console.log(currentUser)
    setUser(currentUser)
  }) */


  const login = async (e) => {
    setPersistence(auth, browserSessionPersistence)
    e.preventDefault()
    console.log('----Login-----')
    try{
    const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
   if(user.user.email) {
    setLoggedIn(true)
   }
    
  } catch (error) {
    console.log(error.message)
  }
  }

  const logout = async (e) => {
    e.preventDefault()
    await signOut(auth)
    console.log(setUser)
    setUser({})
    setLoggedIn(false)
  }

  const {loggedIn, setLoggedIn} = useContext(LoginContext)

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
          <p className="message">Inget konto? <Link to='/register'>Registrera dig här</Link></p>
          <p>{user?.email}</p>
        </form>
      </div>
    </div>
    
  )
}

export default Login
