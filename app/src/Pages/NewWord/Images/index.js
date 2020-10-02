import { Button, Grid } from '@material-ui/core'
import React from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import ImageModal from './ImageModal'
import SelectedImage from './SelectedImage'

const StyledInputGrid = styled(Grid)`
  padding: 20px 30px;
  min-height: 200px;
`

const Images = ({ ATOM }) => {
  const [images, setImages] = useRecoilState(ATOM)
  const [openModal, setOpenModal] = React.useState(false)
  const remove = (src) => {
    setImages(images.filter((entry) => entry !== src))
  }
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
        <Grid container item spacing={2}>
          {images.map((img) => {
            return <SelectedImage src={img} remove={remove} />
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
