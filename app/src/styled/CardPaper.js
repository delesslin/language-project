import { Paper } from '@material-ui/core'
import React from 'react'

import styled from 'styled-components'
const CardPaper = styled(Paper)`
  background-image: url(${({ href }) => href});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
