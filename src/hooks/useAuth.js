import { auth, provider } from '../config/fireabse'
import { signInWithPopup } from 'firebase/auth'
import { UserContext } from '../contexts/UserContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const useAuth = () => {
  const { setUserData } = useContext(UserContext)
  const navigator = useNavigate()

  const handleSignInWithPopup = () => {
    signInWithPopup(auth, provider)
      .then((userCredentails) => {
        if (userCredentails.user.email) {
          const { email, displayName, photoURL } = userCredentails.user
          setUserData({ email, displayName, photoURL })
          navigator('/home')
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const getBooks = async () => {
    const token = await getAccessToken()
    const response = await fetch('http://localhost:4001/books', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    const data = await response.json()
    return data
  }

  const getAccessToken = async () => {
    return auth.currentUser.getIdToken()
  }
  return {
    handleSignInWithPopup, getAccessToken, getBooks
  }
}

export default useAuth
