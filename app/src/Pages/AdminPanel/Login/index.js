import { Button, Grid, TextField, Typography } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import React, { useRef } from 'react'
import useAPI from 'utils/hooks/useAPI'
const Login = () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const { login, error } = useAPI()
  const handleSubmit = () => {
    const email = emailRef.current.value
    const password = passwordRef.current.value
    login(email, password)
  }

  return (
    <Grid container direction='column' alignItems='center' spacing={3}>
      {error ? (
        <Grid item>
          <Alert severity='error'>Email or password is wrong</Alert>
        </Grid>
      ) : null}
      <Grid item>
        <Typography>Email</Typography>
        <TextField inputRef={emailRef} variant='outlined' required></TextField>
      </Grid>
      <Grid item>
        <Typography>Password</Typography>
        <TextField inputRef={passwordRef} variant='outlined'></TextField>
      </Grid>
      <Grid item>
        <Button variant='contained' onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
    </Grid>
  )
}

export default Login
