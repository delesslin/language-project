import React from 'react'
import { useRecoilState } from 'recoil'
import { Grid, Typography } from '@material-ui/core'
import Recorder from 'react-mp3-recorder'

import Blobber from './Blobber'
const BlobRecorder = ({ ATOM }) => {
  const [recordings, setRecordings] = useRecoilState(ATOM)
  // let isRecording = false
  // // let Icon = MicNoneIcon
  // // if (isRecording) {
  // //   Icon = MicIcon
  // // }
  const handleData = (blob) => {
    console.log('WE HAVE A BLOB!!!!')
    console.log(blob)
    setRecordings([...recordings, blob])
  }
  const deleteBlob = (i) => {
    const newArr = recordings.filter((el, index) => {
      return index !== i
    })
    setRecordings(newArr)
  }
  return (
    <Grid container direction='column' alignItems='stretch'>
      <Grid item>
        <Typography variant='h5'>Recordings</Typography>
      </Grid>
      <Grid item container justify='flex-start' alignItems='flex-start'>
        <Grid item>
          <Recorder onRecordingComplete={handleData} />
        </Grid>
        <Grid item container alignContent='flex-start' justify='flex-start'>
          {recordings.map((entry, i) => {
            return (
              <Blobber key={i} blob={entry} onDelete={() => deleteBlob(i)} />
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default BlobRecorder
