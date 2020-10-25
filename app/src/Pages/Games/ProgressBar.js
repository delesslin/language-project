import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 1rem;
  background-color: #fff;
  width: 100%;
  border-radius: 10px;
  box-shadow: inset 1px 1px 5px #333;
  overflow: hidden;
`
const Bar = styled.div`
  transition: width 0.5s;
  height: 100%;
  background-color: ${({ theme }) => theme.green};
  width: ${({ progress }) => progress}%;
  box-shadow: 2px 2px 1px #333;
  border-radius: 20px;
`

export const ProgressBar = ({ percent }) => {
  if (percent < 1) {
    percent = 1
  }
  if (percent > 100) {
    percent = 100
  }
  return (
    <Container>
      <Bar progress={percent}></Bar>
    </Container>
  )
}
