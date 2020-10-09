import { Chip, Fab, Grid, TextField } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import Context from '../context'
import { ADD_MULTI, REMOVE_MULTI } from '../reducer'
import EditIcon from '@material-ui/icons/Edit'
import KeyboardModal from '../../Keyboard/KeyboardModal'

const AltSpellings = () => {
  const [{ alternative_spellings }, dispatch] = useContext(Context)
  const [openModal, setOpenModal] = useState(false)
  const property = 'alternative_spellings'
  const add = (value) => {
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
    <>
      <Grid container direction='column' spacing={3}>
        <Grid item container spacing={2}>
          <Grid item>
            <TextField
              disabled
              variant='filled'
              label='Alternative Spellings'
            />
          </Grid>
          <Grid item>
            <Fab onClick={() => setOpenModal(true)}>
              <EditIcon />
            </Fab>
          </Grid>
        </Grid>
        <Grid container item spacing={1}>
          {alternative_spellings.map((entry, i) => {
            return (
              <Grid item key={i}>
                <Chip
                  label={entry}
                  onDelete={() => remove(i)}
                  color='primary'
                />
              </Grid>
            )
          })}
        </Grid>
      </Grid>
      <KeyboardModal
        open={openModal}
        openModal={setOpenModal}
        submitText={add}
      />
    </>
  )
  return null
}

export default AltSpellings