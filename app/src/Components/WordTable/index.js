import { Button, Fab } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import React from 'react'
import StyledLink from '../../styled/StyledLink'
import {
  Cell,
  HeadCell,
  HeaderDiv,
  RowDiv,
  TableBody,
  TableDiv,
} from '../../styled/WordTable'

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
