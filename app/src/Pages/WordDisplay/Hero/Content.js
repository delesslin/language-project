import React from 'react'
import styled from 'styled-components'
import media from 'css-in-js-media'
import { RotatedDiv } from '../../../Components/Text'
const HeroContent = styled.div`
  padding: 20px;
  grid-area: content;
  display: grid;
  place-items: center;
  grid-gap: 10px;
`
const Primary = styled(RotatedDiv)`
  text-align: center;
  padding: 0px 30px;
  background-color: ${({ theme }) => theme.secondary};
  font-size: 1.2rem;
`
const Secondary = styled(RotatedDiv)`
  text-align: center;
  padding: 0px 30px;
  background-color: ${({ theme }) => theme.green};
`

const Content = ({ word }) => {
  return (
    <HeroContent>
      <Primary>
        <p>{word.language_entry}</p>
      </Primary>
      <Secondary>
        <p>{word.translations[0]}</p>
      </Secondary>
    </HeroContent>
  )
}

export default Content
