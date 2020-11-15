import { Switch } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import useEdit from '../useEdit'

const highlight = '#eefafc'
const StyledGrid = styled.div`
  grid-area: v;
  display: grid;
  place-items: center;
  background-color: ${highlight};
  transition: all 1s;
  opacity: ${({ show = true }) => (show ? `1` : `0`)};
`
const VisibleInput = ({ show }) => {
  const { public: isPublic, replace } = useEdit()
  const property = 'public'
  const handleSwitch = (e) => {
    const { checked: value } = e.target
    replace(property, value)
  }
  return (
    <StyledGrid show={show}>
      <h5>visibility</h5>
      <Switch checked={isPublic} onChange={handleSwitch} />
    </StyledGrid>
  )
}

export default VisibleInput
