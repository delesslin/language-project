import { TextField } from '@material-ui/core'
import React from 'react'

const SearchField = React.forwardRef(({ loading, onChange }, ref) => {
  return <TextField inputRef={ref} disabled={loading} onChange={onChange} />
})

export default SearchField
