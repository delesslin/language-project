import styled, { keyframes } from 'styled-components'
import Patterns from './Patterns'
const fadeIn = keyframes`
 0% { opacity: 0; }
 100% { opacity: 1; }
`
export const Paper = styled.div`
  animation-name: ${fadeIn};
  animation-duration: 0.3s;
  animation-iteration-count: 1;
  transition: all 0.3;
  border-radius: 10px;
  ${({ href = '', theme, success = -1, color = 'pattern' }) => {
    if (color === 'transparent') {
      return `background-color: none;`
    }
    if (href.length > 0) {
      return `background-image: url(${href});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;`
    }
    if (color === 'pattern') {
      return Patterns[Math.floor(Math.random() * Patterns.length - 1)]
    }

    if (success < 0) {
      if (href.length > 0) {
        return `background-image: url(${href});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;`
      } else {
        return `background-color: ${theme[color]};`
      }
    } else {
      return `background-color: ${success ? theme.green : theme.red};`
    }
  }}
`
