import React from 'react'
import './dashboard.css'
import Weather from '../weather/Weather'
import Chart from '../chart/Chart'
import Todo from '../todo/Todo'

/**
 * Represents a Dashboard component.
 *
 * @returns {*} - Returns the component.
 */
function Dashboard() {
  const session = JSON.parse(sessionStorage.getItem(Object.keys(sessionStorage)
    .filter((session) => session.includes('firebase'))[0]))
  return (
    <>
      <h1 className="db-hello-user-headline">Hejsan {session.email}!</h1>
      <p className="db-hello-user-text">Det här är din personliga dashboard</p>
      <div className="db-parent-container">
        <div className="db-wrapper">
          <div className="db-todo-container"><Todo /> </div>
          <div className="db-weather-container"><Weather /></div>
          <div className="db-chart-container"><Chart /></div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
