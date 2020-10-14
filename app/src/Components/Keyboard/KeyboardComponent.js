import { Key } from './Key'
import LAYOUT from './layout.json'
import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'
// continue to get a findDOMnode error. Will this be fixed by creating a custom component using native HTML elements?
// Cna remove React.forwardRef for now
const KeyboardGrid = styled(Grid)`
  padding-bottom: 25px;
`
// TODO: Refactor to make this stateless
export const KeyboardComponent = React.memo(({ text, setText }) => {
  // const [keyboardState, setKeyboardState] = useRecoilState(KEYBOARD_ATOM)
  // const [isShifted, setIsShifted] = React.useState(false)
  const [isShifted, setIsShifted] = useState(false)
  // const KeyboardGrid = styled(Grid)({
  //   paddingBottom: '25px',
  // })
  const handleClick = (char) => {
    // TODO: remove this logic to an external function
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

  // REFACTOR TO NOT USE MATERIAL-UI? Purpose is to stop findDOMnode error
  return (
    <KeyboardGrid container direction='column'>
      <Grid item container direction='column'>
        {LAYOUT.map((row) => {
          const keys = row.map((entry, i) => {
            return (
              <Key
                key={`${entry.key}-${i}`}
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
})
