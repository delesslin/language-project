import {
  Button,
  Grid,
  Modal,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { KeyboardComponent } from '../KeyboardComponent'

const ModalPaperContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`

const StyledKeyboardPaper = styled(Paper)`
  min-width: 40vw;
  padding: 50px;
`
const KeyboardModal = ({
  submitText,
  openModal,
  open,
  title = 'Type in Catawba',
  currentText = '',
  saveText = 'submit',
  cancelText = 'nevermind',
}) => {
  const [text, setText] = React.useState('')
  const handleClose = () => {
    openModal(false)
  }
  const handleSubmit = () => {
    submitText(text)
    openModal(false)
  }
  useEffect(() => {
    setText(currentText)
  }, [open])

  return (
    <Modal
      open={open}
      aria-labelledby='Catawba Keyboard'
      aria-describedby='Interactive keyboard with Catawba characters'
    >
      <ModalPaperContainer>
        <StyledKeyboardPaper>
          <Grid container direction='column' justify='space-around' spacing={2}>
            <Grid item container justify='center'>
              <Grid item>
                <Typography variant='h5'>{title}</Typography>
              </Grid>
            </Grid>
            <Grid item container justify='center'>
              <Grid item>
                <TextField value={text} disabled variant='outlined' />
              </Grid>
            </Grid>
            <Grid item>
              <KeyboardComponent text={text} setText={setText} />
            </Grid>
            <Grid container justify='center' spacing={2}>
              <Grid item>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={() => {
                    handleSubmit(text)
                    handleClose(false)
                  }}
                >
                  {saveText}
                </Button>
              </Grid>
              <Grid item>
                <Button variant='contained' onClick={() => handleClose(false)}>
                  {cancelText}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </StyledKeyboardPaper>
      </ModalPaperContainer>
    </Modal>
  )
}

export default KeyboardModal
