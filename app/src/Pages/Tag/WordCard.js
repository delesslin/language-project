import React from 'react'
import { Grid, Typography, Paper } from '@material-ui/core'
const WordCard = ({ data }) => {
  console.log(data)
  return (
    <Grid item>
      <Paper>
        <Typography variant='h5'>{data.language_entry}</Typography>
        <Typography variant='h6'>{data.translations[0]}</Typography>
      </Paper>
    </Grid>
  )
}

export default WordCard
