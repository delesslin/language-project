import React from 'react'
import { Button, Grid } from '@material-ui/core'
export const Submit = ({ onClick }) => {
  return (
    <Grid item container alignItems='center' direction='column'>
      <Grid item>
        <Button onClick={onClick} variant='contained'>
          Submit
        </Button>
      </Grid>
    </Grid>
  )
}
