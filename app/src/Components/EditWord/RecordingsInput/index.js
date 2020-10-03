import { Button, Grid, Paper } from '@material-ui/core'
import React, { useContext } from 'react'
import styled from 'styled-components'
import Player from '../../../Components/Player'
import Recorder from '../../Recorder'
import Context from '../context'
import { ADD_MULTI, REMOVE_MULTI } from '../reducer'

const RecorderGrid = styled(Grid)`
  width: 100%;
`
const Recordings = () => {
  const [{ recordings }, dispatch] = useContext(Context)
  const property = 'recordings'
  const add = (base64) => {
    dispatch({
      type: ADD_MULTI,
      property,
      value: base64,
    })
  }
  const remove = (blobIndex) => {
    dispatch({
      type: REMOVE_MULTI,
      property,
      index: blobIndex,
    })
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
