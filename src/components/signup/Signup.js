import React from 'react'
import { useState } from "react"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase-config'

import './Signup.css'

function Signup() {

  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')

  const register = async (event) => {
    event.preventDefault()
    console.log('här')
    try{
    const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    console.log(user)
  } catch (error) {
    console.log(error.message)
  }

  }


  return (
    <div>
       <div className="signup-page">
      <div className="form-signup">
        <div className="signup">
          <div className="signup-header">
            <h3>REGISTRERA DIG HÄR</h3>
            <p>Skriv in din mail och ett lösenord, minst 8 tecken.</p>
          </div>
        </div>
        <form className="signup-form">
          <input type="email" placeholder="email" onChange={(event) => {setRegisterEmail(event.target.value)}}/>
          <input type="password" pattern=".{8,}" placeholder="lösenord"  required title="Minimum åtta tecken" onChange={(event) => {setRegisterPassword(event.target.value)}}/>
          <button onClick={register}>Registrera dig</button>
          <p className="signup-message">Har du redan ett konto? <Link to='/login'>Logga in här</Link></p>
          
        </form>
      </div>
    </div>
    </div>
  )
}

export default Signup
