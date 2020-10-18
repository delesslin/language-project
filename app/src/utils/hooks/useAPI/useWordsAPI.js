import Axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { APIContext } from './APIContext'

const useWordsAPI = () => {
  const { headers } = useContext(APIContext)
  const api = {
    create: (payload) => {
      return Axios.post('/api/words', payload, headers)
    },
    read: () => {
      return Axios.get('/api/words', headers)
        .then(({ data }) => {
          return data
        })
        .catch(console.error)
    },
    update: (_id, obj) => {
      return Axios.patch(`/api/words/${_id}`, obj, headers)
    },
    delete: (_id) => {
      return Axios.delete(`/api/words/${_id}`, headers)
    },
  }
  return { ...api }
}
export default useWordsAPI
