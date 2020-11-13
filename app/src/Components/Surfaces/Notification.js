import React from 'react'
import styled from 'styled-components'
import { CloseIcon } from './Icon'
import { Paper } from './Paper'
import { Text } from './Text'

const Wrapper = styled.div`
  display: block;
  position: fixed;
  bottom: 0px;
  padding: 5px;
  z-index: 500;
  display: grid;
  place-items: stretch;
`
const Content = styled(Paper)`
  padding: 15px;
  min-width: 50vw;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 5px 5px 5px #555;
`
const Close = styled(CloseIcon)`
  &:hover {
    cursor: pointer;
  }
`
export const Notification = ({
  open,
  children,
  handleClose = () => console.log('No handleClose fn defined'),
}) => {
  if (open) {
    return (
      <Wrapper>
        <Content color='light'>
          <Text>{children}</Text>
          <Close size={15} onClick={handleClose} />
        </Content>
      </Wrapper>
    )
  } else {
    return null
  }
}
