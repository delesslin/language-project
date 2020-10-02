import { Grid, Typography } from '@material-ui/core'
import React from 'react'

const AltSpellings = ({ data }) => {
  if (data.length > 0) {
    return (
      <Grid container direction='column'>
        <Grid item>
          <Typography>
            <b>Alternative Spellings</b>
          </Typography>
        </Grid>
        {data.map((spelling, i) => {
          return (
            <Grid key={i} item>
              <Typography>{spelling}</Typography>
            </Grid>
          )
        })}
      </Grid>
    )
  }
  return null
}

export default AltSpellings
