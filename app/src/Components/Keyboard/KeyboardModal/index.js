// TODO: refactor using no Material-UI
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { KeyboardComponent } from '../KeyboardComponent'
import { Paper, Modal } from '@material-ui/core'

import styled from 'styled-components'

export const ModalPaperContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`

export const StyledModalPaper = styled(Paper)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 50px;
`
export const ModalStandard = ({
  children,
  open,
  width = 'auto',
  height = 'auto',
}) => (
  <Modal
    open={open}
    aria-labelledby='Catawba Keyboard'
    aria-describedby='Interactive keyboard with Catawba characters'
  >
    <ModalPaperContainer>
      <StyledModalPaper width={width} height={height}>
        {children}
      </StyledModalPaper>
    </ModalPaperContainer>
  </Modal>
)
const KeyboardModal = ({
  submitText = () => {},
  openModal = () => {},
  open = false,
  title = 'Type in Catawba',
  currentText = '',
  saveText = 'save',
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
  }, [open, currentText])

  return (
    <ModalStandard open={open}>
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
    </ModalStandard>
  )
}

export default KeyboardModal
