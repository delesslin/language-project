import React from 'react'
import { PronInput } from '../../../styled/Inputs'
import MultiText from '../MultiText'

const Pronunciation = () => {
  return (
    <PronInput>
      <MultiText property='pronunciation' label='Pronunciation' />
    </PronInput>
  )
}

export default Pronunciation
