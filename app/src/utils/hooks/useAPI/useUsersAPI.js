import Axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { APIContext } from './APIContext'

const useUsersAPI = () => {
  const { headers } = useContext(APIContext)
  const api = {
    create: (payload) => Axios.post('/api/users/sign-up', payload, headers),
    read: () => Axios.get('/api/users', headers),
    update: (payload) => Axios.patch('/api/users', payload, headers),
    delete: (_id) => Axios.delete(`/api/users/${_id}`, headers),
    login: async (email, password) => {
      return Axios.post(
        '/api/users/login',
        {
          email,
          password,
        },
        headers
      )
    },
  }
  return { ...api }
}
export default useUsersAPI
