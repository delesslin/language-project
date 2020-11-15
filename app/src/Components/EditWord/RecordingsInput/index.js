// data:audio/mp3;base64,
// data:audio/mp3;base64,//uQxAADwAABpA
// data:audio/mp3;base64,T2dn

import { Player } from 'Components'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Button, MicIcon, NoMicIcon, Paper } from '../../'
import { REPLACE } from '../useEdit/reducer'
import useEdit from '../useEdit'
import { useRecorder } from './useRecorder'

export const RecInput = styled.div`
  grid-area: r;
  background-color: ${({ theme }) => theme.light};
  transition: all 1s;
  opacity: ${({ show = true }) => (show ? `1` : `0`)};
`
const RecordingsGrid = styled(RecInput)`
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
const Recordings = ({ show }) => {
  const { recordings, dispatch, replace } = useEdit()
  const property = 'recordings'
  const update = (blobs) => {
    replace(property, blobs)
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
    <RecordingsGrid show={show}>
      {recordings &&
        recordings.map((base64, i) => {
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
