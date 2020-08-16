import React from 'react'
import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

export const SubmissionAlert = ({ state }) => {
  const handleClose = () => {
    console.log('CLOSE ALERT!')
  }

  return (
    <Snackbar open={state.open} onClose={handleClose}>
      <Alert onClose={handleClose} severity='warning'>
        Submitting new word
      </Alert>
    </Snackbar>
  )
}
