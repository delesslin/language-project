import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { CloseIcon } from './Icon'
import { Paper } from './Paper'
import { Text } from './Text'
const fadeIn = keyframes`
  0% {
    bottom: -300px;
    opacity: 0;
  }
  100% {
    bottom: 0px;
    opacity: 1;
  }
`
const fadeOut = keyframes`
  100% {
    bottom: -300px;
    opacity: 0;
  }
  0% {
    bottom: 0px;
    opacity: 1;
  }
`
const Wrapper = styled.div`
  display: block;
  position: fixed;
  bottom: 0px;
  padding: 25px;
  z-index: 500;
  display: grid;
  place-items: stretch;
  animation-name: ${({ animation }) => animation};
  animation-duration: 0.35s;
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
export const Notification = (props) => {
  const {
    open,
    children,
    handleClose = () => console.log('No handleClose fn defined'),
  } = props
  const [exiting, setExiting] = useState(false)
  const handleExit = () => {
    setExiting(true)
    const timer = setTimeout(() => {
      handleClose()
      setExiting(false)
      clearTimeout(timer)
    }, 350)
  }
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        handleExit()
      }, 3000)
      return () => clearTimeout(timer)
    }
    // eslint-disable-next-line
  }, [open])

  if (open) {
    return (
      <Wrapper {...props} animation={exiting ? fadeOut : fadeIn}>
        <Content color='secondary'>
          <Text size={1.2}>{children}</Text>
          <Close size={15} onClick={handleExit} />
        </Content>
      </Wrapper>
    )
  } else {
    return null
  }
}
