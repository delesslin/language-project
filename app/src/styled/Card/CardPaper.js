import { hexToRgb, Paper } from '@material-ui/core'
import { arrayShuffle } from '@adriantombu/array-shuffle'
import hexRGB from 'hex-rgb'
import React from 'react'
import { parse } from 'coolors-io'
import styled from 'styled-components'
import media from 'css-in-js-media'
const colors = parse('https://coolors.co/ffe74c-ff5964-ffffff-38618c-35a7ff')
const rgb = colors.map((hex) => hexRGB(hex))
const genGradient = () => {
  const [a, b] = arrayShuffle(rgb)
  console.log(a, b)
  const deg = Math.floor(Math.random() * 360)
  return `background: rgb(${a.red},${a.green},${a.blue});
  background: linear-gradient(${deg}deg, rgba(${a.red},${a.green},${a.blue},1) 18%, rgba(${b.red},${b.green},${b.blue},1) 100%);`
}
const CardPaper = styled.div`
  ${({ href }) => {
    if (href !== undefined && href.length > 0) {
      return `background-image: url(${href});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;`
    } else {
      return genGradient()
    }
  }}
  display: grid;
  grid-template-columns: 2fr 3fr 2fr;
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
    ${({ tag }) => (tag ? `grid-template-areas: 'w w w' 'w w w';` : ``)}
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
