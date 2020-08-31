import React from 'react'
import { useRecoilState } from 'recoil'
import { KeyboardComponent } from './KeyboardComponent'
import { KEYBOARD_ATOM } from './atoms'

export const useKeyboardInput = (INPUT_ATOM) => {
  // const [inputText, setInputText] = useRecoilState(INPUT_ATOM)
  const [keyboardState, setKeyboardState] = useRecoilState(KEYBOARD_ATOM)
  const handleFocus = () => {
    setKeyboardState({
      ...keyboardState,
      display: true,
    })
  }
  const handleBlur = () => {
    setKeyboardState({
      ...keyboardState,
      display: false,
    })
  }
  return [handleFocus, handleBlur]
}

export const GlobalKeyboard = () => {
  return <KeyboardComponent />
}
