import { Button, Grid, TextField } from '@material-ui/core'
import React, { useContext, useRef, useState } from 'react'
import { useHistory } from 'react-router'
import Page from '../../../Components/Page'
import { Auth } from '../../../context'
import useAPI from '../../../utils/hooks/useAPI'

const Signup = () => {
  const userRef = useRef(null)
  const emailRef = useRef(null)
  const passRef = useRef(null)
  const [error, setError] = useState(false)
  const history = useAPI()
  const { headers } = useAPI()
  const { Users } = useAPI()
  const handleSubmit = () => {
    Users.create({
      username: userRef.current.value,
      email: emailRef.current.value,
      password: passRef.current.value,
    })
      .then((res) => {
        history.push('/admin/users')
      })
      .catch((e) => {
        console.error(e)
        setError(true)
      })
  }
  return (
    <Page title='signup'>
      <Grid container direction='column' spacing={3}>
        <Grid item>
          <TextField label='username' inputRef={userRef} variant='filled' />
        </Grid>
        <Grid item>
          <TextField label='email' inputRef={emailRef} variant='filled' />
        </Grid>
        <Grid item>
          <TextField label='password' inputRef={passRef} variant='filled' />
        </Grid>
        <Grid item>
          <Button label='submit' onClick={handleSubmit} variant='contained'>
            signup
          </Button>
        </Grid>
      </Grid>
    </Page>
  )
}

export default Signup
