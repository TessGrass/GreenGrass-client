/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MdLogout } from 'react-icons/fa';
import { HiOutlineLogout } from 'react-icons/hi';
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
        {loggedIn ? <Link to="/dashboard">Mitt Konto</Link> : null }
        <Link to="/seasonal">Säsongsprogram</Link>
        {loggedIn ? <Link to="/login"> Logga ut {/* <HiOutlineLogout /> */}</Link> : <Link to="/login">Logga in</Link> }
        {loggedIn ? null : <Link to="/register">Registrera dig</Link>}
      </div>
    </nav>
  )
}
export default Navbar;

/* {loggedIn ? <Link to='/login'>Logga ut</Link> */
