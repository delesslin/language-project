import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { Grid, Fab, Container, Box, Paper, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import StopIcon from '@material-ui/icons/Stop'
import styled from 'styled-components'
const HiddenBox = styled(Box)`
  width: 0px;
  height: 0px;
  overflow: hidden;
`
const BlobPaper = styled(Paper)`
  elevation: 4;
  padding: 8px 5px;
`
// const HiddenBox = styled(Box)({
//   width: '0px',
//   height: '0px',
//   overflow: 'hidden',
// })
// const BlobPaper = styled(Paper)({
//   elevation: 4,
//   padding: '8px 5px',
// })
// TODO: react-player causing funky styles. Different player or...?
const Blobber = ({ blob, onDelete }) => {
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
  // console.log(BLOB_URL)
  return (
    <Grid item>
      <BlobPaper>
        <Grid container direction='column' alignItems='stretch'>
          <Grid item>
            <Container>
              <Fab onClick={handleClick}>
                <Icon />
              </Fab>
            </Container>
          </Grid>
          <Grid item>
            <Container>
              <IconButton onClick={onDelete}>
                <DeleteIcon />
              </IconButton>
            </Container>
          </Grid>
          <HiddenBox>
            <ReactPlayer
              url={BLOB_URL}
              playing={isPlaying}
              onEnded={() => setIsPlaying(false)}
            />
          </HiddenBox>
        </Grid>
      </BlobPaper>
    </Grid>
  )
}

export default Blobber
