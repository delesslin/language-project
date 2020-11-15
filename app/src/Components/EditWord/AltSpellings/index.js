import { Chip, Fab, Grid, TextField } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import React, { useState } from 'react'
import styled from 'styled-components'

import KeyboardModal from '../../Keyboard/KeyboardModal'
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
  transition: all 1s;
  opacity: ${({ show = true }) => (show ? `1` : `0`)};
`
const AltSpellings = ({ show }) => {
  const { alternative_spellings, addMulti, removeMulti } = useEdit()
  const [openModal, setOpenModal] = useState(false)
  const property = 'alternative_spellings'
  const add = (value) => {
    addMulti(property, value)
  }
  const remove = (index) => {
    removeMulti(property, index)
  }
  return (
    <>
      <AltInput show={show}>
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
