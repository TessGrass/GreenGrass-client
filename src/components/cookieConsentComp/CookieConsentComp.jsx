import React from 'react'
import { Link } from 'react-router-dom'
import CookieConsent from 'react-cookie-consent';

/**
 * Represents a cookie consent component.
 *
 * @returns {*} a cookie consent component.
 */
function CookieConsentComp() {
  return (
    <div className="cookie-consent-container">
      <CookieConsent debug location="bottom" style={{ background: '#FA9F29' }}>Den här webbplatsen använder sig av Cookies. Läs mer om Cookies i vår <Link to="/integrity-policy" className="integrity-policy-link">integritetspolicy</Link></CookieConsent>
    </div>
  )
}

export default CookieConsentComp
