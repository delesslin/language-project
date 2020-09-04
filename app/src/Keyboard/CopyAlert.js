import Alert from '@material-ui/lab/Alert'
import React from 'react'
export const CopyAlert = ({ str, open = false }) => {
  if (open) {
    if (str.length > 0) {
      return (
        <Alert severity='success'>
          <b>{str}</b> copied to your clipboard!
        </Alert>
      )
    }
    return <Alert severity='error'>There's nothing to copy!</Alert>
  }
  return null
}
