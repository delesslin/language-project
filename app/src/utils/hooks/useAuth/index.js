import React, { useState } from 'react'
import Auth from '../useAPI/Auth.js'

const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [token, setToken] = useState('')
  const [error, setError] = useState(false)
  const [roles, setRoles] = useState([])

  const login = async (email, password) => {
    return await Auth.login(email, password, {
      headers: { Authorization: `JWT ${token}` },
    })
      .then(({ data }) => {
        const { token: newToken } = data

        setToken(newToken)
        setRoles(data.roles)

        setLoggedIn(true)
      })
      .catch((e) => setError(true))
  }

  return { loggedIn, login, error, token, roles }
}

export default useAuth
