import { Button, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { Words } from '../../../context'

// Makes all words available as a .csv file
const Export = () => {
  const { words } = useContext(Words.Context)
  const handleClick = () => {
    console.log(words)
  }
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
