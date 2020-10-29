import Axios from 'axios'

const api = {
  create: (payload, headers) =>
    Axios.post('/api/users/sign-up', payload, headers),
  read: (headers) => Axios.get('/api/users', headers),
  update: (payload, headers) => Axios.patch('/api/users', payload, headers),
  delete: (_id, headers) => Axios.delete(`/api/users/${_id}`, headers),
  login: async (email, password, headers = {}) => {
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

export default api
