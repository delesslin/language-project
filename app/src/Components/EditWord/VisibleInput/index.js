import { Switch } from '@material-ui/core'
import React, { useContext } from 'react'
import { VisibleInput as StyledGrid } from 'styled/Inputs'
import Context from '../context'
import { REPLACE } from '../reducer'
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
