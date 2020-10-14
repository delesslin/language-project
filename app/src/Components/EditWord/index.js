import { Button, Divider, Grid } from '@material-ui/core'
import React, { useEffect, useReducer } from 'react'
import {
  AltInput,
  ButtonInput,
  ImgInput,
  InputGrid,
  NoteInput,
  PronInput,
  RecInput,
  TagInput,
  TransInput,
  WordInput,
} from '../../styled/Inputs'
import AltSpellings from './AltSpellings'

import blankState from './blankState'
import Context from './context'
import Images from './Inputs/Images'
import Pronunciation from './Inputs/Pronunciation'
import LanguageEntry from './LanguageEntry'
import MultiText from './MultiText'
import Notes from './Notes'
import RecordingsInput from './RecordingsInput'
import reducer, { INIT } from './reducer'
import VisibleInput from './VisibleInput'
const Divide = () => (
  <Grid item>
    <Divider />
  </Grid>
)
const EditWord = ({
  data = null,
  onSave = () => console.log('saving'),
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
  if (data == null) {
    return null
  } else {
    return (
      <Context.Provider value={[state, dispatch]}>
        <InputGrid>
          <LanguageEntry />
          <AltSpellings />
          <Pronunciation />
          <Images />
          <TransInput>
            <MultiText property='translations' label='Translations' />
          </TransInput>
          <TagInput>
            <MultiText property='tags' label='Tags' />
          </TagInput>
          <RecInput>
            <RecordingsInput />
          </RecInput>
          <NoteInput>
            <Notes />
          </NoteInput>
          <VisibleInput></VisibleInput>
          <ButtonInput>
            <Grid item container spacing={3}>
              <Grid item>
                <Button variant='contained' color='primary' onClick={onSubmit}>
                  SUBMIT
                </Button>
              </Grid>
              {children}
            </Grid>
          </ButtonInput>
        </InputGrid>
      </Context.Provider>
    )
  }
}

export default EditWord
