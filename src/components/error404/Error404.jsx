import React from 'react'
import './Error404.css'

/**
 * Represents a 404 error component.
 *
 * @returns {*} Returns the component.
 */
function Error404() {
  return (
    <div className="error404-parent-container">
      <div className="error404-wrapper">
        <div className="error404-text-box">
          <p className="p-error404-headline">Sidan du letar efter finns inte</p>
          <p className="p-error404-text">Vi kan tyvärr inte hitta sidan du söker. Det kan bero på ett stavfel, att sidan inte längre finns eller att den har flyttat.</p>
        </div>
      </div>
    </div>
  )
}

export default Error404
