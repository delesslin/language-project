import { Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import styled from 'styled-components'

const InnerImage = styled.div`
  width: ${({ size = '150px' }) => size};
  height: ${({ size = '150px' }) => size};
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.src});
  transition: box-shadow 0.25s ease;
  ${({ selected = false }) =>
    selected ? 'box-shadow: inset 0px 0px 0px 5px #00FF00' : ''}
`
const OuterImage = styled.div`
  ${({ clickable = false }) => {
    if (clickable) {
      return `  transition: box-shadow 0.2s ease;
    &:hover {
      cursor: pointer;
      box-shadow: 2px 2px 5px 2px #222;
    }`
    } else {
      return ''
    }
  }}
`

const Image = (props) => (
  <OuterImage>
    <InnerImage {...props} />
  </OuterImage>
)
const StyledImage = styled(Image)`
  margin: 5px;
`
const ImgResult = ({ result, selections, add, remove }) => {
  const [selected, setSelected] = React.useState(false)
  useEffect(() => {
    if (selections.includes(result)) {
      setSelected(true)
    } else {
      setSelected(false)
    }
  }, [selections, result])
  const handleClick = () => {
    if (selected) {
      remove(result)
    } else {
      add(result)
    }
  }
  return (
    <Grid item key={result}>
      <StyledImage
        size='150px'
        src={result}
        selected={selected}
        onClick={handleClick}
      />
    </Grid>
  )
}
export default ImgResult
