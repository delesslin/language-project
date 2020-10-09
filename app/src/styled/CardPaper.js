import { hexToRgb, Paper } from '@material-ui/core'
import { arrayShuffle } from '@adriantombu/array-shuffle'
import hexRGB from 'hex-rgb'
import React from 'react'
import { parse } from 'coolors-io'
import styled from 'styled-components'
const colors = parse('https://coolors.co/ffe74c-ff5964-ffffff-38618c-35a7ff')
const rgb = colors.map((hex) => hexRGB(hex))
const genGradient = () => {
  const [a, b] = arrayShuffle(rgb)
  console.log(a, b)
  const deg = Math.floor(Math.random() * 360)
  return `background: rgb(${a.red},${a.green},${a.blue});
  background: linear-gradient(${deg}deg, rgba(${a.red},${a.green},${a.blue},1) 18%, rgba(${b.red},${b.green},${b.blue},1) 100%);`
}
const CardPaper = styled(Paper)`
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
  place-items: center;
  &:hover {
    box-shadow: 5px 5px 5px #555;
    cursor: pointer;
    > * {
      box-shadow: 2px 2px 2px #555;
    }
  }
`
export default CardPaper
