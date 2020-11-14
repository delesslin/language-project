import { Button, Grid } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import { Page } from 'Components'
import EditWord from 'Components/EditWord'
import useAPI from 'utils/hooks/useAPI'

// Handle submit
export const NewWord = () => {
  const history = useHistory()
  const { refetchWord, createWord } = useAPI()

  const handleSubmit = (payload) => {
    createWord(payload)
      .then((res) => {
        return res.data._id
      })
      .then((_id) => {
        refetchWord()
        history.push(`/admin/${_id}`)
      })
      .catch((e) => {
        console.error(e)
      })
  }
  return (
    <Page title=''>
      <EditWord onSave={handleSubmit}></EditWord>
    </Page>
  )
}
