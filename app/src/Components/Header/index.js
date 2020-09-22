import { Box, Grid } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import NavBar from './NavBar'
import styled from 'styled-components'

const CenterBox = styled(Box)`
  display: grid;
  place-items: center;
`
export default function Header() {
  // TODO: Implement search
  // TODO: Implement login
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          {/* <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton> */}
          <Grid container justify='space-between' alignItems='center'>
            <Grid item>
              <Typography variant='h5' edge='start'>
                Catawba Language Project
              </Typography>
            </Grid>
            <NavBar />
          </Grid>

          {/* <Button color='inherit'>Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  )
}
