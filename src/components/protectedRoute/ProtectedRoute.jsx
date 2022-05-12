import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Dashboard from '../dashboard/dashboard'
import { LoginContext } from '../../context/Context'

/**
 * Represents a ProtectedRoute component.
 * @param {*} props - incoming props.
 * @returns {*} Returns a ProtectedRoute component.
 */
function ProtectedRoute() {
  console.log('---protectedRoute----')
  const { loggedIn } = useContext(LoginContext)

  if (!loggedIn) {
    return <Navigate to={{ pathname: '/login' }} /> // props location är vart vi kommer ifrån
  }
  return <Dashboard />
}

export default ProtectedRoute
