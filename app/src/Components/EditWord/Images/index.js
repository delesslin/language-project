import { Button, Grid } from '@material-ui/core'
import React from 'react'

import styled from 'styled-components'
import Context from '../context'
import { ADD_MULTI, REMOVE_MULTI } from '../reducer'
import ImageModal from './ImageModal'
import SelectedImage from './SelectedImage'

const StyledInputGrid = styled(Grid)`
  padding: 20px 30px;
  min-height: 200px;
`

const Images = () => {
  const [{ images }, dispatch] = React.useContext(Context)
  const [openModal, setOpenModal] = React.useState(false)
  const property = 'images'
  const remove = (index) => {
    dispatch({
      type: REMOVE_MULTI,
      property,
      index,
    })
  }
  const setImages = (value) => {
    dispatch({
      type: ADD_MULTI,
      property: 'images',
      value,
    })
  }
  return (
    <>
      <StyledInputGrid container spacing={2}>
        <Grid item container direction='column' justify='center'>
          <Grid item>
            <Button variant='contained' onClick={() => setOpenModal(true)}>
              Add images
            </Button>
          </Grid>
        </Grid>
        <Grid container item spacing={2}>
          {images.map((img, i) => {
            return <SelectedImage key={i} src={img} remove={() => remove(i)} />
          })}
        </Grid>
      </StyledInputGrid>
      <ImageModal
        open={openModal}
        save={setImages}
        close={() => setOpenModal(false)}
        currentImages={images}
      />
    </>
  )
}

export default Images
