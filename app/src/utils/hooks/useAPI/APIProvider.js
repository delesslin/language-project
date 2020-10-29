// TODO: make this unnecessary
/* eslint-disable*/
import React, { useEffect, useState } from 'react'
import { APIContext, initState } from './APIContext'
import genTags from './genTags'
import WordsAPI from './WordsAPI'
import Auth from './Auth'

export const APIProvider = ({ children }) => {
  const [state, setState] = React.useState(initState)
  const { words, isLoading, tags, error, options, roles } = state
  const [loggedIn, setLoggedIn] = useState(false)

  const login = async (email, password) => {
    return await Auth.login(email, password, options)
      .then(({ data }) => {
        const { token } = data
        const Authorization = 'JWT ' + token
        setState((state) => {
          return {
            ...state,
            roles: data.roles,
            options: { headers: { authorization: Authorization } },
          }
        })

        setLoggedIn(true)
      })
      .catch((e) => setError(true))
  }

  const setWords = async (words) => {
    const tags = await genTags(words)

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
    await WordsAPI.read(options).then(setWords)
    setIsLoading(false)
  }
  useEffect(() => {
    reload()
  }, [options])
  const updateWord = async (_id, obj) => {
    const res = await WordsAPI.update(_id, obj, options)

    await reload()
  }
  const readUsers = () => {
    return Auth.read(options)
  }
  const createUser = (payload) => {
    return Auth.create(payload, options)
  }
  const deleteUser = (_id) => {
    return Auth.delete(_id, options)
  }
  const updateUser = (user) => {
    return Auth.update(user, options)
  }
  const deleteWord = async (_id) => {
    const res = await WordsAPI.delete(_id, options)
    await reload()
    return res
  }
  const createWord = async (payload) => {
    const res = await WordsAPI.create(payload, options)
    await reload()
    return res
  }
  return (
    <APIContext.Provider
      value={{
        updateWord,
        deleteWord,
        isLoading,
        words,
        tags,
        login,
        loggedIn,
        error,
        reload,
        roles,
        getUsers: readUsers,
        readUsers,
        createUser,
        deleteUser,
        updateUser,
        createWord,
        headers: options,
        refetchWord: reload,
      }}
    >
      {children}
    </APIContext.Provider>
  )
}
