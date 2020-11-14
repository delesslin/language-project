// data:audio/mp3;base64,
// data:audio/mp3;base64,//uQxAADwAABpA
// data:audio/mp3;base64,T2dn

import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Player } from 'Components'
import { Button, Paper, MicIcon, NoMicIcon } from '../../'

import Context from '../context'
import { REPLACE } from '../reducer'
import { useRecorder } from './useRecorder'
const RecordingsGrid = styled.div`
  display: flex;
  flex-direction: rows;
  flex-wrap: wrap;
`
const AudioPaper = styled(Paper)`
  margin: 5px;
  padding: 10px;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  grid-auto-flow: columns;
  grid-gap: 10px;
`
const MicButton = styled(Button)`
  background-color: ${({ theme, status, disabled = false, isRecording }) => {
    // status === 'recording' ? theme.red : theme.secondary};
    if (disabled) {
      return '#ccc'
    } else {
      if (isRecording) {
        return theme.red
      } else {
        return theme.yellow
      }
    }
  }};
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

    isInit,
    init,
    removeRecording,
    setBlobs,
    isRecording,
  } = useRecorder(recordings, update)
  useEffect(() => {
    setBlobs(recordings)
    /*eslint-disable */
  }, [recordings])
  return (
    <RecordingsGrid>
      {recordings.map((base64, i) => {
        return (
          <AudioPaper key={i} color='transparent'>
            <Player base64={base64} />
            <Button onClick={() => removeRecording(i)}>Delete</Button>
          </AudioPaper>
        )
      })}
      <AudioPaper color='transparent'>
        {!isInit ? (
          <MicButton round={true} onClick={init} disabled={true}>
            <NoMicIcon />
          </MicButton>
        ) : (
          <MicButton
            round={true}
            onMouseDown={startRecord}
            onMouseUp={stopRecord}
            isRecording={isRecording}
          >
            <MicIcon />
          </MicButton>
        )}
      </AudioPaper>
    </RecordingsGrid>
  )
}

export default Recordings
