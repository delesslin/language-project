const Words = {
  create: (payload) => {
    return Axios.post('/api/words', payload, headers)
  },
  update: (_id, obj) => {
    return Axios.patch(`/api/words/${_id}`, obj, headers)
  },
  delete: (_id) => {
    return Axios.delete(`/api/words/${_id}`, headers)
  },
}
export default Words
