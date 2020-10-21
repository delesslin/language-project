import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import { APIContext, initState } from './APIContext'
import genTags from './genTags'
import useWordsAPI from './useWordsAPI'
import useUsersAPI from './useUsersAPI'
import useAuth from '../useAuth'

export const APIProvider = ({ children }) => {
  const [{ words, isLoading, tags, error }, setState] = React.useState(
    initState
  )
  const WordsAPI = useWordsAPI()
  const { loggedIn, login, error: authError, headers } = useAuth()
  const setWords = async (words) => {
    const tags = await genTags(words)
    console.log(Array.isArray(tags))
    console.log(tags)
    setState((state) => {
      return { ...state, words, tags, isLoading: false }
    })
  }

  const setIsLoading = (bool) => {
    setState((state) => {
      return { ...state, isLoading: bool }
    })
  }
  const setError = (e) => {
    setState((state) => {
      return { ...state, error: e }
    })
  }

  useEffect(() => {
    if (words.length == 0) {
      WordsAPI.read().then(setWords)
    }
  }, [])

  return (
    <APIContext.Provider
      value={{
        isLoading,
        words,
        tags,
        login,
        loggedIn,
        authError,
        headers,
        error,
      }}
    >
      {children}
    </APIContext.Provider>
  )
}
