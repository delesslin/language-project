import { useState } from 'react'
import Auth from './Auth.js'

const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [headers, setHeaders] = useState({ Authorization: `Bearer ` })
  const [error, setError] = useState(false)

  const login = (email, password) => {
    Auth.login(email, password, headers)
      .then((res) => {
        setHeaders({ Authorization: `Bearer ${res.data.headers}` })
        setLoggedIn(true)
      })
      .catch((e) => setError(true))
  }

  return { loggedIn, login, error, headers }
}

export default useAuth
