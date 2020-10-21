import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import { APIContext, initState } from './APIContext'
import genTags from './genTags'

import useUsersAPI from './useUsersAPI'
import useAuth from '../useAuth'
import WordsAPI from './WordsAPI'

export const APIProvider = ({ children }) => {
  const [{ words, isLoading, tags, error }, setState] = React.useState(
    initState
  )

  const Auth = useAuth()
  const { loggedIn, login, error: authError, headers } = Auth
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

  const reload = async () => {
    setIsLoading(true)
    await WordsAPI.read(headers).then(setWords)
    setIsLoading(false)
  }
  useEffect(() => {
    if (words.length == 0) {
      reload()
    }
  }, [])
  const updateWord = async (_id, obj) => {
    console.log(headers)
    const res = await WordsAPI.update(_id, obj, headers)
    console.log(res)
    await reload()
    console.log('DONE')
  }
  return (
    <APIContext.Provider
      value={{
        updateWord,
        isLoading,
        words,
        tags,
        login,
        loggedIn,
        authError,
        headers,
        error,
        reload,
      }}
    >
      {children}
    </APIContext.Provider>
  )
}
