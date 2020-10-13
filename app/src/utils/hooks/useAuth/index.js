import Axios from 'axios'
import React, { createContext, useState } from 'react'

const AuthContext = createContext()

const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [token, setToken] = useState('')
  const [error, setError] = useState(false)
  const login = (email, password) => {
    Axios.post('/api/users/login', {
      email,
      password,
    })
      .then((res) => {
        setToken(res.data.token)
        setLoggedIn(true)
      })
      .catch((e) => setError(true))
  }
  return { loggedIn, token, login, error }
}

export default useAuth
