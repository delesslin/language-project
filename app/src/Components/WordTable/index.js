import { Button, Fab } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import React from 'react'

import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const Row = ({ word, children }) => (
  <RowDiv key={word._id} error={word.error !== undefined ? true : false}>
    <Cell>{word.language_entry}</Cell>
    <Cell>{word.pronunciation}</Cell>
    <Cell>{word.alternative_spellings.length}</Cell>
    <Cell>{word.translations.length}</Cell>
    <Cell>{word.tags.length}</Cell>
    <Cell>{word.images.length}</Cell>
    <Cell>{word.recordings.length}</Cell>
    <Cell>{word.notes.length}</Cell>
    <Cell>{children}</Cell>
  </RowDiv>
)
const Head = ({ children }) => (
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
      <HeadCell>{children}</HeadCell>
    </RowDiv>
  </HeaderDiv>
)
export const EditTable = ({ words }) => {
  return (
    <TableDiv>
      <Head>
        <Button variant='outlined' disabled>
          EDIT
        </Button>
      </Head>
      <TableBody>
        {words.map((word) => (
          <Row word={word} key={word._id}>
            <StyledLink to={`/admin/edit/${word._id}`}>
              <Button variant='outlined'>EDIT</Button>
            </StyledLink>
          </Row>
        ))}
      </TableBody>
    </TableDiv>
  )
}

export const DeleteTable = ({
  words,
  handleDelete = (i) => console.log('no handleDelete fn: ', i),
}) => (
  <TableDiv>
    <Head>
      <Fab disabled>
        <DeleteIcon />
      </Fab>
    </Head>
    <TableBody>
      {words.map((word, i) => (
        <Row word={word} key={i}>
          <Fab onClick={() => handleDelete(i)}>
            <DeleteIcon />
          </Fab>
        </Row>
      ))}
    </TableBody>
  </TableDiv>
)
