import { Button, Divider, Grid } from '@material-ui/core'
import React, { useEffect, useReducer } from 'react'
import AltSpellings from './AltSpellings'

import blankState from './blankState'
import Context from './context'
import Images from './Images'
import LanguageEntry from './LanguageEntry'
import MultiText from './MultiText'
import Notes from './Notes'
import RecordingsInput from './RecordingsInput'
import reducer, { INIT } from './reducer'
const Divide = () => (
  <Grid item>
    <Divider />
  </Grid>
)
const EditWord = ({
  data = null,
  onSave = (obj) => console.log('saving', obj),
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, blankState)
  useEffect(() => {
    if (data !== null) {
      dispatch({ type: INIT, data })
    }
  }, [data])
  const onSubmit = () => {
    console.log(state)
    onSave(state)
  }
  // add _id
  // Shouldn't _id be handled by parent element???
  return (
    <Context.Provider value={[state, dispatch]}>
      <Grid container direction='column' spacing={5}>
        <LanguageEntry />
        <Divide />
        <MultiText property='pronunciation' label='Pronunciation' />
        <Divide />
        <MultiText property='translations' label='Translations' />
        <Divide />
        <AltSpellings />
        <Divide />
        <MultiText property='tags' label='Tags' />
        <Divide />
        <Images />
        <Divide />
        <RecordingsInput />
        <Divide />
        <Notes />
        <Divide />
        <Grid item container spacing={3}>
          <Grid item>
            <Button variant='contained' color='primary' onClick={onSubmit}>
              SUBMIT
            </Button>
          </Grid>
          {children}
        </Grid>
      </Grid>
    </Context.Provider>
  )
}

export default EditWord
