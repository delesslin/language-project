import React from 'react'
export const initState = {
  words: [],
  isLoading: false,
  error: null,
  options: { headers: { Authorization: 'JWT ' } },
  roles: [],
  tags: [],
}
export const APIContext = React.createContext(initState)
