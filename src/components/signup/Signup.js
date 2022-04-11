import React from 'react'
import './Signup.css'

function Signup() {
  return (
    <div>
       <div className="signup-page">
      <div className="form-signup">
        <div className="signup">
          <div className="signup-header">
            <h3>Registrera dig här</h3>
            <p>Skriv in din mail och ett lösenord, minst 8 tecken.</p>
          </div>
        </div>
        <form className="signup-form">
          <input type="email" placeholder="email"/>
          <input type="password" pattern=".{8,}" placeholder="lösenord"  required title="Minimum åtta tecken"/>
          <button>Signup</button>
          <p className="signup-message">Inte registrerad? <a href="#">Skapa ett konto</a></p>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Signup
