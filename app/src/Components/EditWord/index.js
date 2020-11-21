// TODO: migrate to Pages/admin/words

import React from 'react'
import styled from 'styled-components'
import { Button } from '../Surfaces'
import AltSpellings from './AltSpellings'

import Images from './Images'
import Pronunciation from './Pronunciation'
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
  transition: all 1s;
  opacity: ${({ show = true }) => (show ? `1` : `0`)};
`

const TagInput = styled.div`
  grid-area: t;
  background-color: ${secondlight};
  transition: all 1s;
  opacity: ${({ show = true }) => (show ? `1` : `0`)};
`

const ButtonGrid = styled.div`
  grid-area: b;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  transition: all 1s;
  opacity: ${({ show = true }) => (show ? `1` : `0`)};
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
    onSave,
  } = useEdit()
  console.log(language_entry)
  // add _id
  // Shouldn't _id be handled by parent element???
  const showExtras = () => {
    return (
      tags.length > 0 && pronunciation.length > 0 && translations.length > 0
    )
  }
  const showRequired = () => language_entry.length > 0
  return (
    <InputGrid>
      <LanguageEntry />
      <AltSpellings show={showRequired()} />
      <Pronunciation show={showRequired()} />
      <TransInput show={showRequired()}>
        <MultiText property='translations' label='Translations' />
      </TransInput>
      <TagInput show={showRequired()}>
        <MultiText property='tags' label='Tags' />
      </TagInput>
      <Images show={showExtras()} />
      <RecordingsInput show={showExtras()} />
      <Notes show={showExtras()} />
      <VisibleInput show={showExtras()} />
      <ButtonGrid show={showExtras()}>
        <InputButton color='secondary' onClick={onSave}>
          SUBMIT
        </InputButton>
        <InputButton variant='contained' color='red' onClick={onDelete}>
          DELETE
        </InputButton>
      </ButtonGrid>
    </InputGrid>
  )
}

// Need this outer wrapper to get useEdit to work in EditWord
export default (props) => (
  <EditProvider {...props}>
    <EditWord {...props}></EditWord>
  </EditProvider>
)
