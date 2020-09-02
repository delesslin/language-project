import { Drawer, Grid, styled } from '@material-ui/core'
import React from 'react'
import LAYOUT from './layout.json'
import { Key } from './Key'
import { useRecoilState } from 'recoil'
import { KEYBOARD_ATOM } from './atoms'
// continue to get a findDOMnode error. Will this be fixed by creating a custom component using native HTML elements?
// Cna remove React.forwardRef for now
export const KeyboardComponent = ({ text, setText }) => {
  const [keyboardState, setKeyboardState] = useRecoilState(KEYBOARD_ATOM)
  const [isShifted, setIsShifted] = React.useState(false)

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
    setKeyboardState({
      display: false,
      value: '',
    })
  }
  // REFACTOR TO NOT USE MATERIAL-UI? Purpose is to stop findDOMnode error
  return (
    <KeyboardGrid container direction='column'>
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
  )
}
