import { Typography } from '@material-ui/core'
import React from 'react'
import Span from '../../../styled/Span'
const RedSpan = ({ children }) => <Span color='#F49390'>{children}</Span>
const WarningMsg = () => {
  return (
    <Typography>
      Entries in <RedSpan>red</RedSpan> already exist in the database and may
      cause an <RedSpan>error</RedSpan> if you try to upload them. Please{' '}
      <RedSpan>delete</RedSpan> them before submitting.
    </Typography>
  )
}

export default WarningMsg
