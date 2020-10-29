import media from 'css-in-js-media'

import styled from 'styled-components'

const CardPaper = styled.div`
  ${({ href, theme, success = -1 }) => {
    if (success < 0) {
      if (href !== undefined && href.length > 0) {
        return `background-image: url(${href});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;`
      } else {
        return `background-color: ${[
          theme.primary,
          theme.secondary,
          theme.dark,
          theme.light,
          theme.green,
          theme.red,
        ].find((entry) => Math.random() > 0.5)};`
      }
    } else {
      return `background-color: ${success ? theme.green : theme.red};`
    }
  }}
  display: grid;
  grid-template-columns: auto 3fr auto;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'p w d' 'p w d';
  place-items: center;
  border-radius: 10px;
  grid-gap: 5px;
  transition: all 0.2s;
  padding: 10px;
  &:hover {
    box-shadow: 2px 2px 2px #555;
  }
  ${({ clickable = false }) => {
    if (clickable) {
      return `
       &:hover {
         cursor: pointer;
       }
      `
    }
  }}
  ${media('<tablet')} {
    grid-template-areas: 'p w w' 'd w w';
  }
  > :nth-child(1) {
    grid-area: p;
  }
  > :nth-child(2) {
    grid-area: w;
  }
  > :nth-child(3) {
    grid-area: d;
  }
`
export default CardPaper
