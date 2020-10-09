import React from 'react'
import { Button, Grid, Typography, Fab } from '@material-ui/core'
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
