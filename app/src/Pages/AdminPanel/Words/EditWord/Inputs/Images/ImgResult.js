import { Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import Image from 'styled/Image'
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
