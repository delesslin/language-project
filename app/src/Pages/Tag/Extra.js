import React from 'react'
import styled from 'styled-components'
import media from 'css-in-js-media'
import { Paper } from '../../Components'
const ExtraPaper = styled(Paper)`
  grid-area: extra;
  transition: all 0.2s;
  position: relative;
  overflow: hidden;
  place-self: stretch;
  min-height: 0px;
  opacity: 1;
  display: hidden;
  margin-top: 20px;

  ${({ open }) =>
    open
      ? `
      min-height: 200px;

  `
      : `
      display: block;
    min-height: 0px;
    // top: -200px;
    margin: 0px;
    opacity: 0;
  `}
`

const Extra = ({ open = true }) => {
  return <ExtraPaper open={open}>hello world</ExtraPaper>
}

export default Extra
