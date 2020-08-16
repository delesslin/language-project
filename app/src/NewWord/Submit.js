import React from 'react'
import { Button, Grid } from '@material-ui/core'
export const Submit = ({ onClick }) => {
  return (
    <Grid item>
      <Button onClick={onClick}>Submit</Button>
    </Grid>
  )
}
