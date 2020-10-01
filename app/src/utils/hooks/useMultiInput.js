import React from 'react'

import { useRecoilState } from 'recoil'
const useMultiInput = (ATOM) => {
  const [state, setState] = useRecoilState(ATOM)
  const add = (newVal) => {
    setState([...state, newVal])
  }
  const remove = (removeVal) => {
    setState(() => {
      return state.filter((value) => value !== removeVal)
    })
  }
  return { state, add, remove }
}

export default useMultiInput
