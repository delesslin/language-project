import React from 'react'
import styled from 'styled-components'
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
const Modal = ({ open = true, children }) => {
  if (open) {
    return (
      <Background>
        <Content color='light'>{children}</Content>
      </Background>
    )
  } else {
    return null
  }
}

export default Modal
