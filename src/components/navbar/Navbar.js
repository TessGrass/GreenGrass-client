import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { LoginContext } from '../../context/Context'
import { useContext } from "react"

const Navbar = () => {

  const {loggedIn, setLoggedIn} = useContext(LoginContext)

  return (
    <nav className="navbar">
      <div className="links-navbar-left">
      <Link to='/'>Start</Link>
      <Link to='/inloggadklient'>Endast inloggade klienter</Link>
        <Link to='/seasonal'>Planering</Link>
        {loggedIn ? <Link to='/login'>Logga ut</Link> : <Link to='/login'>Logga in</Link> }
        {loggedIn ? null : <Link to='/register' >Registrera dig</Link>}
      
        </div>
    </nav>
  )
}
export default Navbar;


/* {loggedIn ? <Link to='/login'>Logga ut</Link> */
/* {loggedIn ? <Link to='/'onClick={() => login(false)} >Logga ut</Link> : <Link to='/login'>Logga in</Link> } */