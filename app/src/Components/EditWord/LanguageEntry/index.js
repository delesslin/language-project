import { Fab, Grid, TextField } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import React, { useContext } from 'react'
import { WordInput } from '../../../styled/Inputs'
import { KeyboardComponent } from '../../Keyboard/KeyboardComponent'
import KeyboardModal from '../../Keyboard/KeyboardModal'
import { Button } from '../../Surfaces'
import Modal from '../../Surfaces/Modal'
import Context from '../context'
import { REPLACE } from '../reducer'

const LanguageEntry = () => {
  const [{ language_entry }, dispatch] = useContext(Context)
  const [openModal, setOpenModal] = React.useState(false)
  const [tempString, setTempString] = React.useState(language_entry)
  const property = 'language_entry'
  const handleFocus = () => {
    console.log('OOOOH FOCUS')
  }
  const setTerm = (value) => {
    dispatch({
      type: REPLACE,
      property,
      value,
    })
  }
  const handleSave = () => {
    setTerm(tempString)
    setOpenModal(false)
  }
  return (
    <>
      <WordInput>
        <Grid item container alignItems='center' justify='center' spacing={1}>
          <Grid item>
            <TextField
              label='Language Entry'
              variant='filled'
              disabled
              required
              value={language_entry}
              onFocus={handleFocus}
            />
          </Grid>
          <Grid item>
            <Fab onClick={() => setOpenModal(true)}>
              <EditIcon />
            </Fab>
          </Grid>
        </Grid>
      </WordInput>
      <Modal open={openModal}>
        <input type='text' value={tempString} />
        <Button onClick={handleSave}>SAVE</Button>
        <KeyboardComponent setText={setTempString} />
      </Modal>
    </>
  )
}
export default LanguageEntry
