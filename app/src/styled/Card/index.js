import React from 'react'
import styled from 'styled-components'
import media from 'css-in-js-media'
const columns = (x, max = 10) => {
  let cols = x < max ? x : max
  return `grid-template-columns: repeat(${cols}, 1fr);`
}
export const CardGrid = styled.div`
  display: grid;

  grid-auto-rows: minmax(150px, auto);
  grid-gap: 20px;
  place-items: stretch;

  ${columns(1)}
  ${media('>desktop')} {
    ${(props) => columns(props.columns, 5)}
    ${media('>largeDesktop')} {
      ${(props) => columns(props.columns)}
    }
  }
`

export { default as Card } from './CardPaper'
