import {
  React, createContext, useContext, useState, useEffect,
} from 'react'
import {
  setPersistence, signInWithEmailAndPassword, onAuthStateChanged, signOut, browserSessionPersistence, getIdToken,
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase-config'

export const LoginContext = createContext({})
export const UserUidContext = createContext({})
export const tokenContext = createContext({})
export const AuthContext = createContext({
  logout: () => {},
  login: () => {},
})

/**
 * Represents a AuthContext component.
 *
 * @returns {JSX} authContext.
 */
export function AuthContextProvider({ children }) {
  const navigate = useNavigate()
  const { setLoggedIn } = useContext(LoginContext)
  const { setToken } = useContext(tokenContext)
  const { setUserUid } = useContext(UserUidContext)
  const [user, setUser] = useState({})

  useEffect(() => {
    onAuthStateChanged(
      auth,
      (currentUser) => {
        if (currentUser) {
          setUser(currentUser)
        } else {
          setUser(null)
        }
      },
    )
    return false
  }, [])

  const handleSignIn = async (loginEmail, loginPassword) => {
    try {
      console.log(user)
      setPersistence(auth, browserSessionPersistence)
      const userData = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      if (!userData.user.email) {
        throw Error('Could not fetch the data')
      }
      if (userData.user.email) {
        const fetchedToken = await getIdToken(auth.currentUser)
        setToken(fetchedToken)
        setUserUid(userData.user.uid)
        setLoggedIn(true)
        navigate('/dashboard')
      }
    } catch (error) {
      console.log(error.message)
      return true
    }
    return false
  }
  const handleSignOut = async () => {
    await signOut(auth)
    setUser({})
    setLoggedIn(false)
  }

  const contextValue = {
    handleSignOut,
    handleSignIn,
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}
