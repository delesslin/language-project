import React, { useEffect } from 'react'

import { useKeyboard } from './Keyboard/Main'
import { Grid, TextField, Container } from '@material-ui/core'
import { atom, useRecoilValue, useRecoilState } from 'recoil'
const INPUT_ATOM = atom({
  key: 'INPUT_ATOM',
  default: '',
})

const Type = () => {
  const { Keyboard, showKeyboard, hideKeyboard, value } = useKeyboard(
    INPUT_ATOM,
    true
  )
  const handleFocus = () => {
    console.log('focus')
    showKeyboard()
  }
  return (
    <Grid container direction='column'>
      <Container>
        <TextField value={value} onFocus={handleFocus} onBlur={hideKeyboard} />
      </Container>
      <Keyboard />
    </Grid>
  )
}

export default Type
