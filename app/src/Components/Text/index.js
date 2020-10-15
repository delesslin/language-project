import React from 'react'
import styled from 'styled-components'
const random = () => Math.floor(Math.random() * 10 - 5)
const rotate = (a = 5) => {
  return `
  transform: rotate(${a}deg);
  > * {
    transform: rotate(${-a}deg);
  }
  `
}
const RotatedDiv = styled.div`
  background-color: #fdf7d8;
  padding: 1px 20px;
  border-radius: 2px;
  ${({ angle = random() }) => `
  background-color: ${angle < 0 ? '#fdf7d8' : '#d7f7fe'};
  ${rotate(angle)}
  `}
`
export const RotatedText = ({ children, angle }) => (
  <RotatedDiv angle={angle}>
    <p>{children}</p>
  </RotatedDiv>
)
