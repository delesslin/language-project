import React from 'react'
import styled from 'styled-components'
import { Paper } from './Paper'
const StyledPaper = styled(Paper)``
export const Chip = (props) => {
  const { color = 'primary' } = props
  return (
    <StyledPaper {...props} color={color}>
      {props.children}
    </StyledPaper>
  )
}
