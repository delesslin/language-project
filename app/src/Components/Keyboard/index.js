import { Box, Grid, Paper, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import useClippy from 'use-clippy'
import { CopyAlert } from './CopyAlert'
import { KeyboardComponent } from './KeyboardComponent'

export const CopyKeyboard = () => {
  const [showAlert, setShowAlert] = useState(false)
  const [clipboard, setClipboard] = useClippy()
  const [value, setValue] = useState('')

  const handleCopy = () => {
    setClipboard(value)
    setShowAlert(true)
  }

  const handleClear = () => {
    setValue('')
    if (showAlert) {
      setShowAlert(false)
    }
  }
  useEffect(() => {
    if (showAlert) {
      setShowAlert(false)
    }
  }, [value, showAlert])

  return (
    <>
      <Grid container direction='column' alignItems='center' spacing={2}>
        <Grid item container justify='center'>
          <Grid item>
            <TextField disabled variant='filled' value={value} />
          </Grid>
        </Grid>
        <Grid item container justify='center'>
          <Grid item>
            <KeyboardComponent text={value} setText={setValue} />
          </Grid>
        </Grid>
        <Grid item container justify='center' spacing={2}>
          <Grid item>
            <Button variant='contained' color='primary' onClick={handleCopy}>
              Copy
            </Button>
          </Grid>
          <Grid item>
            <Button variant='outlined' color='secondary' onClick={handleClear}>
              Clear
            </Button>
          </Grid>
        </Grid>
        <Grid container item justify='center'>
          <Grid item>
            <CopyAlert open={showAlert} str={clipboard} />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
const ModalContainer = styled(Box)`
  position: fixed;
  padding-top: 20vh;
  left: -50;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  margin: 0px;
`

const ModalContent = styled(Paper)`
  position: relative;
  padding: 20px;
  margin: auto;
  width: 75vw;
`
export const AddKeyboard = ({ setText = console.log }) => {
  const [value, setValue] = useState('')

  // const ModalContainer = styled(Box)({
  //   position: 'fixed',
  //   paddingTop: '20vh',
  //   left: -50,
  //   top: 0,
  //   width: '100vw',
  //   height: '100vh',

  //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
  //   overflow: 'hidden',
  //   margin: '0px',
  // })
  // const ModalContent = styled(Paper)({
  //   position: 'relative',
  //   padding: '20px',
  //   margin: 'auto',
  //   width: '75%',
  // })

  const handleAdd = () => {
    setText(value)
  }
  return (
    <ModalContainer>
      <ModalContent>
        <Grid container direction='column' spacing={2}>
          <Grid item container justify='center'>
            <Grid item>
              <TextField disabled variant='filled' value={value} />
            </Grid>
          </Grid>
          {/* <Typography variant='h5'>IS THIS A MODAL?</Typography> */}
          <Grid item>
            <KeyboardComponent text={value} setText={setValue} />
          </Grid>
          <Grid item container justify='center' spacing={5}>
            <Grid item>
              <Button onClick={handleAdd}>ADD</Button>
            </Grid>
          </Grid>
        </Grid>
      </ModalContent>
    </ModalContainer>
  )
}
