import React, { useState } from 'react'
import { FaKeyboard } from 'react-icons/fa'
import styled, { css, keyframes } from 'styled-components'
import { Button, CopyIcon, Page, Text } from '../../Components'
import { KeyboardComponent } from '../../Components/Keyboard/KeyboardComponent'

import media from 'css-in-js-media'
import useCopy from 'utils/hooks/useCopy'
import { Notification } from 'Components/Surfaces/Notification'
import { useHistory, useParams } from 'react-router'
const flash = keyframes`
0% {
  background-color: ${({ theme }) => theme.light};
}
50% {
  background-color: ${({ theme }) => theme.secondary};
}
100% {
  background-color: ${({ theme }) => theme.light};
}
`
const Input = styled.input`
  border: none;
  background-color: ${({ theme, copied }) =>
    copied ? theme.green : theme.light};
  padding: 10px;
  text-align: center;
  font-size: 1.5rem;
  border-radius: 10px;
`
const CopyBox = styled.div`
  border-radius: 2px;
  min-height: 75px;
  display: grid;
  grid-gap: 10px;
  width: auto;
  place-items: stretch;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  width: 100%;
  ${media('>tablet')} {
    grid-template-columns: 1fr auto;
    grid-auto-flow: column;
    ${media('>desktop')} {
      width: 80%;
    }
  }
`
const CopyButton = styled(Button)`
  background-color: ${({ theme, disabled }) =>
    disabled ? '#bbb' : theme.secondary};
  display: flex;
  justify-content: space-around;
  padding: 10px 20px;
  min-width: 100px;
  border-radius: 50px;
  ${media('<tablet')} {
    width: 90%;

    justify-content: center;
  }
  ${({ theme, disabled }) => {
    return disabled
      ? `
      box-shadow: none;
      &:hover {
        box-shadow: none;
        cursor: default;
      }
    `
      : ``
  }}
`

const TypeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  grid-gap: 35px;
  justify-items: center;
  width: 100%;
`
const Icon = styled(CopyIcon)`
  margin: 10px;
`
const StyledNotification = styled(Notification)`
  width: 80%;
`
const Type = () => {
  // const { _input = '' } = useParams()
  const [_input, setState] = React.useState('')
  const [isCopied, setIsCopied] = React.useState(false)
  const [open, setOpen] = useState(false)
  // const history = useHistory()
  const copy = useCopy()
  const handleCopy = () => {
    if (_input.length > 0) {
      copy(_input)
      setIsCopied(true)
      setOpen(true)
    }
  }
  // const setState = (fn) => {
  //   console.log(_input)
  //   let newInput = fn(_input)
  //   console.log(newInput)
  //   history.push(`/type/${newInput}`)
  // }
  console.log(_input)
  return (
    <Page>
      <TypeGrid>
        <CopyBox>
          <Input type='text' value={_input} readOnly={true} open={open} />
          <CopyButton onClick={handleCopy} disabled={_input.length <= 0}>
            <Icon />
            <Text size={1.4}>COPY</Text>
          </CopyButton>
        </CopyBox>
        <KeyboardComponent setText={setState} />
      </TypeGrid>
      <StyledNotification open={open} handleClose={() => setOpen(false)}>
        {_input} copied to your Clipboard!
      </StyledNotification>
    </Page>
  )
}

export default Type
