import { Chip, Fab, Grid, TextField } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import Context from '../context'
import { ADD_MULTI, REMOVE_MULTI } from '../reducer'
import AddIcon from '@material-ui/icons/Add'

const MultiText = ({ property, label = '' }) => {
  const [state, dispatch] = useContext(Context)
  const [currVal, setCurrVal] = useState('')
  const add = (value) => {
    dispatch({
      type: ADD_MULTI,
      property,
      value,
    })
    setCurrVal('')
  }
  const remove = (index) => {
    dispatch({
      type: REMOVE_MULTI,
      property,
      index,
    })
  }
  return (
    <Grid item container direction='column' spacing={2}>
      <Grid item container spacing={2}>
        <Grid item>
          <TextField
            value={currVal}
            onChange={(e) => setCurrVal(e.currentTarget.value)}
            label={label}
          />
        </Grid>
        <Grid item>
          <Fab onClick={() => add(currVal)}>
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
      <Grid item container spacing={1}>
        {state[property].map((entry, i) => {
          return (
            <Grid item key={i}>
              <Chip color='primary' onDelete={() => remove(i)} label={entry} />
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}

export default MultiText
