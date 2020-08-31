import React from 'react'
import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { useRecoilState } from 'recoil'

export const SubmissionAlert = ({ ATOM }) => {
  const [{ isOpen, severity, msg }, setAlert] = useRecoilState(ATOM)
  const handleClose = () => {
    console.log('CLOSE ALERT!')
    setAlert({
      isOpen: false,
      severity: '',
      msg: '',
    })
  }

  return (
    <Snackbar open={isOpen} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity}>
        {msg}
      </Alert>
    </Snackbar>
  )
}
