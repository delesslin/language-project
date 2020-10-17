import React from 'react'
import {
  Button,
  Checkbox,
  Fab,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core'
import styled from 'styled-components'
import LockIcon from '@material-ui/icons/Lock'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import SaveIcon from '@material-ui/icons/Save'
const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  place-items: center;
  grid-gap: 20px;
  transition: all 0.3s;
`
const ButtonWrapper = styled.div`
  transition: all 1s;
  ${({ locked = true }) => {
    if (locked) {
      return `
      overflow hidden;
    width: 0px;
    `
    } else {
      return `
    width: 250px;
    `
    }
  }}
`

const Buttons = ({ locked, lock, handleSubmit, handleDelete }) => {
  return (
    <ButtonGrid>
      {locked ? (
        <Fab onClick={() => lock(false)}>
          <LockOpenIcon />
        </Fab>
      ) : (
        <Fab onClick={handleSubmit} color='primary'>
          <SaveIcon />
        </Fab>
      )}
      <ButtonWrapper locked={locked}>
        <Button
          variant='contained'
          disabled={locked}
          onClick={() => lock(true)}
        >
          nevermind
        </Button>
      </ButtonWrapper>
      <ButtonWrapper locked={locked}>
        <Button
          variant='contained'
          disabled={locked}
          onClick={handleDelete}
          color='secondary'
        >
          delete
        </Button>
      </ButtonWrapper>
    </ButtonGrid>
  )
}

export default Buttons
