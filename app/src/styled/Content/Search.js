import styled from 'styled-components'
import { ContentImage } from './Images'
import media from 'css-in-js-media'

export const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 20px;
  ${media('<desktop')} {
    justify-content: flex-start;
    ${media('<phone')} {
      justify-content: center;
    }
  }
`

export const SearchResult = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: minmax(50vh, auto);
  grid-template-areas: 'pic pic text text text';
  grid-column-gap: 20px;
  border: 2px solid #555;
  border-radius: 10px;
  padding: 10px;
  ${media('<tablet')} {
    grid-template-areas: 'pic text text text text';
  }
  ${({ fullscreen }) =>
    !fullscreen
      ? ''
      : `
  grid-template-rows: auto;
  height: 70%;
  padding: 50px;

  `}
`
export const SearchImage = styled(ContentImage)`
  grid-area: pic;
  z-index: -99;
  border-radius: 10px 5px 5px 10px;
  ${media('<tablet')} {
    grid-area: pic / pic / pic / text;
  }
  ${({ href }) => {
    if (href == null) {
      return `
        background-color: red;
      `
    }
    if (href.length < 1) {
      return `
        background-color: red;
      `
    }
  }}
`
export const SearchAudio = styled.div`
  grid-area: pic;
  display: grid;
  place-items: center;

  > * {
    padding: 0px;
    margin: 0px;
  }
`

export const SearchResultText = styled.div`
  grid-area: text;
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  > * {
    margin: 0px 0px 20px 0px;
  }
  h3 {
    font-size: 2.5em;
  }
  h4 {
    font-size: 2em;
  }
  h5 {
    font-size: 1.5em;
    color: #555;
    font-style: italic;
  }
  ${media('<tablet')} {
    background: rgba(255, 255, 255, 0.9);
    margin: 15px;
    padding: 5px 15px;
    border-radius: 5px;
  }
`
export const ResultTags = styled.div`
  display: flex;
  flex-wrap: wrap;
`
