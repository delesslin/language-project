import React from 'react'
import CustomKeyboard from './Keyboard/Main'
import { Grid, TextField } from '@material-ui/core'
import { atom, useRecoilValue } from 'recoil'

const TEXT_ATOM = atom({
  key: 'TEXT_ATOM',
  default: '',
})
const KeyboardPage = () => {
  const text = useRecoilValue(TEXT_ATOM)
  return (
    <Grid container direction='column'>
      <TextField value={text} />
      <CustomKeyboard ATOM={TEXT_ATOM} />
    </Grid>
  )
}

export default KeyboardPage
