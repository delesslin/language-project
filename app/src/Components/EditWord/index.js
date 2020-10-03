import { Divider, Grid } from '@material-ui/core'
import React, { useEffect, useReducer } from 'react'
import AltSpellings from './AltSpellings'

import blankState from './blankState'
import Context from './context'
import Images from './Images'
import LanguageEntry from './LanguageEntry'
import MultiText from './MultiText'
import RecordingsInput from './RecordingsInput'
import reducer, { INIT } from './reducer'

const EditWord = ({ data = null }) => {
  const [state, dispatch] = useReducer(reducer, blankState)
  useEffect(() => {
    if (data !== null) {
      dispatch({ type: INIT, data })
    }
  }, [data])

  // add notes
  // add _id
  return (
    <Context.Provider value={[state, dispatch]}>
      <Grid container direction='column' spacing={5}>
        <LanguageEntry />
        <Divider />
        <MultiText property='pronunciation' label='Pronunciation' />
        <Divider />
        <MultiText property='translations' label='Translations' />
        <Divider />
        <AltSpellings />
        <Divider />
        <MultiText property='tags' label='Tags' />
        <Divider />
        <Images />
        <Divider />
        <RecordingsInput />
      </Grid>
    </Context.Provider>
  )
}

export default EditWord
