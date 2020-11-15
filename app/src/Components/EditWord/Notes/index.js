import { Chip, Fab, Grid, TextField } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import React, { useState } from 'react'
import styled from 'styled-components'
import useEdit from '../useEdit'

const secondlight = '#FFFED6'

const NoteInput = styled.div`
  grid-area: n;
  background-color: ${secondlight};
  transition: all 1s;
  opacity: ${({ show = true }) => (show ? `1` : `0`)};
`
const Notes = ({ show }) => {
  const { notes, removeMulti, addMulti } = useEdit()
  const [currText, setCurrText] = useState('')
  const property = 'notes'
  const add = (value) => {
    addMulti(property, value)
  }
  const remove = (index) => {
    removeMulti(property, index)
  }
  return (
    <NoteInput show={show}>
      <div>
        <Grid item container spacing={2}>
          <Grid item>
            <TextField
              variant='outlined'
              value={currText}
              onChange={(e) => setCurrText(e.currentTarget.value)}
              label={'Notes'}
            />
          </Grid>
          <Grid item>
            <Fab onClick={() => add(currText)}>
              <AddIcon />
            </Fab>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid item container spacing={1}>
          {notes &&
            notes.map((entry, i) => {
              return (
                <Grid item key={i}>
                  {/* <Paper onClick={() => remove(i)}>{entry}</Paper> */}
                  <Chip label={entry} onDelete={() => remove(i)} />
                </Grid>
              )
            })}
        </Grid>
      </div>
    </NoteInput>
  )
}

export default Notes
