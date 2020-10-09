import React from 'react'
// import styled from 'styled-components'
// import { Cell } from './Cell'

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
