import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export default function Header() {
  const classes = useStyles()

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
          <Typography variant='h6' className={classes.title} edge='start'>
            Catawba Language Project
          </Typography>
          <Button>
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
              <Typography>Browse</Typography>
            </Link>
          </Button>

          {/* <Button color='inherit'>Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  )
}
