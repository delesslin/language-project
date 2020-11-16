// TODO: make this unnecessary
/* eslint-disable*/
import React, { useEffect, useState } from 'react'
import { APIContext, initState } from './APIContext'
import genTags from './genTags'
import WordsAPI from './WordsAPI'
import Auth from './Auth'
import Axios from 'axios'

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
  const readMessages = async () => {
    return await Axios.get('/api/message', options)
      .then(({ data }) => {
        return data
      })
      .catch(console.error)
  }
  const ignoreMessage = async (_id) => {
    return await Axios.patch(`/api/message/ignore/${_id}`, {}, options)
  }
  const sendResponse = async (_id, message) => {
    return await Axios.post(
      `/api/message/response/${_id}`,
      { message },
      options
    )
  }
  return (
    <APIContext.Provider
      value={{
        sendResponse,
        ignoreMessage,
        readMessages,
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
