import { Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { Words } from '../../../context'
import StyledLink from '../../../styled/StyledLink'
import { EditTable } from '../../../Components/WordTable'
import Page from '../../../Components/Page'
import { useHistory } from 'react-router'

const Landing = () => {
  const { words } = React.useContext(Words.Context)
  const history = useHistory()
  return (
    <Page title='admin panel'>
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
        <Grid item>
          <Button
            variant='outlined'
            onClick={() => history.push('/admin/users')}
          >
            users
          </Button>
        </Grid>
      </Grid>

      <EditTable words={words} />
    </Page>
  )
  return (
    <Grid container direction='column' spacing={3}>
      <Grid item container justify='center'>
        <Typography variant='h4'>
          <b>ADMIN PANEL</b>
        </Typography>
      </Grid>
      <Grid item container spacing={3} justify='center'></Grid>
      <Grid item container justify='center'>
        <Grid item></Grid>
      </Grid>
    </Grid>
  )
}

export default Landing
