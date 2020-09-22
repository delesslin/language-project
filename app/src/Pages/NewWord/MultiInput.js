import React, { useState } from 'react'
import { Grid, TextField, Fab, Chip } from '@material-ui/core'
import { useRecoilState } from 'recoil'

import AddIcon from '@material-ui/icons/Add'
import styled from 'styled-components'
const StyledTagsGrid = styled(Grid)`
  min-height: 50px;
`
// const StyledTagsGrid = styled(Grid)({
//   minHeight: '50px',
// })
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
      spacing={2}
    >
      <Grid item container justify='flex-start' xs={7} spacing={2}>
        <Grid item>
          <TextField
            value={inputValue}
            onChange={(e) => setInputValue(e.currentTarget.value)}
            required
            variant='outlined'
            label={label}
          ></TextField>
        </Grid>
        <Grid item>
          <Fab color='primary' aria-label='add' onClick={handleAdd}>
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
      <StyledTagsGrid item container>
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
      </StyledTagsGrid>
    </Grid>
  )
}