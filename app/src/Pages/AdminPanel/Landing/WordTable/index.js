import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { Cell } from './Cell'
// TODO: THIS SHOULD REALLY USE SEMANTIC HTML TABLESSSSSS!!! Refactor
const TableDiv = styled.div`
  display: grid;
  grid-auto-flow: row;
  row-gap: 3px;
  background-color: #555;
  border: 3px solid #555;
  border-top: none;
`
const RowDiv = styled.div`
  display: grid;
  width: 90vw;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  column-gap: 3px;
  background-color: #555;
  div {
    background-color: #efefef;
    p {
      color: #555;
    }
  }
`
const HeaderDiv = styled(RowDiv)`
  background-color: #eee;
  div {
    background-color: #555;
    p {
      color: #eee;
    }
  }
`
const WordTable = ({ words }) => {
  return (
    <TableDiv>
      <HeaderDiv>
        <Cell>ENTRY</Cell>
        <Cell>PRONOUNCED</Cell>
        <Cell>ALTERNATIVE SPELLINGS</Cell>
        <Cell>TRANSLATIONS</Cell>
        <Cell>TAGS</Cell>
        <Cell>IMAGES</Cell>
        <Cell>RECORDINGS</Cell>
        <Cell>NOTES</Cell>
        <Cell></Cell>
      </HeaderDiv>
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
              <Button variant='outlined'>EDIT</Button>
            </Cell>
          </RowDiv>
        )
      })}
    </TableDiv>
  )
}

export default WordTable
