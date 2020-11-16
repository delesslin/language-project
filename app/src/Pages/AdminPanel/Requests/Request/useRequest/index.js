import React, { createContext, useContext, useRef, useState } from 'react'
import useAPI from 'utils/hooks/useAPI'
const context = createContext()
export const RequestProvider = ({
  request,
  children,
  reset = () => console.log('reset'),
}) => {
  const { ignoreMessage, sendResponse } = useAPI()
  const responseRef = useRef(null)
  const [showResponse, setShowResponse] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const handleSend = () => {
    setIsLoading(true)
    console.log('send')
    sendResponse(request._id, responseRef.current.value).then((res) => {
      reset()
      setIsLoading(false)
    })
  }
  const handleSave = () => {
    console.log('save')
    setShowResponse(false)
  }
  const handleDelete = () => {
    console.log('delete')
  }
  const handleIgnore = () => {
    setIsLoading(true)
    console.log('Ignore')
    ignoreMessage(request._id).then(() => {
      reset()
      setIsLoading(false)
    })
  }

  return (
    <context.Provider
      value={{
        ...request,
        request,
        handleSave,
        handleDelete,
        handleIgnore,
        handleSend,
        showResponse,
        setShowResponse,
        responseRef,
        isLoading,
      }}
    >
      {children}
    </context.Provider>
  )
}
const useRequest = () => {
  const api = useContext(context)
  return api
}

export default useRequest
