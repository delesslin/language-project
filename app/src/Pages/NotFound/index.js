import { IssueIcon } from 'Components'
import { Notification } from 'Components/Surfaces/Notification'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'

import Browse from '../Browse'

const NoteContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`
const StyledIcon = styled(IssueIcon)`
  margin-right: 15px;
  &:hover {
    cursor: pointer;
  }
`
const NotFound = () => {
  const [open, setOpen] = useState(true)
  const history = useHistory()
  const handleIssue = () => {
    history.push('/issue')
    setOpen(false)
  }
  return (
    <>
      <Browse />
      <Notification open={open} handleClose={() => setOpen(false)}>
        <NoteContent>
          <StyledIcon onClick={handleIssue} /> Couldn't find the page you were
          looking for!
        </NoteContent>
      </Notification>
    </>
  )
}

export default NotFound
