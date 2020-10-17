import Axios from 'axios'
import React, { createContext, useState } from 'react'

const AuthContext = createContext()

const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [headers, setHeaders] = useState({ Authorization: `Bearer ` })
  const [error, setError] = useState(false)
  const login = (email, password) => {
    Axios.post('/api/users/login', {
      email,
      password,
    })
      .then((res) => {
        setHeaders({ Authorization: `Bearer ${res.data.headers}` })
        setLoggedIn(true)
      })
      .catch((e) => setError(true))
  }

  return { loggedIn, login, error, headers }
}

export default useAuth
