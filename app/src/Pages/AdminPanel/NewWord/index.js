import { Button, Grid, Paper, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { atom } from 'recoil'
import styled from 'styled-components'
import EditWord from '../../../Components/EditWord'
import axios from 'axios'
import StyledLink from '../../../styled/StyledLink'
import { useHistory } from 'react-router'
import { Words } from '../../../context'
import Page from '../../../Components/Page'
import { AuthContext } from '..'
const ALERT_ATOM = atom({
  key: 'ALERT_ATOM',
  default: {
    isOpen: false,
    severity: '',
    msg: '',
  },
})
const StyledPaper = styled(Paper)`
  padding: 20px 30px;
`
// Handle submit
export const NewWord = () => {
  const history = useHistory()
  const { refetchWords } = useContext(Words.Context)
  const { token } = useContext(AuthContext)
  const handleSubmit = (payload) => {
    console.log('Sending new word to server', payload)
    axios
      .post('/api/words', payload, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log('==============================================')
        console.log('SUCCESS!')
        console.log(res)
        refetchWords()
        history.push('/admin')
      })
      .catch((e) => {
        console.error(e)
        // setAlert({
        //   isOpen: true,
        //   severity: 'error',
        //   msg: `${e}`,
        // })
      })
  }
  return (
    <Page title='add new word'>
      <EditWord onSave={handleSubmit}>
        <Grid item>
          <StyledLink to='/admin'>
            <Button>nevermind</Button>
          </StyledLink>
        </Grid>
      </EditWord>
    </Page>
  )
}
