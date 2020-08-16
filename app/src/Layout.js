import React from 'react'
import Header from './Header'
import { Grid } from '@material-ui/core'
export const Layout = ({ children }) => {
  return (
    <Grid container spacing={3} direction='column'>
      <Header />
      <Grid container item spacing={3} justify='center' direction='row'>
        {children}
      </Grid>
    </Grid>
  )
}
