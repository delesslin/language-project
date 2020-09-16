import React from 'react'
import { Grid, Typography, Paper } from '@material-ui/core'
import { Link } from 'react-router-dom'
const WordCard = ({ data }) => {
  console.log(data)
  return (
    <Grid item>
      <Link to={`/word/${data._id}`} style={{ textDecoration: 'none' }}>
        <Paper>
          <Typography variant='h5'>{data.language_entry}</Typography>
          <Typography variant='h6'>{data.translations[0]}</Typography>
        </Paper>
      </Link>
    </Grid>
  )
}

export default WordCard
