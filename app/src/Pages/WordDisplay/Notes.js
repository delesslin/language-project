import { Grid, Typography } from '@material-ui/core'
import React from 'react'

const Notes = ({ data }) => {
  if (data.length > 0) {
    return (
      <Grid container direction='column'>
        <Grid item>
          <Typography>
            <b>Notes:</b>
          </Typography>
        </Grid>
        {data.map((note, i) => {
          return (
            <Grid key={i} item>
              <Typography>{note}</Typography>
            </Grid>
          )
        })}
      </Grid>
    )
  }
  return null
}

export default Notes
