/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../context/Context'
import './Navbar.css'
// import { useContext } from "react"

/**
 * Represents a Navbar component.
 *
 * @returns {*} - returns the component.
 */
function Navbar() {
  const { loggedIn, setLoggedIn } = useContext(LoginContext)

  return (
    <nav className="navbar">
      <div className="links-navbar-left">
        <Link to="/">Start</Link>
        <Link to="/inloggadklient">Endast inloggade klienter</Link>
        <Link to="/seasonal">Planering</Link>
        <Link to="/weather">Väder</Link>
        {loggedIn ? <Link to="/login">Logga ut</Link> : <Link to="/login">Logga in</Link> }
        {loggedIn ? null : <Link to="/register">Registrera dig</Link>}
      </div>
    </nav>
  )
}
export default Navbar;

/* {loggedIn ? <Link to='/login'>Logga ut</Link> */
