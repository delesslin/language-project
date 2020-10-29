import React, { useEffect, useReducer } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import {
  InputGrid,
  NoteInput,
  RecInput,
  TagInput,
  TransInput,
} from '../../styled/Inputs'
import useAPI from '../../utils/hooks/useAPI'
import { Button } from '../Surfaces'
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

const ButtonGrid = styled.div`
  grid-area: b;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
`
const InputButton = styled(Button)`
  width: 80%;
  height: 10%;
  padding: 10px;
`
const EditWord = ({
  data = null,
  onSave = () => console.log('no saving fn'),
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, blankState)
  const { deleteWord = () => console.error('no fn') } = useAPI()
  const history = useHistory()
  useEffect(() => {
    if (data !== null) {
      dispatch({ type: INIT, data })
    }
  }, [data])
  const onSubmit = () => {
    onSave(state)
  }
  const onDelete = () => {
    deleteWord(state._id).then(() => {
      history.push('/admin')
      dispatch({ type: INIT, blankState })
    })
  }
  // add _id
  // Shouldn't _id be handled by parent element???
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
        <ButtonGrid>
          <InputButton color='secondary' onClick={onSubmit}>
            SUBMIT
          </InputButton>
          <InputButton variant='contained' color='red' onClick={onDelete}>
            DELETE
          </InputButton>
          {children}
        </ButtonGrid>
      </InputGrid>
    </Context.Provider>
  )
}

export default EditWord
