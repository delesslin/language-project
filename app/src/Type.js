import React from 'react'

import { useKeyboardInput } from './Keyboard'
import { Grid, TextField, Container } from '@material-ui/core'
import { atom, useRecoilValue } from 'recoil'
const INPUT_ATOM = atom({
  key: 'INPUT_ATOM',
  default: '',
})

const Type = () => {
  const text = useRecoilValue(INPUT_ATOM)
  const [handleFocus, handleBlur] = useKeyboardInput(INPUT_ATOM)

  return (
    <Grid container direction='column'>
      <Container>
        <TextField value={text} onFocus={handleFocus} onBlur={handleBlur} />
      </Container>
    </Grid>
  )
}

export default Type
