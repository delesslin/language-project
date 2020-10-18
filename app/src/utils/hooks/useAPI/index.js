import Axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import { useHistory } from 'react-router'
import { APIContext } from './APIContext'
import genTags from './genTags'
import useWordsAPI from './useWordsAPI'

export { APIProvider } from './APIProvider'
// import { Auth, Words as WordsContext } from '../../../context'

const useUserAPI = () => {
  const { headers } = useContext(APIContext)

  return {
    create: (payload) => Axios.post('/api/users/sign-up', payload, headers),
    read: () => Axios.get('/api/users', headers),
    update: (payload) => Axios.patch('/api/users', payload, headers),
    delete: (_id) => Axios.delete(`/api/users/${_id}`, headers),
    login: (email, password) => {},
  }
}

const useHistoryAPI = () => {
  const { history } = useContext(APIContext)
  return history
}
const useAPI = () => {
  // const Users = useUserAPI()
  // const Words = useWordsAPI()

  const state = useContext(APIContext)

  return { ...state }
}

export default useAPI
