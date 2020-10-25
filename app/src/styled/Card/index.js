import media from 'css-in-js-media'
import styled from 'styled-components'
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
  ${media('>tablet')} {
    ${(props) => columns(props.columns, 4)}

    ${media('>desktop')} {
      ${(props) => columns(props.columns, 5)}
      ${media('>largeDesktop')} {
        ${(props) => columns(props.columns)}
      }
    }
  }
`

export { default as Card } from './CardPaper'
