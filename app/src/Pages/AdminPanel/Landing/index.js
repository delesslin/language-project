import { Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { Words } from '../../../context'
import StyledLink from '../../../styled/StyledLink'
import { EditTable } from '../../../Components/WordTable'

const Landing = () => {
  const { words } = React.useContext(Words.Context)
  return (
    <Grid container direction='column' spacing={3}>
      <Grid item container justify='center'>
        <Typography variant='h4'>
          <b>ADMIN PANEL</b>
        </Typography>
      </Grid>
      <Grid item container spacing={3} justify='center'>
        <Grid item container spacing={2} justify='center'>
          <Grid item>
            <StyledLink to='/admin/new'>
              <Button variant='outlined'>add new word</Button>
            </StyledLink>
          </Grid>
          <Grid item>
            <StyledLink to='/admin/bulk-new'>
              <Button variant='outlined'>bulk upload</Button>
            </StyledLink>
          </Grid>
          <Grid item>
            <StyledLink to='/admin/export'>
              <Button variant='outlined'>export</Button>
            </StyledLink>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container justify='center'>
        <Grid item>
          <EditTable words={words} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Landing
