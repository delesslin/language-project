import { Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import Image from '../../../styled/Image'
const ImgResult = ({ result, selections, add, remove }) => {
  const [selected, setSelected] = React.useState(false)
  useEffect(() => {
    if (selections.includes(result)) {
      setSelected(true)
    } else {
      setSelected(false)
    }
  }, [selections])
  const handleClick = () => {
    if (selected) {
      remove(result)
    } else {
      add(result)
    }
  }
  return (
    <Grid item key={result}>
      <Image
        size='150px'
        src={result}
        selected={selected}
        onClick={handleClick}
      />
    </Grid>
  )
}
export default ImgResult
