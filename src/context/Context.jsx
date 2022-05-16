import {
  React, createContext, useContext, useState, useEffect
} from 'react'
import {
  setPersistence, signInWithEmailAndPassword, onAuthStateChanged, signOut, browserSessionPersistence, getIdToken, getAuth
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase-config'

export const LoginContext = createContext({})
export const UserUidContext = createContext({})
export const tokenContext = createContext({})
export const AuthContext = createContext({
  logout: () => {},
  login: () => {}
})

/**
 * Auth method.
 * @returns {*} authContext.
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
          console.log('auth')
        } else {
          setUser(null)
          console.log('auth null')
        }
      },
    )
    // eslint-disable-next-line no-useless-return
    return
  }, [])

  const handleSignIn = async (loginEmail, loginPassword) => {
    try {
      console.log('----HandleSignIn-----')
      setPersistence(auth, browserSessionPersistence)
      const userData = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      if (!userData.user.email) {
        throw Error('Could not fetch the data')
      }
      if (userData.user.email) {
        const auth = getAuth()
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

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextValue = {
    handleSignOut,
    handleSignIn
  }
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}
