import React, { useState } from 'react'
/* import { useState } from "react" */
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase-config'

import './Signup.css'

/**
 * Represents a Signup component.
 *
 * @returns {JSX} the SignUp component.
 */
function Signup() {
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [registeredUser, setRegisteredUser] = useState(false)

  // Register a new user and
  const register = async (event) => {
    try {
      event.preventDefault()
      const responseFirebase = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      if (responseFirebase.user.accessToken) {
        setRegisteredUser(true)
        event.target.reset()
        const timer = setTimeout(() => {
          clearTimeout(timer)
          setRegisteredUser(false)
        }, 3000)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="signup-container">
      <div className="signup-page">
        <div className="form-signup">
          <div className="signup">
            <div className="signup-header">
              <h3 className="register-h3">Registrera dig här</h3>
              <p>Skriv in din mail och ett lösenord, minst 6 tecken.</p>
            </div>
          </div>
          <form className="signup-form" onSubmit={register}>
            <input type="email" className="placeholder" placeholder="användarmail" onChange={(event) => { setRegisterEmail(event.target.value) }} />
            <input type="password" className="placeholder" pattern=".{6,}" placeholder="lösenord" required title="Minimum sex tecken" onChange={(event) => { setRegisterPassword(event.target.value) }} />
            <div className="signup-consent-input-wrapper">
              <input type="checkbox" id="signup-consent" name="consent" required />Jag samtycker till att skicka mina uppgifter.
            </div>
            { registeredUser ? <div className="success-register-user">Ditt konto har skapats och du kan nu logga in!</div> : false }
            <button type="submit">Registrera dig</button>
            <p className="signup-message">
              Har du redan ett konto?
              {' '}
              <Link to="/login">
                Logga in här
              </Link>
            </p>
            <p className="signup-message">
              Läs vår
              {' '}
              <Link to="/integrity-policy">Integritetspolicy</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
