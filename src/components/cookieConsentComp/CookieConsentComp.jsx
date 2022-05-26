import React from 'react'
import { Link } from 'react-router-dom'
import CookieConsent from 'react-cookie-consent';
import './CookieConsentComp.css'

/**
 * Represents a cookie consent component.
 *
 * @returns {*} a cookie consent component.
 */
function CookieConsentComp() {
  return (
    <div className="cookie-consent-container">
      <CookieConsent
        debug
        location="bottom"
        style={{ background: '#FA9F29' }}
        buttonStyle={{
          fontFamily: 'Quicksand', fontWeight: '500', padding: '10px', borderRadius: '10px', marginLeft: '6vh',
        }}
        expires={365}
        buttonText="Jag förstår"
      >
        Den här webbplatsen använder sig av Cookies. Läs mer om Cookies i vår <Link to="/integrity-policy" className="integrity-policy-link">integritetspolicy</Link>
      </CookieConsent>
    </div>
  )
}

export default CookieConsentComp
