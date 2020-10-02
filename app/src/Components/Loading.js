import { CircularProgress } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
const LoadingDiv = styled.div`
  width: 100%;
  min-height: 40vh;
  display: grid;
`
const ProgressDiv = styled(CircularProgress)`
  place-self: center;
`
const Loading = () => {
  return (
    <LoadingDiv>
      <ProgressDiv />
    </LoadingDiv>
  )
}

export default Loading
