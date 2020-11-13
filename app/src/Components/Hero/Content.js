import { Notification } from 'Components/Surfaces/Notification'
import React, { useState } from 'react'
import styled from 'styled-components'
import useCopy from 'utils/hooks/useCopy'
import { Chip, Text } from '../'

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
  transition: all 0.2s;
  &:hover {
    box-shadow: 2px 2px 1px #111;
    cursor: pointer;
  }
  &:active {
    box-shadow: 1px 1px 1px #666;
  }
`
const Secondary = styled(Chip)`
  text-align: center;
  padding: 10px 40px;
  background-color: ${({ theme }) => theme.green};
  border-radius: 2px;
  transform: rotate(${() => (0.5 - Math.floor() ? '-2' : '2')}deg);
`

const Content = ({ word }) => {
  const [open, setOpen] = useState(false)
  const copy = useCopy()
  const handleCopy = (e) => {
    console.log(e)
    copy(word.language_entry)
    setOpen(true)
  }
  return (
    <HeroContent>
      <Primary onClick={handleCopy}>
        <Text size={2}>{word.language_entry}</Text>
      </Primary>
      <Secondary>
        <Text size={1.7}>{word.translations[0]}</Text>
      </Secondary>
      <Notification open={open} handleClose={() => setOpen(false)}>
        {word.language_entry} copied to your clipboard!
      </Notification>
    </HeroContent>
  )
}

export default Content
