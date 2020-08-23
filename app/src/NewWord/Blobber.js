import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { Grid, Fab } from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import StopIcon from '@material-ui/icons/Stop'

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
      <Fab onClick={handleClick}>
        <Icon />
        <ReactPlayer url={BLOB_URL} playing={isPlaying} />
      </Fab>
    </Grid>
  )
}

export default Blobber
