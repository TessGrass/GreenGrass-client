import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
// eslint-disable-next-line object-curly-newline
import { setPersistence, signInWithEmailAndPassword, onAuthStateChanged, signOut, browserSessionPersistence, getIdToken, getAuth } from 'firebase/auth'
import { auth } from '../../firebase-config'
import { LoginContext, UserUidContext, tokenContext } from '../../context/Context'
import './Login.css'

/**
 * Represents a Login component.
 *
 * @returns {*} Returns the component.
 */
function Login() {
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  // eslint-disable-next-line no-unused-vars
  const { loggedIn, setLoggedIn } = useContext(LoginContext)
  // eslint-disable-next-line no-unused-vars
  const { userUid, setUserUid } = useContext(UserUidContext)
  // eslint-disable-next-line no-unused-vars
  const { token, setToken } = useContext(tokenContext)
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({})

  useEffect(() => {
    onAuthStateChanged(
      auth,
      // eslint-disable-next-line arrow-parens
      currentUser => {
        // eslint-disable-next-line no-unused-expressions
        currentUser ? setUser(currentUser) : setUser(null);
      },
    )
  }, [])

  /*  onAuthStateChanged(auth, (currentUser) => {
    console.log(currentUser)
    setUser(currentUser)
  }) */

  /* const createToken = async () => {
    const token = await firebase.auth().currentUser.getIdToken()
    console.log(token)
  } */

  const login = async (e) => {
    try {
      console.log('----Login-----')
      setPersistence(auth, browserSessionPersistence)
      e.preventDefault()
      const userData = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      console.log(userData.user)
      if (userData.user.email) {
        const auth = getAuth()
        const fetchedToken = await getIdToken(auth.currentUser)
        setToken(fetchedToken)
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
          <input type="text" placeholder="användarmail" onChange={(event) => { setLoginEmail(event.target.value) }} />
          <input type="password" placeholder="lösenord" onChange={(event) => { setLoginPassword(event.target.value) }} />
          <button type="submit" onClick={login}>Logga in</button>
          <button type="submit" onClick={logout}>Logga ut</button>
          <p className="message">
            Inget konto?
            {' '}
            <Link to="/register">Registrera dig här</Link>
          </p>
          {/* <p>{user?.email}</p> */}
        </form>
      </div>
    </div>
  )
}

export default Login