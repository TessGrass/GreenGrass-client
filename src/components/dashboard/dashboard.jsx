import React from 'react'
import './dashboard.css'
import Weather from '../weather/Weather'
import Chart from '../chart/Chart'

/**
 * Represents a Dashboard component.
 *
 * @returns {*} - Returns the component.
 */
function Dashboard() {
  return (
    <div className="db-parent-container">
      <div className="db-sidebar-container" />
      <div className="db-wrapper">
        <div className="db-weather-container"><Weather /></div>
        <div className="db-chart-container"><Chart /></div>
      </div>
    </div>
  )
}

export default Dashboard
