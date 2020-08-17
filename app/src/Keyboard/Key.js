import { Paper, styled } from '@material-ui/core'
import React from 'react'
export const Key = ({ data }) => {
  const StyledPaper = styled(Paper)({
    padding: '5px 10px',
    margin: '2px 3px',
  })
  if (data.key === 'SHIFT') {
    return <StyledPaper>shift</StyledPaper>
  } else if (data.key === 'BACKSPACE') {
    return <StyledPaper>bck</StyledPaper>
  } else if (data.key === 'SPACE') {
    return <StyledPaper>_____________________</StyledPaper>
  } else {
    return <StyledPaper>{data.char}</StyledPaper>
  }
}
