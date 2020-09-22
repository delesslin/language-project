import { Paper } from '@material-ui/core'
import styled from 'styled-components'
import React from 'react'
export const Key = ({ data, handleKeyPress, isShifted }) => {
  const handleClick = () => {
    handleKeyPress(data.char)
  }
  const handleKeyUp = (e) => {
    // TODO: Prevent BACKSPACE navigation
    if (e.key === data.key) {
      e.preventDefault()
      if (isShifted && data.shift !== undefined) {
        // console.log(data.shift)
        handleKeyPress(data.shift)
      } else {
        handleClick(data.char)
      }
    }
  }
  React.useEffect(() => {
    document.addEventListener('keypress', handleKeyUp)
    return () => {
      document.removeEventListener('keypress', handleKeyUp)
    }
  })
  const StyledPaper = styled(Paper)`
    padding: 5px 10px;
    margin: 2px 3px;
  `
  // const StyledPaper = styled(Paper)({
  //   padding: '5px 10px',
  //   margin: '2px 3px',
  // })
  if (data.key === 'SHIFT') {
    return <StyledPaper>shift</StyledPaper>
  } else if (data.key === 'BACKSPACE') {
    return <StyledPaper onClick={handleClick}>bck</StyledPaper>
  } else if (data.key === 'SPACE') {
    return (
      <StyledPaper onClick={handleClick}>_____________________</StyledPaper>
    )
  } else {
    return <StyledPaper onClick={handleClick}>{data.char}</StyledPaper>
  }
}
