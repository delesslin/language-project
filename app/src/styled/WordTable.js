import { Typography } from '@material-ui/core'
import React from 'react'

import styled from 'styled-components'
// TODO: THIS SHOULD REALLY USE SEMANTIC HTML TABLESSSSSS!!! Refactor
const StyledDiv = styled.td`
  // display: grid;
  // place-items: center;
  // padding: 5px;
  // p {
  //   font-weight: bold;
  // }
  padding: 5px 10px;
`
export const Cell = ({ children }) => {
  return (
    <StyledDiv>
      <Typography align='center'>{children}</Typography>
    </StyledDiv>
  )
}
export const TableDiv = styled.table`
  // display: grid;
  // grid-auto-flow: row;
  // row-gap: 3px;
  // background-color: #555;
  // border: 3px solid #555;
  // border-top: none;
`
export const RowDiv = styled.tr`
  // display: grid;
  // width: 90vw;
  // grid-auto-columns: 1fr;
  // grid-auto-flow: column;
  // column-gap: 3px;
  // background-color: #555;
  // div {
  //   background-color: #efefef;
  //   p {
  //     color: #555;
  //   }
  // }

  ${({ error }) => {
    console.error(error)
    if (error) {
      return `background-color: #F49390`
    } else {
      return `
      background-color: #efefef;
      color: #555;

      :nth-child(odd) {
        background-color: #dfdfdf;
      }
      `
    }
  }}
`
export const HeaderDiv = styled.thead`
  // background-color: #eee;
  // div {
  //   background-color: #555;
  //   p {
  //     color: #eee;
  //   }
  // }
  background-color: #555;
  color: #efefef;
`
export const HeadCell = ({ children }) => {
  return (
    <Cell as='th'>
      <b>{children}</b>
    </Cell>
  )
}
export const TableBody = styled.tbody`
  // tr {
  //   background-color: #efefef;
  //   color: #555;
  // }
  // tr:nth-child(odd) {
  //   background-color: #dfdfdf;
  // }
`
