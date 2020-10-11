import React from 'react'
import styled from 'styled-components'
export const ContentImage = styled.div`
  background-image: url(${(props) => props.href});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  place-items: center;
  width: 250px;
  height: 250px;
  > * {
    opacity: 0.5;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px #555;
    > * {
      opacity: 1;
    }
  }
`
