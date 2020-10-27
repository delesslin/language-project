import React from 'react'
import { FaKeyboard } from 'react-icons/fa'
import styled from 'styled-components'
import { Button, CopyIcon, Page, Text } from '../../Components'
import { KeyboardComponent } from '../../Components/Keyboard/KeyboardComponent'
import useClippy from 'use-clippy'
import media from 'css-in-js-media'
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
  padding: 10px;
  margin: 20px;
  place-items: stretch;
  grid-template-columns: 1fr auto auto;
  grid-auto-flow: column;
  ${media('<tablet')} {
    grid-template-columns: 1fr;
    grid-auto-flow: row;
  }
`
const CopyButton = styled(Button)`
  background-color: ${({ theme, copied }) =>
    copied ? theme.green : theme.secondary};
  display: grid;
  grid-template-columns: minmax(50px, auto) 1fr;
  place-items: center;

  ${media('<tablet')} {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`

const TypeGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 90%;
`
const Icon = styled(CopyIcon)`
  margin: 10px;
`
const Type = () => {
  const [state, setState] = React.useState('')
  const [isCopied, setIsCopied] = React.useState(false)
  /*eslint-disable */
  const [clipboard, setClipboard] = useClippy()
  const handleCopy = () => {
    if (state.length > 0) {
      setClipboard(state)
      setIsCopied(true)
    }
  }
  React.useEffect(() => {
    if (isCopied) setIsCopied(false)
  }, [state])
  return (
    <Page Icon={FaKeyboard}>
      <TypeGrid>
        <CopyBox>
          <Input type='text' value={state} copied={isCopied} />
          <CopyButton onClick={handleCopy} copied={isCopied}>
            <Icon />
            <Text size={1.4}>{isCopied ? 'COPIED' : 'COPY'}</Text>
          </CopyButton>
        </CopyBox>
        <KeyboardComponent setText={setState} />
      </TypeGrid>
    </Page>
  )
}

export default Type
