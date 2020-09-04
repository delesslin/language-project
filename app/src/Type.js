import React from 'react'
import { CopyKeyboard } from './Keyboard'
import { Typography, Grid, styled } from '@material-ui/core'

const Type = () => {
  const StyledGridContainer = styled(Grid)({
    padding: '40px',
  })
  return (
    <StyledGridContainer
      container
      direction='column'
      alignItems='center'
      spacing={10}
    >
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
  )
}

export default Type
