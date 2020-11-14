import React, { useEffect, useState } from 'react'
import styled, { keyframes, withTheme } from 'styled-components'
import DotLoader from 'react-spinners/DotLoader'
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`
const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  animation-name: ${({ animation }) => animation};
  animation-duration: 0.5s;
`

const StyledSpinner = styled(DotLoader)``
const SpinnerComponent = ({ theme, size = 75 }) => {
  const { primary, secondary, dark, red, green } = theme
  const colors = [primary, secondary, dark, red, green].sort(
    (a, b) => Math.random() < 0.5
  )
  const [index, setIndex] = useState(1)
  const [exiting, setExiting] = useState(false)
  const nextColor = () => {
    setIndex((i) => {
      let newI = i + 1
      if (newI > colors.length) {
        return 0
      } else {
        return newI
      }
    })
  }
  const exit = (duration = 500) => {
    setExiting(true)
    const timer = setTimeout(() => {
      nextColor()
      setExiting(false)
      clearTimeout(timer)
    }, duration)
  }
  useEffect(() => {
    const interval = setInterval(() => {
      exit()
    }, 1500)
    return () => clearInterval(interval)
  }, [colors])
  return (
    <SpinnerWrapper animation={exiting ? fadeOut : fadeIn}>
      <StyledSpinner size={size} color={colors[index]}></StyledSpinner>
    </SpinnerWrapper>
  )
}
export const Spinner = withTheme(SpinnerComponent)

export default withTheme(SpinnerComponent)
