import { Button, Grid, Paper } from '@material-ui/core'
import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { atom } from 'recoil'
import styled from 'styled-components'
import EditWord from '../../../Components/EditWord'
import Page from '../../../Components/Page'
import { Auth, Words } from '../../../context'
import StyledLink from '../../../styled/StyledLink'
import useAPI from '../../../utils/hooks/useAPI'

// Handle submit
export const NewWord = () => {
  const history = useHistory()
  const { refetchWords } = useAPI()

  const { Words: WordAPI } = useAPI()
  const handleSubmit = (payload) => {
    console.log('Sending new word to server', payload)
    WordAPI.create(payload)
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
