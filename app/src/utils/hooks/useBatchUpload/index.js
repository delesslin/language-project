import React, { useContext, useState } from 'react'
import parseCSV from '../../parseCSV'
import axios from 'axios'
import { Words } from '../../../context'
import useAPI from '../useAPI'

const useBatchUpload = () => {
  const [state, setState] = useState([])
  const [error, setError] = useState(false)
  const { history, words } = useAPI()

  const handleSuccess = () => {
    history.push('/admin')
  }
  const onChange = (e) => {
    const file = e.target.files[0]
    parseCSV(file, words)
      // .then(console.log)
      .then((data) => {
        setError(false)
        setState(data)
      })
      .catch(console.error)
  }
  const onDelete = (i) => {
    console.log(`OMG DELETE ${i}`)
    setState((state) => {
      return state.filter((entry, index) => index !== i)
    })
  }
  const onSubmit = () => {
    axios
      .post('/api/batch', state)
      .then((res) => {
        console.log(res)
        handleSuccess()
      })
      .catch((e) => {
        handleFailure(e)
      })
  }
  const handleFailure = (e) => {
    console.log(e)
    setError(e)
    setState([])
  }
  return { state, onChange, onSubmit, onDelete, error }
}

export default useBatchUpload
