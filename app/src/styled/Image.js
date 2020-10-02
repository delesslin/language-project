import React from 'react'
import styled from 'styled-components'

// TODO: refactor using img tag as background images are likely not accessible
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
export default Image
