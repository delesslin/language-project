import React from 'react'
import styled from 'styled-components'
import { Button } from '../Surfaces'
import AltSpellings from './AltSpellings'
import Context from './context'
import Images from './Inputs/Images'
import Pronunciation from './Inputs/Pronunciation'
import LanguageEntry from './LanguageEntry'
import MultiText from './MultiText'
import Notes from './Notes'
import RecordingsInput from './RecordingsInput'
import useEdit from './useEdit'
import VisibleInput from './VisibleInput'
import { EditProvider } from './useEdit'

const highlight = '#eefafc'
const secondlight = '#FFFED6'
const trilight = '#FFEBF1'
const InputGrid = styled.div`
  transition: all 0.2s;
  border-radius: 25px;
  overflow: hidden;
  border: 2px solid ${highlight};
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;

  grid-gap: 9px;
  grid-template-areas:
    'word word word word a a'
    'tr tr p p t t'
    'n n n n n n'
    'r r r i i i'
    'v v b b b b';

  > div {
    padding: 10px;
    :hover {
      box-shadow: inset 0px 0px 5px #ddd;
    }
  }
`
const TransInput = styled.div`
  grid-area: tr;
  background-color: ${trilight};
`

const TagInput = styled.div`
  grid-area: t;
  background-color: ${secondlight};
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
const EditWord = () => {
  const {
    language_entry = '',
    tags = [],
    pronunciation = [],
    translations = [],
    onDelete,
    dispatch,
    onSave,
  } = useEdit()
  console.log(language_entry)
  // add _id
  // Shouldn't _id be handled by parent element???
  return (
    <InputGrid>
      <LanguageEntry />
      {language_entry.length > 0 ? (
        <>
          <AltSpellings />
          <Pronunciation />
          <TransInput>
            <MultiText property='translations' label='Translations' />
          </TransInput>
          <TagInput>
            <MultiText property='tags' label='Tags' />
          </TagInput>
          {tags.length > 0 &&
          pronunciation.length > 0 &&
          translations.length > 0 ? (
            <>
              <Images />
              <RecordingsInput />
              <Notes />
              <VisibleInput></VisibleInput>
              <ButtonGrid>
                <InputButton color='secondary' onClick={onSave}>
                  SUBMIT
                </InputButton>
                <InputButton variant='contained' color='red' onClick={onDelete}>
                  DELETE
                </InputButton>
              </ButtonGrid>
            </>
          ) : null}
        </>
      ) : null}
    </InputGrid>
  )
}

// Need this outer wrapper to get useEdit to work in EditWord
export default (props) => (
  <EditProvider {...props}>
    <EditWord {...props}></EditWord>
  </EditProvider>
)
