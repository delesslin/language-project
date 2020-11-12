import { Button, Grid, Paper, Typography } from '@material-ui/core'
import styled from 'styled-components'
import React from 'react'

import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
const RequestPaper = styled(Paper)`
  padding: 20px 30px;
  &:hover {
    box-shadow: 5px 5px 5px #555;
    cursor: pointer;
    button {
      box-shadow: 5px 5px 5px #555;
    }
  }
`
// TODO: make the request include teh current entry for
const Request = () => {
  return (
    <StyledLink to='/request'>
      <Grid item>
        <RequestPaper>
          <Grid container direction='column' alignItems='center' spacing={2}>
            <Grid item>
              <Typography variant='h6'>
                Can't find what you're looking for?
              </Typography>
            </Grid>
            <Grid item>
              <Button variant='contained'>Make a Translation Request</Button>
            </Grid>
          </Grid>
        </RequestPaper>
      </Grid>
    </StyledLink>
  )
}

export default Request
