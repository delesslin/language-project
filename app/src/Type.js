import React from 'react'
import { CopyKeyboard } from './Keyboard'
import { Typography, Grid, styled, Paper, Box } from '@material-ui/core'

const Type = () => {
  const StyledGridContainer = styled(Grid)({
    padding: '40px',
    margin: '0px',
  })
  const ModalContainer = styled(Box)({
    position: 'fixed',
    paddingTop: '50px',
    left: -50,
    top: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgb(0, 0, 0)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    overflow: 'hidden',
    margin: '0px',
  })
  const ModalContent = styled(Paper)({
    position: 'relative',
    padding: '20px',
    margin: 'auto',
    width: '75%',
  })
  return (
    <>
      <StyledGridContainer container direction='column' alignItems='center'>
        <Grid item>
          <Typography variant='h4'>
            Type In Catawba{' '}
            <span role='img' aria-label='keyboard emoji'>
              ⌨
            </span>
          </Typography>
        </Grid>
        <Grid>
          <CopyKeyboard />
        </Grid>
      </StyledGridContainer>
      {/* <ModalContainer>
        <ModalContent>
          <Typography variant='h5'>IS THIS A MODAL?</Typography>
        </ModalContent>
      </ModalContainer> */}
    </>
  )
}

export default Type
