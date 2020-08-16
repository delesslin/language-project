import React from 'react'
import { Grid, TextField } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { TERM_ATOM } from './Main'
export const Term = () => {
  const [term, setTerm] = useRecoilState(TERM_ATOM)
  return (
    <Grid item>
      <TextField
        label='Language Entry'
        variant='filled'
        required
        value={term}
        onChange={(e) => setTerm(e.currentTarget.value)}
      />
    </Grid>
  )
}
