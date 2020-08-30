import React, { useEffect, useState } from 'react'
import { atom, useRecoilState } from 'recoil'
import KeyboardComponent from './KeyboardComponent'

export const useKeyboard = (INPUT_ATOM, display = false) => {
  const [keyboardVisible, setKeyboardVisible] = useState(display)
  const [val, setVal] = useRecoilState(INPUT_ATOM)
  const hideKeyboard = () => {
    setKeyboardVisible(false)
  }
  const showKeyboard = () => setKeyboardVisible(true)
  // TODO: make keyboard not re-render on every click
  // May need to move to a parent component
  // TODO: close doesn't work
  const Keyboard = React.memo((keyboardVisible) => {
    console.log('render')
    return (
      <KeyboardComponent
        display={keyboardVisible}
        ATOM={INPUT_ATOM}
        closeKeyboard={hideKeyboard}
      />
    )
  })
  return {
    Keyboard,
    hideKeyboard,
    showKeyboard,
    value: val,
  }
}
