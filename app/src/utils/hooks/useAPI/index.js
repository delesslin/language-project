import { useContext } from 'react'
import { APIContext } from './APIContext'

export { APIProvider } from './APIProvider'

const useAPI = () => {
  const state = useContext(APIContext)

  return { ...state }
}

export default useAPI
