import React from 'react'
import styled from 'styled-components'
import { Paper } from './Paper'

export const Button = styled(Paper)`
  transition: all 0.2s;
  opacity: 1;
  position: relative;
  padding: 20px;
  display: grid;
  place-items: center;
  &:hover {
    cursor: pointer;
  }
  ${({ active = true }) =>
    active
      ? ``
      : `
  opacity: 0.6;
`}
  ${({ raised = true }) =>
    !raised
      ? ``
      : `
box-shadow: 2px 2px 1px #222;
&:hover {
  box-shadow: 4px 4px 2px #222;
}
`}
${({ raised = true }) =>
    !raised
      ? ``
      : `
box-shadow: 2px 2px 1px #222;
&:hover {
  box-shadow: 4px 4px 2px #222;
}
`}
${({ move = 'center' }) =>
    (move = 'center'
      ? ``
      : `
${move}: -5;
&:hover {
  ${move}: -10;
}
`)}

${({ round = false, size = 3 }) =>
    !round
      ? `width: ${size}rem;`
      : `
  border-radius: 50%;

  width: ${size}rem;
  height: ${size}rem;
`}
`
