// data:audio/mp3;base64,
// data:audio/mp3;base64,//uQxAADwAABpA
// data:audio/mp3;base64,T2dn

import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Player } from '../../'
import { Button, Paper } from '../../Surfaces'
import { MicIcon, NoMicIcon } from '../../Surfaces/Icon'
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
  const property = 'recordings'
  const update = (blobs) => {
    dispatch({
      type: REPLACE,
      property,
      value: blobs,
    })
  }
  const {
    startRecord,
    stopRecord,
    isDenied,
    status,
    removeRecording,
    setBlobs,
  } = useRecorder(recordings, update)
  useEffect(() => {
    setBlobs(recordings)
    /*eslint-disable */
  }, [recordings])
  return (
    <RecordingsGrid>
      {recordings.map((base64, i) => {
        return (
          <AudioPaper key={i} color='light'>
            <Player base64={base64} />
            <Button onClick={() => removeRecording(i)}>Delete</Button>
          </AudioPaper>
        )
      })}
      <AudioPaper color='light'>
        {isDenied ? (
          <MicButton round={true}>
            <NoMicIcon />
          </MicButton>
        ) : (
          <MicButton
            round={true}
            onMouseDown={startRecord}
            onMouseUp={stopRecord}
            status={status}
          >
            <MicIcon />
          </MicButton>
        )}
      </AudioPaper>
    </RecordingsGrid>
  )
}

export default Recordings
