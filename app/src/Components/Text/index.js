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
export const RotatedDiv = styled.div`
  background-color: #fdf7d8;
  display: grid;
  place-items: center;
  border-radius: 2px;
  box-shadow: 2px 2px 1px ${({ theme }) => theme.black};
  ${({ angle = random(), theme }) => `
  background-color: ${angle < 0 ? theme.primary : theme.secondary};
  ${rotate(angle)}
  `}
`
export const RotatedText = ({ children, angle }) => (
  <RotatedDiv angle={angle}>
    <p>{children}</p>
  </RotatedDiv>
)
