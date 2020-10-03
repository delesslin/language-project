import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { Words } from '../../../context'
import WordTable from './WordTable'

const Landing = () => {
  const { words } = React.useContext(Words.Context)
  return (
    <Grid container direction='column' spacing={3}>
      <Grid item container justify='center'>
        <Typography variant='h4'>
          <b>ADMIN PANEL</b>
        </Typography>
      </Grid>
      <Grid item>
        <WordTable words={words} />
      </Grid>
    </Grid>
  )
}

export default Landing
