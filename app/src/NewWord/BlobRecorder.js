import React, { useState } from 'react'
import { useSetRecoilState, useRecoilState } from 'recoil'
import { Grid, Typography, Fab } from '@material-ui/core'
import Recorder from 'react-mp3-recorder'
import MicNoneIcon from '@material-ui/icons/MicNone'
import MicIcon from '@material-ui/icons/Mic'
import Blobber from './Blobber'
const BlobRecorder = ({ ATOM }) => {
  const [recordings, setRecordings] = useRecoilState(ATOM)
  const [isRecording, setIsRecording] = useState(false)
  let Icon = MicNoneIcon
  if (isRecording) {
    Icon = MicIcon
  }
  const handleData = (blob) => {
    console.log('WE HAVE A BLOB!!!!')
    console.log(blob)
    setRecordings([...recordings, blob])
  }
  return (
    <Grid container direction='column'>
      <Grid item>
        <Typography>Recordings</Typography>
      </Grid>
      <Grid item container justify='center'>
        <Recorder onRecordingComplete={handleData} />
      </Grid>
      <Grid item container justify='space-between'>
        {recordings.map((entry, i) => {
          return <Blobber key={i} blob={entry} />
        })}
      </Grid>
    </Grid>
  )
}

export default BlobRecorder
