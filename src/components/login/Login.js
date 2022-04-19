import React from 'react'
import { useState, useEffect, useContext } from "react"
import { Link } from 'react-router-dom'
import { auth } from '../../firebase-config'
import { setPersistence, signInWithEmailAndPassword, onAuthStateChanged, signOut, browserSessionPersistence, getIdToken, getAuth } from 'firebase/auth'
import { LoginContext } from '../../context/Context'
import { UserUidContext } from '../../context/Context'
import './Login.css'

function Login() {

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const {loggedIn, setLoggedIn} = useContext(LoginContext)
  const {userUid, setUserUid} = useContext(UserUidContext)

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
    const userData = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
   if(userData.user.email) {
      const auth = getAuth();
      //const userData = auth.currentUser
      console.log(userData.user.uid)
      setUserUid(userData.user.uid)
      // const response = await getIdToken(userData)
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

/*   const {loggedIn, setLoggedIn} = useContext(LoginContext)
  const {userUid, setUserUid} = useContext(UserUidContext) */

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
