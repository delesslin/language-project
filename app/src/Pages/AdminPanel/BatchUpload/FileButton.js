import { Button } from '@material-ui/core'
import React from 'react'
const FileButton = ({ handleChange }) => (
  <label htmlFor='upload-photo'>
    <input
      style={{ display: 'none' }}
      id='upload-photo'
      name='upload-photo'
      type='file'
      onChange={handleChange}
    />
    <Button variant='contained' component='span'>
      Upload button
    </Button>{' '}
  </label>
)

export default FileButton
