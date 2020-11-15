import { Button } from '@material-ui/core'
import useEdit from 'Components/EditWord/useEdit'
import media from 'css-in-js-media'
import React from 'react'
import styled from 'styled-components'
import { REMOVE_MULTI, REPLACE } from '../useEdit/reducer'
import ImageModal from './ImageModal'
import SelectedImage from './SelectedImage'

const secondlight = '#FFFED6'
const ImgInput = styled.div`
  grid-area: i;
  display: flex;
  flex-direction: column;
  background-color: ${secondlight};
  transition: all 1s;
  opacity: ${({ show = true }) => (show ? `1` : `0`)};
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

const Images = ({ show }) => {
  const { images, dispatch, removeMulti, replace } = useEdit()
  const [openModal, setOpenModal] = React.useState(false)
  const property = 'images'
  const remove = (index) => {
    remove(property, index)
  }
  const setImages = (value) => {
    replace(property, value)
  }
  return (
    <>
      <ImgInput show={show}>
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
