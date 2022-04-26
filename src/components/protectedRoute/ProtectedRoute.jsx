import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Chart from '../chart/Chart'
import { LoginContext } from '../../context/Context'

/**
 * Represents a ProtectedRoute component.
 * @param {*} props - incoming props.
 * @returns {*} Returns a ProtectedRoute component.
 */
function ProtectedRoute(props) {
  console.log('---protectedRoute----')
  const { loggedIn } = useContext(LoginContext)
  const { location } = props
  console.log(loggedIn)
  console.log(props)
  // console.log(props.location)
  // console.log(location)

  if (!loggedIn) {
    return <Navigate to={{ pathname: '/login', state: { from: location } }} /> // props location är vart vi kommer ifrån
  }
  return <Chart />
}

export default ProtectedRoute

/* <Routes>
   <Route render={(props) => {
     console.log('testing')
    if (email) {
      console.log('härinne')
      return <Chart />
    } else {
      console.log('falsifalse')
      return <Navigate to={{pathname: "/login", state: {from: props.location}}} />
    }
   }}
    />
    </Routes> */
/* import React from 'react'
import { Route, Routes, Navigate, } from 'react-router-dom'

function protectedRoute({ isAuth: IsAuth, component: Component, ...rest}) {
  console.log('-----ProtectedRoute----')
  console.log(IsAuth)
  return (
    <Routes>
   <Route {...rest} render={(props) => {
    if (IsAuth) {
      console.log('härinne')
      return <Component />
    } else {
      console.log('falsifalse')
      return <Navigate to={{pathname: "/", state: {from: props.location}}} />
    }
   }}
    />
    </Routes>
  )
} */

// isAuth är användaren autensierad?
// Component: för att kunna använda protectedRoute på olika komponenter.
// ...rest övriga props. Fångar dom direkt.
// state där vi befann oss innan. Måste skickas med (fås props.location)
