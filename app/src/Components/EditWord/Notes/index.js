import { Chip, Fab, Grid, TextField } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import React, { useContext, useState } from 'react'
import { NoteInput } from '../../../styled/Inputs'
import Context from '../context'
import { ADD_MULTI, REMOVE_MULTI } from '../reducer'

const Notes = () => {
  const [{ notes }, dispatch] = useContext(Context)
  const [currText, setCurrText] = useState('')
  const property = 'notes'
  const add = (value) => {
    console.log(value)
    dispatch({
      type: ADD_MULTI,
      property,
      value,
    })
  }
  const remove = (index) => {
    dispatch({
      type: REMOVE_MULTI,
      property,
      index,
    })
  }
  return (
    <NoteInput>
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
          {notes.map((entry, i) => {
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
