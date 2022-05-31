/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MdLogout } from 'react-icons/md';
import { LoginContext, AuthContext } from '../../context/Context'
import './Navbar.css'

/**
 * Represents a Navbar component.
 *
 * @returns {JSX} - returns a Navbar component.
 */
function Navbar() {
  const { loggedIn } = useContext(LoginContext)
  const { handleSignOut } = useContext(AuthContext)

  const logout = (e) => {
    e.preventDefault()
    handleSignOut()
  }

  return (
    <nav className="navbar">
      <Link to="/">Start</Link>
      {loggedIn ? <Link to="/dashboard">Mitt Konto</Link> : null }
      <Link to="/seasonal">Säsongsprogram</Link>
      {loggedIn ? null : <Link to="/register">Registrera dig</Link>}
      {loggedIn ? <button type="submit" className="button-signout" onClick={logout}>Logga ut</button> : <Link to="/login" className="login-link">Logga in</Link> }
    </nav>
  )
}
export default Navbar;
