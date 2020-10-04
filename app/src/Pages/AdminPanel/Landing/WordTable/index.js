import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { Cell } from './Cell'
import StyledLink from '../../../../styled/StyledLink'
// TODO: THIS SHOULD REALLY USE SEMANTIC HTML TABLESSSSSS!!! Refactor
const TableDiv = styled.table`
  // display: grid;
  // grid-auto-flow: row;
  // row-gap: 3px;
  // background-color: #555;
  // border: 3px solid #555;
  // border-top: none;
`
const RowDiv = styled.tr`
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
`
const HeaderDiv = styled.thead`
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
const HeadCell = ({ children }) => {
  return (
    <Cell as='th'>
      <b>{children}</b>
    </Cell>
  )
}
const TableBody = styled.tbody`
  tr {
    background-color: #efefef;
    color: #555;
  }
  tr:nth-child(odd) {
    background-color: #dfdfdf;
  }
`
const WordTable = ({ words }) => {
  return (
    <TableDiv>
      <HeaderDiv>
        <RowDiv>
          <HeadCell>ENTRY</HeadCell>
          <HeadCell>PRONOUNCED</HeadCell>
          <HeadCell>ALTERNATIVE SPELLINGS</HeadCell>
          <HeadCell>TRANSLATIONS</HeadCell>
          <HeadCell>TAGS</HeadCell>
          <HeadCell>IMAGES</HeadCell>
          <HeadCell>RECORDINGS</HeadCell>
          <HeadCell>NOTES</HeadCell>
          <HeadCell>
            <Button variant='outlined' disabled>
              EDIT
            </Button>
          </HeadCell>
        </RowDiv>
      </HeaderDiv>
      <TableBody>
        {words.map((word) => {
          return (
            <RowDiv key={word._id}>
              <Cell>{word.language_entry}</Cell>
              <Cell>{word.pronunciation}</Cell>
              <Cell>{word.alternative_spellings.length}</Cell>
              <Cell>{word.translations.length}</Cell>
              <Cell>{word.tags.length}</Cell>
              <Cell>{word.images.length}</Cell>
              <Cell>{word.recordings.length}</Cell>
              <Cell>{word.notes.length}</Cell>
              <Cell>
                <StyledLink to={`/admin/edit/${word._id}`}>
                  <Button variant='outlined'>EDIT</Button>
                </StyledLink>
              </Cell>
            </RowDiv>
          )
        })}
      </TableBody>
    </TableDiv>
  )
}

export default WordTable
