import React from 'react'
import { Paper, Grid, Typography, styled, Divider } from '@material-ui/core'
import { Submit } from './Submit'
import { MultiInput } from './MultiInput'
import { Term } from './Term'
import { useRecoilValue, atom, useSetRecoilState } from 'recoil'
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
import BlobRecorder from './BlobRecorder'

const ALERT_ATOM = atom({
  key: 'ALERT_ATOM',
  default: {
    isOpen: false,
    severity: '',
    msg: '',
  },
})
export const NewWord = () => {
  const language_entry = useRecoilValue(TERM_ATOM)
  const pronunciation = useRecoilValue(PRON_ATOM)
  const alternative_spellings = useRecoilValue(ALT_ATOM)
  const translations = useRecoilValue(TRANS_ATOM)
  const tags = useRecoilValue(TAGS_ATOM)
  const images = useRecoilValue(IMG_ATOM)
  const notes = useRecoilValue(NOTE_ATOM)
  const recordings = useRecoilValue(REC_ATOM)
  const setAlert = useSetRecoilState(ALERT_ATOM)
  const handleSubmit = () => {
    setAlert({
      isOpen: true,
      severity: 'warning',
      msg: 'Submitting new word...',
    })
    const payload = {
      language_entry,
      pronunciation,
      alternative_spellings,
      translations,
      tags,
      images,
      recordings,
      notes,
    }
    console.log('Sending new word to server')
    axios
      .post('/api/new-word', payload)
      .then((res) => {
        console.log('==============================================')
        console.log('SUCCESS!')
        setAlert({
          isOpen: true,
          severity: 'success',
          msg: 'Successfully submitted word',
        })
      })
      .catch((e) => {
        console.error(e)
        setAlert({
          isOpen: true,
          severity: 'error',
          msg: `${e}`,
        })
      })
  }
  const StyledPaper = styled(Paper)({
    padding: '20px 30px',
  })
  return (
    <Grid item xs={10}>
      <StyledPaper>
        <Grid
          container
          spacing={5}
          direction='column'
          alignItems='stretch'
          p={3}
        >
          <Grid item>
            <Typography variant='h4'>Add New Word</Typography>
          </Grid>

          <Term />
          <Divider />
          <MultiInput ATOM={PRON_ATOM} label='pronunciation' />
          <Divider />
          <MultiInput ATOM={TRANS_ATOM} label='Translations' />
          <Divider />
          <MultiInput ATOM={ALT_ATOM} label='Alternative Spellings' />
          <Divider />
          <MultiInput ATOM={TAGS_ATOM} label='Tags' />
          <Divider />
          <MultiInput ATOM={NOTE_ATOM} label='Notes' />
          <Divider />
          <MultiInput ATOM={IMG_ATOM} label='Images' />
          <Divider />
          <BlobRecorder ATOM={REC_ATOM} label='Recordings' />
          <Submit onClick={handleSubmit} />
          <SubmissionAlert ATOM={ALERT_ATOM} />
        </Grid>
      </StyledPaper>
    </Grid>
  )
}
