import { Button, Grid, Typography } from '@material-ui/core'
import React from 'react'

// Makes all words available as a .csv file
const Export = () => {
  const handleClick = () => {}
  return (
    <Grid container direction='column' spacing={3}>
      <Grid item>
        <Typography variant='h4'>Export Data</Typography>
      </Grid>
      <Grid item>
        <Button variant='contained' onClick={handleClick}>
          export words
        </Button>
      </Grid>
    </Grid>
  )
}

export default Export
