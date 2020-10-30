import styled from 'styled-components'

export const Text = styled.p`
  padding: 0px;
  margin: 0px;
  display: grid;
  place-items: stretch;
  font-size: ${({ size = 1 }) => size}rem;
  ${({ font = 'primary', theme }) => {
    return theme[font]
  }}
`
