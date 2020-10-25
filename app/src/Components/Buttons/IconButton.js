import hexRgb from 'hex-rgb'
import styled from 'styled-components'

export const hexColor = (hex = '#f0f000', opacity = 0.9) => {
  const a = hexRgb(hex)
  return `rgba(${a.red},${a.green},${a.blue},${opacity})`
}
const IconButton = styled.a`
  border-radius: 50%;
  display: grid;
  place-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme['dark']};
  border: none;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
  }
  margin: 10px;
  ${({ size = '50px' }) => {
    return `

    width: ${size};
    height: ${size};
    `
  }}
  ${({ theme, variant = 'red' }) => {
    if (variant === 'transparent') {
      return `
                background-color: ${hexColor(theme.black, 0)};
                &:hover {
                  background-color: ${hexColor(theme.black, 0.2)};
        `
    } else {
      return `
      background-color: ${hexColor(theme[variant], 0.5)};
      &:hover {
        background-color: ${hexColor(theme[variant], 0.8)};
      }
   `
    }
  }};
`
export default IconButton
