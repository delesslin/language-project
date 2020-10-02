import { Typography } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
const StyledTypo = styled(Typography)`
  color: #aaa;
  width: 100%;
  text-align: right;
`
const Id = ({ children }) => {
  return (
    <StyledTypo>
      <em>#{children}</em>
    </StyledTypo>
  )
}

export default Id
