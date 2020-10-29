import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { CloseIcon } from './Icon'
import { Paper } from './Paper'

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 96vh;
  display: grid;
  place-items: center;
  z-index: 99;
  margin: 0px;
  padding: 0px;
`
const Content = styled(Paper)`
  height: 80vh;
  width: 80vw;
  background-color: ${({ theme }) => theme.light};
`
const Close = styled(Button)`
  margin: 5px;
`
const Modal = ({
  open = true,
  children,
  handleClose = () => console.log('CLOSE!'),
}) => {
  if (open) {
    return (
      <Background>
        <Content color='white'>
          <Close onClick={handleClose} round={true} color='red' size={2.8}>
            <CloseIcon />
          </Close>

          {children}
        </Content>
      </Background>
    )
  } else {
    return null
  }
}

export default Modal
