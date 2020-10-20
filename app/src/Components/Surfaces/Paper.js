import React from 'react'
import styled from 'styled-components'
import { Card } from '../../styled/Card'

export const Paper = styled.div`
  transition: all 0.3;
  border-radius: 10px;
  ${({ href, theme, success = -1, color = 'primary' }) => {
    if (color === 'transparent') {
      return `background-color: none;`
    }
    if (success < 0) {
      if (href !== undefined && href.length > 0) {
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
