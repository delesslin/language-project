import React, { useState } from 'react'
import { Paper, Grid, Typography } from '@material-ui/core'
import { Submit } from './Submit'
import { Notes } from './Notes'
import { Tags } from './Tags'
import { Recordings } from './Recordings'
import { Images } from './Images'
import { Translations } from './Translations'
import { AltSpellings } from './AltSpellings'
import { Pronunciation } from './Pronunciation'
import { Term } from './Term'
import { RecoilRoot, atom, useRecoilValue } from 'recoil'

export const TERM_ATOM = atom({
  key: 'TERM_ATOM',
  default: '',
})
export const PRON_ATOM = atom({
  key: 'PRON_ATOM',
  default: [],
})
export const NewWord = () => {
  const term = useRecoilValue(TERM_ATOM)
  const pronunciation = useRecoilValue(PRON_ATOM)
  const handleSubmit = () => {
    const payload = {
      term,
      pronunciation,
    }
    console.log(payload)
  }
  return (
    <Grid item xs={10}>
      <Paper>
        <Grid container spacing={2} direction='column'>
          <Grid item>
            <Typography variant='h5'>Add New Word</Typography>
          </Grid>
          <Term />
          <Pronunciation />
          <AltSpellings />
          <Translations />
          <Images />
          <Recordings />
          <Tags />
          <Notes />
          <Submit onClick={handleSubmit} />
        </Grid>
      </Paper>
    </Grid>
  )
}
