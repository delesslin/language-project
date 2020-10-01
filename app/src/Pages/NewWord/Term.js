import React from 'react'
import {
  Grid,
  TextField,
  Fab,
  Modal,
  Paper,
  Container,
  Typography,
} from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { TERM_ATOM } from './atoms'
import EditIcon from '@material-ui/icons/Edit'

import KeyboardModal from '../../Components/Keyboard/KeyboardModal'

export const Term = () => {
  const [term, setTerm] = useRecoilState(TERM_ATOM)
  const [openModal, setOpenModal] = React.useState(false)
  const handleFocus = () => {
    console.log('OOOOH FOCUS')
  }
  return (
    <>
      <Grid item container alignItems='center' spacing={3}>
        <Grid item>
          <TextField
            label='Language Entry'
            variant='filled'
            disabled
            required
            value={term}
            onFocus={handleFocus}
          />
        </Grid>
        <Grid item>
          <Fab onClick={() => setOpenModal(true)}>
            <EditIcon />
          </Fab>
        </Grid>
      </Grid>
      <KeyboardModal
        open={openModal}
        openModal={setOpenModal}
        submitText={setTerm}
        title='Language Entry'
        currentText={term}
      />
    </>
  )
}
