import { Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'

const Request = () => {
  return (
    <Grid container direction='column'>
      <Grid item>
        <Typography variant='h6'>Make a translation request!</Typography>
      </Grid>
      <Grid item>
        <TextField>name</TextField>
      </Grid>
      <Grid item>
        <TextField>email</TextField>
      </Grid>
      <Grid item>
        <TextField>request</TextField>
      </Grid>
    </Grid>
  )
}

export default Request
