import React from 'react'
export const initState = {
  words: [],
  isLoading: false,
  error: null,
  headers: {},
  roles: [],
  tags: [],
}
export const APIContext = React.createContext(initState)
