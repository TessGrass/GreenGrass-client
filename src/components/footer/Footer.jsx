import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

/**
 * Represents a footer component.
 *
 * @returns {JSX} Returns a footer component.
 */
function Footer() {
  return (
    <div>
      <div className="footer-container">
        <p className="footer-text"><Link to="/integrity-policy" className="link-integrity-policy">Integritetspolicy</Link></p>
        <p className="footer-text"><Link to="/integrity-policy#contactform" className="link-integrity-policy">Kontakta oss</Link></p>
      </div>
    </div>
  )
}

export default Footer
