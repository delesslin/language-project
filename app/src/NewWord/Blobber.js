import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { Grid, Fab, Container, Hidden } from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import StopIcon from '@material-ui/icons/Stop'

// TODO: react-player causing funky styles. Different player or...?
const Blobber = ({ blob }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const Icon = () => {
    if (isPlaying) {
      return <StopIcon />
    } else {
      return <PlayArrowIcon />
    }
  }
  const handleClick = () => {
    const bool = !isPlaying
    setIsPlaying(bool)
  }

  const BLOB_URL = URL.createObjectURL(blob)
  console.log(BLOB_URL)
  return (
    <Grid item>
      <Container>
        <Fab onClick={handleClick}>
          <Icon />
        </Fab>
      </Container>
      <Hidden></Hidden>
      <ReactPlayer url={BLOB_URL} playing={isPlaying} />
    </Grid>
  )
}

export default Blobber
