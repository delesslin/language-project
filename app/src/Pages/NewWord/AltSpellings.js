import React, { useState } from 'react'
import { Grid, TextField } from '@material-ui/core'
import MultiInputContainer from '../../Components/MultiInputContainer'
import useMultiInput from '../../utils/hooks/useMultiInput'
import KeyboardModal from '../../Components/Keyboard/KeyboardModal'
export const AltSpellings = ({ ATOM }) => {
  const { state, add, remove } = useMultiInput(ATOM)
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <MultiInputContainer
        label='Alternative Spellings'
        buttonClick={() => {
          setOpenModal(true)
        }}
        state={state}
        handleDelete={remove}
        disabledInput={true}
      />
      <KeyboardModal
        open={openModal}
        title='Add Alternative Spelling'
        submitText={add}
        openModal={setOpenModal}
      />
    </>
  )
}
