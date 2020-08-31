import { Drawer, Grid, styled } from '@material-ui/core'
import React from 'react'
import LAYOUT from './layout.json'
import { Key } from './Key'
import { Close } from './Close'
import { useRecoilState } from 'recoil'
import { KEYBOARD_ATOM } from './atoms'
// continue to get a findDOMnode error. Will this be fixed by creating a custom component using native HTML elements?
export const KeyboardComponent = () => {
  const [keyboardState, setKeyboardState] = useRecoilState(KEYBOARD_ATOM)
  const [isShifted, setIsShifted] = React.useState(false)
  const display = keyboardState.display
  const text = keyboardState.value
  const setText = (str) => {
    setKeyboardState({
      ...keyboardState,
      value: str,
    })
  }
  const KeyboardGrid = styled(Grid)({
    paddingBottom: '25px',
  })

  const handleClick = (char) => {
    console.log(char)
    if (char === 'BACKSPACE') {
      const newText = text.substring(0, text.length - 1)
      setText(newText)
    } else if (char === 'SHIFT') {
      // TODO: figure out how SHIFT is going to work. More like caps lock? or remove
      setIsShifted(!isShifted)
    } else {
      const newText = text + char
      setText(newText)
    }
  }
  const handleClose = () => {
    // closeKeyboard()
    console.log('CLOSE KEYBOARD!')
  }
  // REFACTOR TO NOT USE MATERIAL-UI? Purpose is to stop findDOMnode error
  return (
    <Drawer anchor='bottom' open={display}>
      <KeyboardGrid container direction='column'>
        <Close onClose={handleClose} />
        <Grid item container direction='column'>
          {LAYOUT.map((row) => {
            const keys = row.map((entry) => {
              return (
                <Key
                  key={`${entry.key}-${Math.random()}`}
                  data={entry}
                  handleKeyPress={handleClick}
                  isShifted={isShifted}
                />
              )
            })
            return (
              <Grid item container justify='center' key={Math.random()}>
                {keys}
              </Grid>
            )
          })}
        </Grid>
      </KeyboardGrid>
    </Drawer>
  )
}
