import { Button } from '@material-ui/core'
import React from 'react'

import Context from '../../context'
import { REMOVE_MULTI, REPLACE } from '../../reducer'
import ImageModal from './ImageModal'
import SelectedImage from './SelectedImage'
import media from 'css-in-js-media'
import styled from 'styled-components'
import useEdit from 'Components/EditWord/useEdit'
const secondlight = '#FFFED6'
const ImgInput = styled.div`
  grid-area: i;
  display: flex;
  flex-direction: column;
  background-color: ${secondlight};
`
const columns = (x, max = 10) => {
  let cols = x < max ? x : max
  return `grid-template-columns: repeat(${cols}, 1fr);`
}
export const CardGrid = styled.div`
  display: grid;

  grid-auto-rows: minmax(150px, auto);
  grid-gap: 20px;
  place-items: stretch;

  ${columns(1)}
  ${media('>tablet')} {
    ${(props) => columns(props.columns, 4)}

    ${media('>desktop')} {
      ${(props) => columns(props.columns, 5)}
      ${media('>largeDesktop')} {
        ${(props) => columns(props.columns)}
      }
    }
  }
`

const Images = () => {
  const { images, dispatch } = useEdit()
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
            {images &&
              images.map((img, i) => {
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
