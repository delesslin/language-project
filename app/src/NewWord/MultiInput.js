import React, { useState } from 'react'
import { Grid, TextField, Fab, Chip } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { PRON_ATOM } from './atoms'
import DoneIcon from '@material-ui/icons/Done'
// import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
export const MultiInput = ({ ATOM, label }) => {
  const [state, setState] = useRecoilState(ATOM)
  const [inputValue, setInputValue] = useState('')
  const handleAdd = () => {
    setState([...state, inputValue])
    setInputValue('')
  }

  const handleDelete = (pron) => {
    console.log(pron)
    setState(() => {
      return state.filter((value) => value !== pron)
    })
  }
  return (
    <Grid
      item
      container
      direction='column'
      alignContent='flex-start'
      spacing={1}
    >
      <Grid item container justify='space-between' xs={7}>
        <TextField
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
          required
          variant='outlined'
          label={label}
        ></TextField>
        <Fab color='primary' aria-label='add' onClick={handleAdd}>
          <AddIcon />
        </Fab>
      </Grid>
      <Grid item container>
        {state.map((item) => {
          return (
            <Chip
              key={item}
              label={item}
              clickable
              color='primary'
              onDelete={() => handleDelete(item)}
            />
          )
        })}
      </Grid>
    </Grid>
  )
}
