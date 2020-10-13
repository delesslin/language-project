import { Button, Grid } from '@material-ui/core'
import React from 'react'
import Image from '../../../../styled/Image'
import styled from 'styled-components'
const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  .button-div {
    opacity: 0;
    transition: opacity 0.2s ease;
  }
  &:hover {
    cursor: pointer;
    .button-div {
      opacity: 1;
    }
  }
`
const ChildDiv = styled.div`
  grid-area: 1 / 1;
`
const ButtonDiv = styled(ChildDiv)`
  display: grid;
  place-items: center;
`

const ImgDiv = styled(ChildDiv)``

const SelectedImage = ({ src, remove }) => {
  const handleClick = () => {
    remove()
  }
  return (
    <Grid item>
      <StyledDiv onClick={handleClick}>
        <ButtonDiv className='button-div'>
          <Button variant='contained'>delete</Button>
        </ButtonDiv>
        <ImgDiv>
          <Image src={src} />
        </ImgDiv>
      </StyledDiv>
    </Grid>
  )
}

export default SelectedImage
