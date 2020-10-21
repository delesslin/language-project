import Axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { APIContext } from './APIContext'

const api = {
  create: async (payload, headers) => {
    return Axios.post('/api/words', payload, headers)
  },
  read: async (headers) => {
    return Axios.get('/api/words', headers)
      .then(({ data }) => {
        return data
      })
      .catch(console.error)
  },
  update: async (_id, obj, headers) => {
    console.log('headers delivered to update: ', headers)
    return Axios.patch(`/api/words/${_id}`, obj, headers)
  },
  delete: async (_id, headers) => {
    return Axios.delete(`/api/words/${_id}`, headers)
  },
}

export default { ...api }
