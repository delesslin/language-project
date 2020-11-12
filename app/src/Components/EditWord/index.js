import React, { useEffect, useReducer } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'

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

const highlight = '#eefafc'
const secondlight = '#FFFED6'
const trilight = '#FFEBF1'
export const InputGrid = styled.div`
  transition: all 0.2s;
  border-radius: 25px;
  overflow: hidden;
  border: 2px solid ${highlight};
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  // background-color: #555;
  grid-gap: 9px;
  grid-template-areas:
    'v word word a a a'
    'b tr tr tr r r'
    'b p p t t t'
    'n n n i i i';
  > div {
    padding: 10px;
    :hover {
      box-shadow: inset 0px 0px 5px #ddd;
    }
  }
`
export const WordInput = styled.div`
  grid-area: word;
  display: grid;
  place-items: center;
  background-color: ${trilight};
`
export const AltInput = styled.div`
  grid-area: a;
  // grid-template-columns: 1fr;
  // grid-template-rows: auto minmax(50px, auto);
  // grid-auto-flow: column;
  // background-color: red;
  background-color: ${trilight};
`
export const PronInput = styled.div`
  grid-area: p;
  background-color: ${trilight};
`
export const ImgInput = styled.div`
  grid-area: i;
  display: flex;
  flex-direction: column;
  background-color: ${secondlight};
`
export const TransInput = styled.div`
  grid-area: tr;
  background-color: ${trilight};
`
export const RecInput = styled.div`
  grid-area: r;
  background-color: ${secondlight};
`
export const NoteInput = styled.div`
  grid-area: n;
  background-color: ${secondlight};
`
export const TagInput = styled.div`
  grid-area: t;
  background-color: ${secondlight};
`
export const ButtonInput = styled.div`
  grid-area: b;
  background-color: ${highlight};
`
export const MultiInput = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto minmax(50px, auto);
  grid-auto-flow: column;
  grid-row-gap: 10px;
`

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
