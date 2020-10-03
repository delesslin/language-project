import { Button, Grid, Paper } from '@material-ui/core'
import React from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import Player from '../../../Components/Player'
import Recorder from '../../../Components/Recorder'

const RecorderGrid = styled(Grid)`
  width: 100%;
`
const Recordings = ({ ATOM }) => {
  const [recordings, setRecordings] = useRecoilState(ATOM)

  const add = (base64) => {
    setRecordings([...recordings, base64])
  }
  const remove = (blobIndex) => {
    setRecordings(recordings.filter((entry, i) => i !== blobIndex))
  }
  return (
    <RecorderGrid container spacing={1} justify='flex-start' direction='row'>
      <Grid item>
        <Recorder add={add} />
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

export default Recordings
