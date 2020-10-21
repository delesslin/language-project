import { useState } from 'react'
import Auth from './Auth.js'

const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [headers, setHeaders] = useState({ Authorization: `Bearer ` })
  const [error, setError] = useState(false)

  const login = async (email, password) => {
    return Auth.login(email, password, headers)
      .then((res) => {
        console.log(res.data)
        setHeaders({ headers: { authorization: `Bearer ${res.data.token}` } })
        setLoggedIn(true)
      })
      .catch((e) => setError(true))
  }

  return { loggedIn, login, error, headers }
}

export default useAuth
