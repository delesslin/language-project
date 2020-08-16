import React, { useState } from 'react'
import { Grid, TextField, Fab } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { PRON_ATOM } from './Main'
// import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
export const Pronunciation = () => {
  const [pronunciation, setPronunciation] = useRecoilState(PRON_ATOM)
  const [inputValue, setInputValue] = useState('')
  const handleAdd = () => {
    setPronunciation([...pronunciation, inputValue])
    setInputValue('')
  }
  return (
    <Grid item>
      <TextField
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
        required
        variant='outlined'
        label='pronunciation'
      ></TextField>
      <Fab color='primary' aria-label='add' onClick={handleAdd}>
        <AddIcon />
      </Fab>
    </Grid>
  )
}
