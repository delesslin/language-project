import React from 'react'
import styled from 'styled-components'

import { Chip, Paper, Text } from '../../../Components'
const HeroContent = styled.div`
  padding: 20px;
  grid-area: content;
  display: grid;
  place-items: center;
  grid-gap: 10px;
`
const Primary = styled(Chip)`
  text-align: center;
  padding: 10px 50px;
  background-color: ${({ theme }) => theme.secondary};
  font-size: 1.2rem;
  border-radius: 2px;
  transform: rotate(${() => (0.5 - Math.floor() ? '-2' : '2')}deg);
`
const Secondary = styled(Chip)`
  text-align: center;
  padding: 10px 40px;
  background-color: ${({ theme }) => theme.green};
  border-radius: 2px;
  transform: rotate(${() => (0.5 - Math.floor() ? '-2' : '2')}deg);
`

const Content = ({ word }) => {
  return (
    <HeroContent>
      <Primary>
        <Text size={2}>{word.language_entry}</Text>
      </Primary>
      <Secondary>
        <Text size={1.7}>{word.translations[0]}</Text>
      </Secondary>
    </HeroContent>
  )
}

export default Content
