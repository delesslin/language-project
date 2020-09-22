import { Button, Grid, IconButton } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import SearchIcon from '@material-ui/icons/Search'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Grid item>
      <Button>
        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
          <Typography>Browse</Typography>
        </Link>
      </Button>
      <Link to='/search' style={{ textDecoration: 'none', color: 'white' }}>
        <IconButton style={{ color: 'white' }}>
          <SearchIcon />
        </IconButton>
      </Link>
    </Grid>
  )
}

export default NavBar
