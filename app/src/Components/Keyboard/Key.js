import styled from 'styled-components'
import React from 'react'
import { Paper, Text } from '../Surfaces'
import { BackspaceIcon, ShiftIcon } from '../Surfaces/Icon'
import { useState } from 'react'
import media from 'css-in-js-media'
const StyledPaper = styled(Paper)`
  padding: 5px 10px;
  background-color: ${({ theme, clicked = false }) =>
    clicked ? theme.light : theme.primary};
  display: grid;
  place-items: center;
  border-radius: 5px;
  transition: all 0.01ds;

  box-shadow: ${({ clicked = false }) =>
    clicked ? `1px 1px 1px #555` : `3px 3px #555`};
  border: solid 2px ${({ clicked = false, theme }) =>
    clicked ? `${theme.light}` : `${theme.primary}`};
  &:hover {
    box-shadow 4px 4px 2px #555;
    cursor: pointer;
  }
  ${media('<tablet')}{
    padding: 2px;
  }
`
const KeyText = styled(Text)`
  font-size: 1rem;
  ${media('>phone')} {
    font-size: 1.1rem;
    ${media('>tablet')} {
      font-size: 1.3rem;
      ${media('>desktop')} {
        font-size: 1.5rem;
      }
    }
  }
`
const isThisKey = (e, thisKey) => {
  let key = e.key
  if (key === 'Backspace') key = 'BACKSPACE'
  if (key === 'Shift') key = 'SHIFT'
  if (e.code === 'Space') key = 'SPACE'
  return key === thisKey
}
export const Key = ({ data, isShifted = false, setIsShifted, setString }) => {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = (char) => {
    if (char === 'BACKSPACE') {
      setString((string) => string.slice(0, -1))
    } else {
      setString((str) => str + char)
    }
  }

  const handleMouseDown = () => {
    setIsClicked(true)
    if (data.key === 'SHIFT') {
      setIsShifted(true)
    } else if (data.key === 'SPACE') {
      handleClick(' ')
    } else {
      if (isShifted && data.shift !== undefined) {
        handleClick(data.shift)
      } else {
        handleClick(data.char)
      }
    }
  }
  const handleMouseUp = () => {
    if (data.key === 'SHIFT') setIsShifted(false)
    setIsClicked(false)
  }
  const handleKeyDown = (e) => {
    // TODO: Prevent BACKSPACE navigation

    if (isThisKey(e, data.key)) {
      e.preventDefault()
      handleMouseDown()
    }
  }
  const handleKeyUp = (e) => {
    if (isThisKey(e, data.key)) {
      handleMouseUp()
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
    /*eslint-disable*/
  }, [])

  if (data.key === 'SHIFT') {
    return (
      <StyledPaper
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        clicked={isClicked}
      >
        <ShiftIcon />
      </StyledPaper>
    )
  } else if (data.key === 'BACKSPACE') {
    return (
      <StyledPaper
        clicked={isClicked}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <BackspaceIcon />
      </StyledPaper>
    )
  } else if (data.key === 'SPACE') {
    return (
      <StyledPaper
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        clicked={isClicked}
      >
        _________________________________
      </StyledPaper>
    )
  } else {
    return (
      <StyledPaper
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        clicked={isClicked}
      >
        <KeyText>
          {isShifted && data.shift != null ? data.shift : data.char}
        </KeyText>
      </StyledPaper>
    )
  }
}
