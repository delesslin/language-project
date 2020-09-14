import React from 'react'
import { CopyKeyboard, AddKeyboard } from '../../Components/Keyboard'
import { Typography, Grid, styled, Paper, Box } from '@material-ui/core'

const Type = () => {
  const StyledGridContainer = styled(Grid)({
    padding: '40px',
    margin: '0px',
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
          {/* <AddKeyboard /> */}
        </Grid>
      </StyledGridContainer>
    </>
  )
}

export default Type
