import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links-navbar-left">
      <Link to='/'>Start</Link>
      <Link to='/forum'>Forum</Link>
        <Link to='/planning'>Planering</Link>
        <Link to='/login'>Logga in</Link>
        <Link to='/register'>Registrera dig</Link>
        </div>
    </nav>
  )
}

export default Navbar;