import React from 'react'
import Header from '../Header'
import { Grid, Container } from '@material-ui/core'

const Layout = ({ children }) => {
  return (
    <Grid container spacing={3} direction='column'>
      <Grid item>
        <Header />
      </Grid>
      <Grid item>
        <Container>{children}</Container>
      </Grid>
    </Grid>
  )
}

export default Layout
