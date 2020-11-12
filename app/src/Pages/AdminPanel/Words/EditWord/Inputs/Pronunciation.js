import React from 'react'
import styled from 'styled-components'
import MultiText from '../MultiText'
const trilight = '#FFEBF1'
const PronInput = styled.div`
  grid-area: p;
  background-color: ${trilight};
`
const Pronunciation = () => {
  return (
    <PronInput>
      <MultiText property='pronunciation' label='Pronunciation' />
    </PronInput>
  )
}

export default Pronunciation
