import React from 'react'
import { useState, useEffect, useContext } from "react"
import { Link } from 'react-router-dom'
import { auth } from '../../firebase-config'
import { setPersistence, signInWithEmailAndPassword, onAuthStateChanged, signOut, browserSessionPersistence, getIdToken, getAuth } from 'firebase/auth'
import { LoginContext } from '../../context/Context'
import { UserUidContext } from '../../context/Context'
import { tokenContext } from '../../context/Context'
import './Login.css'

function Login() {

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const {loggedIn, setLoggedIn} = useContext(LoginContext)
  const {userUid, setUserUid} = useContext(UserUidContext)
  const {token, setToken} = useContext(tokenContext)

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

  /* const createToken = async () => {
    const token = await firebase.auth().currentUser.getIdToken()
    console.log(token)
  } */


  const login = async (e) => {
    try{
    console.log('----Login-----')
    setPersistence(auth, browserSessionPersistence)
    e.preventDefault()
    const userData = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    console.log(userData.user)
   if(userData.user.email) {
    const auth = getAuth()
    const token = await getIdToken(auth.currentUser)
      setToken(token)
      setUserUid(userData.user.uid)
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

  return (
    <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3>LOGGA IN</h3>
            <p>Ange dina inloggningsuppgifter nedan:</p>
          </div>
        </div>
        <form className="login-form">
          <input type="text" placeholder="användarmail" onChange={(event) => {setLoginEmail(event.target.value)}}/>
          <input type="password" placeholder="lösenord" onChange={(event) => {setLoginPassword(event.target.value)}}/>
          <button onClick={login}>Logga in</button>
          <button onClick={logout}>Logga ut</button>
          <p className="message">Inget konto? <Link to='/register'>Registrera dig här</Link></p>
          <p>{user?.email}</p>
        </form>
      </div>
    </div>
    
  )
}

export default Login
