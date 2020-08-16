import React, { useState } from 'react'
import { Paper, Grid, Typography } from '@material-ui/core'
import { Submit } from './Submit'
import { MultiInput } from './MultiInput'
import { Term } from './Term'
import { useRecoilValue } from 'recoil'
import axios from 'axios'
import {
  TERM_ATOM,
  PRON_ATOM,
  ALT_ATOM,
  TRANS_ATOM,
  TAGS_ATOM,
  IMG_ATOM,
  NOTE_ATOM,
  REC_ATOM,
} from './atoms'
import { SubmissionAlert } from './SubmissionAlert'

export const NewWord = () => {
  const [apiState, setApiState] = useState({
    isLoading: null,
    error: null,
    open: false,
  })
  const language_entry = useRecoilValue(TERM_ATOM)
  const pronunciation = useRecoilValue(PRON_ATOM)
  const alternative_spellings = useRecoilValue(ALT_ATOM)
  const translations = useRecoilValue(TRANS_ATOM)
  const tags = useRecoilValue(TAGS_ATOM)
  const images = useRecoilValue(IMG_ATOM)
  const notes = useRecoilValue(NOTE_ATOM)
  const recordings = useRecoilValue(REC_ATOM)
  const handleSubmit = () => {
    setApiState({ ...apiState, isLoading: true })
    const payload = {
      language_entry,
      pronunciation,
      alternative_spellings,
      translations,
      tags,
      images,
      notes,
      recordings,
    }
    console.log('Sending new word to server')
    axios
      .post('/api/new-word', payload)
      .then((res) => {
        console.log('==============================================')
        console.log('SUCCESS!')
        setApiState({ ...apiState, isLoading: false, error: false })
      })
      .catch((e) => {
        console.error(e)
        setApiState({ ...apiState, isLoading: false, error: true })
      })
  }
  return (
    <Grid item xs={10}>
      <Paper>
        <Grid
          container
          spacing={2}
          direction='column'
          alignItems='flex-start'
          p={3}
        >
          <Grid item>
            <Typography variant='h5'>Add New Word</Typography>
          </Grid>
          <Term />
          <MultiInput ATOM={PRON_ATOM} label='pronunciation' />
          <MultiInput ATOM={TRANS_ATOM} label='Translations' />
          <MultiInput ATOM={ALT_ATOM} label='Alternative Spellings' />
          <MultiInput ATOM={TAGS_ATOM} label='Tags' />
          <MultiInput ATOM={NOTE_ATOM} label='Notes' />
          <MultiInput ATOM={IMG_ATOM} label='Images' />
          <MultiInput ATOM={REC_ATOM} label='Recordings' />
          <Submit onClick={handleSubmit} />
          <SubmissionAlert state={apiState} />
        </Grid>
      </Paper>
    </Grid>
  )
}
