import { Switch } from '@material-ui/core'
import React, { useContext } from 'react'

import Context from '../context'
import { REPLACE } from '../reducer'
import styled from 'styled-components'
const highlight = '#eefafc'
const StyledGrid = styled.div`
  grid-area: v;
  display: grid;
  place-items: center;
  background-color: ${highlight};
`
const VisibleInput = () => {
  const [{ public: isPublic }, dispatch] = useContext(Context)
  const property = 'public'
  const handleSwitch = (e) => {
    const { checked: value } = e.target
    dispatch({
      type: REPLACE,
      property,
      value,
    })
  }
  return (
    <StyledGrid>
      <h5>visibility</h5>
      <Switch checked={isPublic} onChange={handleSwitch} />
    </StyledGrid>
  )
}

export default VisibleInput
