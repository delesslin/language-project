import Axios from 'axios'
import React, { useContext } from 'react'
import { Auth, Words as WordsContext } from '../../../context'
const useUsers = () => {
  const { headers } = useContext(Auth.Context)

  return {
    create: (payload) => Axios.post('/api/users/sign-up', payload, headers),
    read: () => Axios.get('/api/users', headers),
    update: (payload) => Axios.patch('/api/users', payload, headers),
    delete: (_id) => Axios.delete(`/api/users/${_id}`, headers),
  }
}

const useWords = () => {
  const { headers } = useContext(Auth.Context)
  return {
    create: (payload) => {
      return Axios.post('/api/words', payload, headers)
    },
    read: async () => {
      const { data } = await Axios.get('/api/words', headers)
      return data
    },
    update: (_id, obj) => {
      return Axios.patch(`/api/words/${_id}`, obj, headers)
    },
    delete: (_id) => {
      return Axios.delete(`/api/words/${_id}`, headers)
    },
  }
}
const useAPI = () => {
  const WordsProps = useContext(WordsContext.Context)
  const AuthProps = useContext(Auth.Context)
  const Users = useUsers()
  const Words = useWords()
  return {
    Users,
    Words,
    ...AuthProps,
    ...WordsProps,
  }
}

export default useAPI
