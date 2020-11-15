import React from 'react'
import styled from 'styled-components'
import MultiText from './MultiText'
const trilight = '#FFEBF1'
const PronInput = styled.div`
  grid-area: p;
  background-color: ${trilight};
  transition: all 1s;
  opacity: ${({ show = true }) => (show ? `1` : `0`)};
`

const Pronunciation = ({ show }) => {
  return (
    <PronInput show={show}>
      <MultiText property='pronunciation' label='Pronunciation' />
    </PronInput>
  )
}

export default Pronunciation
