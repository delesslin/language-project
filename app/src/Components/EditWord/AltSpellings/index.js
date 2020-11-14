import { Chip, Fab, Grid, TextField } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import Context from '../context'
import { ADD_MULTI, REMOVE_MULTI } from '../reducer'
import EditIcon from '@material-ui/icons/Edit'
import KeyboardModal from '../../Keyboard/KeyboardModal'
import styled from 'styled-components'
import useEdit from '../useEdit'
const MultiInput = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto minmax(50px, auto);
  grid-auto-flow: column;
  grid-row-gap: 10px;
`
const trilight = '#FFEBF1'
const AltInput = styled.div`
  grid-area: a;
  background-color: ${trilight};
`
const AltSpellings = () => {
  const { alternative_spellings, addMulti, dispatch } = useEdit()
  const [openModal, setOpenModal] = useState(false)
  const property = 'alternative_spellings'
  const add = (value) => {
    addMulti(property, value)
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
      <AltInput>
        <MultiInput>
          <div>
            <Grid
              item
              container
              spacing={2}
              justify='center'
              alignItems='center'
            >
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
          </div>
          <div>
            <Grid container item spacing={1}>
              {alternative_spellings &&
                alternative_spellings.map((entry, i) => {
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
          </div>
        </MultiInput>
      </AltInput>
      <KeyboardModal
        open={openModal}
        openModal={setOpenModal}
        submitText={add}
      />
    </>
  )
}

export default AltSpellings
