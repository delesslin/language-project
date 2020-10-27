import { Button, Grid } from '@material-ui/core'
import React from 'react'
import EditWord from '../../../Components/EditWord'
import Page from '../../../Components/Page'
import StyledLink from '../../../styled/StyledLink'
import useAPI from '../../../utils/hooks/useAPI'

// Handle submit
export const NewWord = () => {
  const history = useAPI()
  const { refetchWords, createWord } = useAPI()

  const handleSubmit = (payload) => {
    console.log('Sending new word to server', payload)
    createWord(payload)
      .then((res) => {
        console.log('==============================================')
        console.log('SUCCESS!')
        console.log(res)
        refetchWords()
        history.push('/admin')
      })
      .catch((e) => {
        console.error(e)
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
