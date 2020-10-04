import { Typography } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.td`
  // display: grid;
  // place-items: center;
  // padding: 5px;
  // p {
  //   font-weight: bold;
  // }
  padding: 5px 10px;
`
export const Cell = ({ children }) => {
  return (
    <StyledDiv>
      <Typography align='center'>{children}</Typography>
    </StyledDiv>
  )
}
