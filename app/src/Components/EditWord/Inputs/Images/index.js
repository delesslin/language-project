import { Button } from '@material-ui/core'
import React from 'react'
import { CardGrid } from 'styled/Card'
import { ImgInput } from 'styled/Inputs'
import Context from '../../context'
import { REMOVE_MULTI, REPLACE } from '../../reducer'
import ImageModal from './ImageModal'
import SelectedImage from './SelectedImage'

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
      type: REPLACE,
      property: 'images',
      value,
    })
  }
  return (
    <>
      <ImgInput>
        <div>
          <Button variant='contained' onClick={() => setOpenModal(true)}>
            Add images
          </Button>
        </div>
        <div>
          <CardGrid columns={3}>
            {images.map((img, i) => {
              return (
                <SelectedImage key={i} src={img} remove={() => remove(i)} />
              )
            })}
          </CardGrid>
        </div>
      </ImgInput>
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
