import React from 'react'
import { Grid, TextField, Fab } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { TERM_ATOM } from './atoms'
import EditIcon from '@material-ui/icons/Edit'
// import CustomKeyboard from '../Keyboard/KeyboardComponent'
export const Term = () => {
  const [term, setTerm] = useRecoilState(TERM_ATOM)
  const handleFocus = () => {
    console.log('OOOOH FOCUS')
  }
  return (
    <>
      <Grid item container alignItems='center' spacing={3}>
        <Grid item>
          <TextField
            label='Language Entry'
            variant='filled'
            disabled
            required
            value={term}
            onChange={(e) => setTerm(e.currentTarget.value)}
            onFocus={handleFocus}
          />
        </Grid>
        <Grid item>
          <Fab>
            <EditIcon />
          </Fab>
        </Grid>
      </Grid>
    </>
  )
}
