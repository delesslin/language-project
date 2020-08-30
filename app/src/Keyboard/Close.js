import { Grid, styled, IconButton } from '@material-ui/core'
import React from 'react'
import CloseIcon from '@material-ui/icons/Close'
export const Close = ({ onClose }) => {
  const CloseGridItem = styled(Grid)({
    padding: '5px',
  })
  return (
    <Grid item container justify='flex-end'>
      <CloseGridItem item>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </CloseGridItem>
    </Grid>
  )
}
