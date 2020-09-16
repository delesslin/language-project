import { Grid, Typography } from '@material-ui/core'
import React from 'react'

export const WordEntry = ({ data }) => {
  return (
    <Grid item>
      <Typography variant='h4'>
        <b>{data}</b>
      </Typography>
    </Grid>
  )
}

export const Pronunciations = ({ data }) => {
  // How should multiple pronunciations be handled?
  return (
    <Grid item>
      <Typography variant='h5'>
        <i>{data}</i>
      </Typography>
    </Grid>
  )
}

export const Translations = ({ data }) => {
  return (
    <Grid item>
      <Typography variant='h6'>
        <i>{data}</i>
      </Typography>
    </Grid>
  )
}
