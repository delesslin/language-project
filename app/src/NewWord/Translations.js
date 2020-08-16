import React from 'react'
import { Grid, TextField } from '@material-ui/core'
export const Translations = () => {
  return (
    <Grid item>
      <TextField
        onFocus={() => console.log('focus')}
        required
        label='Translations'
        variant='outlined'
      />
    </Grid>
  )
}
