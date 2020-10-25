import media from 'css-in-js-media'
import styled from 'styled-components'
import IconButton from './IconButton'
export const RoundButton = styled(IconButton)`
  transition: all 0.3s ease-in;
  position: relative;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  ${({ variant = 'primary', theme, lean = 0 }) => {
    const color = theme[variant]

    return `
    box-shadow: 3px 3px 0px ${theme.black};
    background-color: ${color};
    right: ${lean * -1}vw;
    &:hover{
      right: ${lean * -1.2}vw;
      box-shadow: 5px 5px 0px ${theme.black};
      background-color: ${color};
    }
    `
  }}

  ${media('<=tablet')} {
    right: 0px;
    &:hover {
      right: 0px;
      box-shadow: 10px 10px 10px #555;
      cursor: pointer;
    }
  }
  &:active {
    transition: box-shadow 0.1s;
    box-shadow: 1px 1px 0px #555;
  }
`
