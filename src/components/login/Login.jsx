import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
  const [authError, setAuthError] = useState(false)
  const [loginPassword, setLoginPassword] = useState('')
  // eslint-disable-next-line no-unused-vars
  const { loggedIn, setLoggedIn } = useContext(LoginContext)
  // eslint-disable-next-line no-unused-vars
  const { userUid, setUserUid } = useContext(UserUidContext)
  // eslint-disable-next-line no-unused-vars
  const { token, setToken } = useContext(tokenContext)
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({})
  const navigate = useNavigate()

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

  const login = async (e) => {
    try {
      console.log('----Login-----!')
      setPersistence(auth, browserSessionPersistence)
      e.preventDefault()
      const userData = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      console.log(userData)
      if (!userData.user.email) {
        throw Error('Could not fetch the data')
      }
      if (userData.user.email) {
        const auth = getAuth()
        const fetchedToken = await getIdToken(auth.currentUser)
        setToken(fetchedToken)
        setUserUid(userData.user.uid)
        setLoggedIn(true)
        navigate('/dashboard')
      }
    } catch (error) {
      console.log('error')
      console.log(error.message)
      setAuthError(true)
    }
  }

  const logout = async (e) => {
    e.preventDefault()
    await signOut(auth)
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
          {authError ? <div className="error-auth-input">Fel email och/eller lösenord</div> : false }
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
