import { Button, Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import Page from '../../../Components/Page'
import { Words } from '../../../context'
import StyledLink from '../../../styled/StyledLink'
import WordDetail from './WordDetail'

const Landing = () => {
  const { words, refetchWords } = React.useContext(Words.Context)
  const history = useHistory()
  const params = useParams()
  useEffect(() => refetchWords(), [])
  useEffect(() => console.log(params), [params])
  return (
    <>
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
      <Page
        title={`editor panel [ ${words.filter((e) => e.public).length} / ${
          words.length
        } ]`}
      >
        <WordDetail />
      </Page>
    </>
  )
}

export default Landing
