import { React, createContext } from 'react'

export const LoginContext = createContext({})
export const UserUidContext = createContext({})
export const tokenContext = createContext({})
export const AuthContext = createContext({})

/**
 * Auth method.
 * @returns {*} authContext.
 */
export function authContextProvider({ children }) {
  const handleSignOut = () => {
    console.log('bla bla bla')
  }

  const contextValue = {
    logout: handleSignOut
  }
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}
