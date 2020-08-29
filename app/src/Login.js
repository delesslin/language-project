import React from 'react'
import {
  Container,
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
} from '@material-ui/core'
export const Login = ({ setLogin }) => {
  const handleSubmit = () => {
    setLogin(true)
  }
  return (
    <Container>
      <Paper>
        <Typography>Test</Typography>
        <Grid container direction='column' alignItems='center'>
          <Grid item>
            <Typography variant='h4'>Login ⛓ </Typography>
          </Grid>
          <Grid item>
            <Typography>Username</Typography>
            <TextField variant='outlined' required></TextField>
          </Grid>
          <Grid item>
            <Typography>Password</Typography>
            <TextField variant='outlined'></TextField>
          </Grid>
          <Grid item>
            <Button variant='contained' onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}
