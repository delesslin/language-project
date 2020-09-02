import { DialogContent, Grid, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import { styled } from '@material-ui/core/styles'
import React, { useState } from 'react'
import { KeyboardComponent } from './KeyboardComponent'
// AHHHHHHHH STILL RE-RENDERING ON EACH CLICK
export const CopyKeyboard = () => {
  const [value, setValue] = useState('')
  const handleClose = () => {
    console.log('closing')
  }
  const StyledDialog = styled(Dialog)({
    padding: '50px',
  })

  return (
    <StyledDialog
      onClose={handleClose}
      aria-labelledby='simple-dialog-title'
      open={true}
    >
      <DialogTitle id='simple-dialog-title'>Type in Catawba</DialogTitle>
      <DialogContent>
        <Grid container justify='center'>
          <Grid item>
            <TextField disabled variant='filled' value={value} />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogContent>
        <KeyboardComponent open={true} setText={setValue} text={value} />
      </DialogContent>
      <DialogContent>
        <Grid container justify='center' spacing={2}>
          <Grid item>
            <Button variant='contained' color='primary'>
              Copy
            </Button>
          </Grid>
          <Grid item>
            <Button variant='outlined' color='secondary'>
              Nevermind
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </StyledDialog>
  )
}
