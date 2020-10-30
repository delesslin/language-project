import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Player } from '../../'
import { Button, Paper } from '../../Surfaces'
import { MicIcon } from '../../Surfaces/Icon'
import Context from '../context'
import { REPLACE } from '../reducer'
import { useRecorder } from './useRecorder'
const RecordingsGrid = styled.div`
  display: flex;
  flex-direction: rows;
  flex-wrap: wrap;
`
const AudioPaper = styled(Paper)`
  background-color: ${({ theme }) => theme.light};
  margin: 5px;
  padding: 10px;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  grid-auto-flow: columns;
  grid-gap: 10px;
`
const MicButton = styled(Button)`
  background-color: ${({ theme, status }) =>
    status === 'recording' ? theme.red : theme.secondary};
`
const Recordings = () => {
  const [{ recordings }, dispatch] = useContext(Context)
  const { startRecord, stopRecord, blobs, status, removeBlob } = useRecorder(
    recordings
  )
  const property = 'recordings'
  const update = (blobs) => {
    dispatch({
      type: REPLACE,
      property,
      value: blobs,
    })
  }
  useEffect(() => {
    update(blobs)
    /*eslint-disable */
  }, [blobs])
  return (
    <RecordingsGrid>
      {recordings.map((base64, i) => {
        return (
          <AudioPaper key={i} color='light'>
            <Player base64={base64} />
            <Button onClick={() => removeBlob(i)}>Delete</Button>
          </AudioPaper>
        )
      })}
      <AudioPaper color='light'>
        <MicButton
          round={true}
          onMouseDown={startRecord}
          onMouseUp={stopRecord}
          status={status}
        >
          <MicIcon />
        </MicButton>
      </AudioPaper>
    </RecordingsGrid>
  )
}

export default Recordings
