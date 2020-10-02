import { Button, Container, Fab, Grid, Paper } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import MicIcon from '@material-ui/icons/Mic'
import MicRecorder from 'mic-recorder-to-mp3'
import Player from './Player'
import styled from 'styled-components'
const recorder = new MicRecorder({ bitRate: 128 })
const reader = new FileReader()
const RecorderGrid = styled(Grid)`
  width: 100%;
`
const Recorder = ({ ATOM }) => {
  const [recordings, setRecordings] = useRecoilState(ATOM)
  const [isRecording, setIsRecording] = useState(false)
  const [isBlocked, setIsBlocked] = useState(false)

  const handleDown = () => {
    console.log('mouse down!')
    setIsRecording(true)
    recorder
      .start()
      .then(() => {})
      .catch((e) => {
        console.error(e)
        setIsBlocked(true)
      })
  }
  const handleUp = () => {
    recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        reader.readAsDataURL(blob)
        reader.addEventListener(
          'load',
          function () {
            add(reader.result)
          },
          false
        )
      })
  }
  const add = (base64) => {
    setRecordings([...recordings, base64])
  }
  const remove = (blobIndex) => {
    setRecordings(recordings.filter((entry, i) => i !== blobIndex))
  }
  return (
    <RecorderGrid container spacing={1} justify='flex-start' direction='row'>
      <Grid item>
        <Fab onMouseDown={handleDown} onMouseUp={handleUp}>
          <MicIcon />
        </Fab>
      </Grid>
      <Grid item container spacing={2}>
        {recordings.map((base64, i) => {
          return (
            <Paper key={i}>
              <Grid container direction='column' spacing={2} justify='center'>
                <Grid item container justify='center'>
                  <Grid item>
                    <Player base64={base64} />
                  </Grid>
                </Grid>
                <Grid item>
                  <Button variant='outlined' onClick={() => remove(i)}>
                    delete
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          )
        })}
      </Grid>
    </RecorderGrid>
  )
}

export default Recorder
