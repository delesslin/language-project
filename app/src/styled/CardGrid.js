import React from 'react'

import styled from 'styled-components'
const CardGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 200px;
  grid-gap: 10px;
  place-items: stretch;
`

export default CardGrid
