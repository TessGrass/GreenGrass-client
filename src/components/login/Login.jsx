import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/Context'
import './Login.css'

/**
 * Represents a Login component.
 *
 * @returns {*} Returns the component.
 */
function Login() {
  const { handleSignIn } = useContext(AuthContext)
  const [loginEmail, setLoginEmail] = useState('')
  const [authError, setAuthError] = useState(false)
  const [loginPassword, setLoginPassword] = useState('')

  const login = async (e) => {
    e.preventDefault()
    const response = await handleSignIn(loginEmail, loginPassword)
    setAuthError(response)
  }

  return (
    <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3 className="login-headline">Logga in</h3>
            <p>Ange dina inloggningsuppgifter nedan</p>
          </div>
        </div>
        <form className="login-form">
          <input type="text" placeholder="användarmail" onChange={(event) => { setLoginEmail(event.target.value) }} />
          <input type="password" placeholder="lösenord" onChange={(event) => { setLoginPassword(event.target.value) }} />
          { authError ? <div className="error-auth-input">Fel email och/eller lösenord</div> : false }
          <button type="submit" onClick={login}>Logga in</button>
          <p className="message">
            Inget konto?
            {' '}
            <Link to="/register">Registrera dig här </Link>
          </p>
          <p className="message">
            Läs vår
            {' '}
            <Link to="/integrity-policy">Integritetspolicy</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
