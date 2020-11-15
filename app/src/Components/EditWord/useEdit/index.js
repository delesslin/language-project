import React, { useContext, useEffect, useReducer } from 'react'
import { useHistory } from 'react-router'
import useAPI from 'utils/hooks/useAPI'
import blankState from '../blankState'
import Context from './context'
import reducer, { ADD_MULTI, INIT, REMOVE_MULTI, REPLACE } from './reducer'

export const EditProvider = ({
  children,
  data = blankState,
  onSave = () => console.log('no save fn'),
}) => {
  const [state, dispatch] = useReducer(reducer, data)
  const { deleteWord } = useAPI()
  const history = useHistory()
  useEffect(() => {
    if (data !== null) {
      dispatch({ type: INIT, data })
    }
  }, [data])
  const onDelete = () => {
    deleteWord(state._id).then(() => {
      // TODO: maybe make this a parameter later on
      history.push('/admin')
      dispatch({ type: INIT, blankState })
    })
  }
  const replace = (property, value) => {
    dispatch({
      type: REPLACE,
      property,
      value,
    })
  }
  const addMulti = (property, value) => {
    dispatch({
      type: ADD_MULTI,
      property,
      value,
    })
  }
  const removeMulti = (property, index) => {
    dispatch({
      type: REMOVE_MULTI,
      property,
      index,
    })
  }
  const api = {
    ...state,
    state,
    deleteWord,
    dispatch,
    onDelete,
    onSave: () => onSave(state),
    replace,
    addMulti,

    removeMulti,
  }
  return <Context.Provider value={api}>{children}</Context.Provider>
}
const useEdit = () => {
  // this should be in a provider fn
  // useEdit should be useContext(Context) and return all fn
  const api = useContext(Context)
  return api
}
export default useEdit
