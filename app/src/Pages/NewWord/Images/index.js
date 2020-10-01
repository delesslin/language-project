import { Button, Grid } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import ImageModal from './ImageModal'

const StyledInputGrid = styled(Grid)`
  padding: 20px 30px;
`

const Images = () => {
  const [openModal, setOpenModal] = React.useState(false)
  return (
    <>
      <StyledInputGrid container spacing={2}>
        <Grid item container direction='justify'>
          <Grid item>
            <Button variant='contained' onClick={() => setOpenModal(true)}>
              Add images
            </Button>
          </Grid>
        </Grid>
      </StyledInputGrid>
      <ImageModal open={openModal} />
    </>
  )
}

export default Images
