import { Chip, Fab, Grid, TextField } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import Context from '../context'
import { ADD_MULTI, REMOVE_MULTI } from '../reducer'
import AddIcon from '@material-ui/icons/Add'
import styled from 'styled-components'
const MultiInput = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto minmax(50px, auto);
  grid-auto-flow: column;
  grid-row-gap: 10px;
`
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
    <MultiInput>
      <Grid item container spacing={1} justify='center' alignItems='center'>
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
    </MultiInput>
  )
}

export default MultiText
