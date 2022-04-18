import React from 'react'
import { useState, useEffect, useContext } from "react"
import { Link } from 'react-router-dom'
import { auth } from '../../firebase-config'
import { setPersistence, signInWithEmailAndPassword, onAuthStateChanged, signOut, browserSessionPersistence, getIdToken, getAuth } from 'firebase/auth'
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

  /* const createToken = async () => {
    const token = await firebase.auth().currentUser.getIdToken()
    console.log(token)
  } */


  const login = async (e) => {
    setPersistence(auth, browserSessionPersistence)
    e.preventDefault()
    console.log('----Login-----')
    try{
    const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
   if(user.user.email) {
     console.log('här')
     const auth = getAuth();
const user2 = auth.currentUser
const response = await getIdToken(user2)
console.log(response)
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
            <h3>LOGGA IN</h3>
            <p>Ange dina inloggningsuppgifter nedan:</p>
          </div>
        </div>
        <form className="login-form">
          <input type="text" placeholder="användarmail" onChange={(event) => {setLoginEmail(event.target.value)}}/>
          <input type="password" placeholder="lösenord"onChange={(event) => {setLoginPassword(event.target.value)}}/>
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
