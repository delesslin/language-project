import { Button, Grid, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { Words } from '../../../context'
import StyledLink from '../../../styled/StyledLink'
import Page from '../../../Components/Page'
import { useHistory, useParams } from 'react-router'
import { EditTable } from '../../../Components/WordTable'
import VisibilityIcon from '@material-ui/icons/Visibility'
import styled from 'styled-components'
import EditWord from '../../../Components/EditWord'
import WordDetail from './WordDetail'

const Landing = () => {
  const { words, refetchWords } = React.useContext(Words.Context)
  const history = useHistory()
  const params = useParams()
  useEffect(() => refetchWords(), [])
  useEffect(() => console.log(params), [params])
  return (
    <Page title={`editor panel [${words.length}]`}>
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

      <WordDetail />
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
