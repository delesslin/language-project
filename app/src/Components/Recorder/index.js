import React from 'react'

import MicRecorder from 'mic-recorder-to-mp3'
import { Fab } from '@material-ui/core'
import { MicIcon } from '../'
import { NoMicIcon } from '../Surfaces/Icon'
const recorder = new MicRecorder({ bitRate: 128 })
const reader = new FileReader()
// TODO: style for when it is isRecording
// TODO: style for when permission is denied
const Recorder = ({ add = (base64) => console.log(base64) }) => {
  const [isRecording, setIsRecording] = React.useState(false)
  const [isBlocked, setIsBlocked] = React.useState(false)

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
    console.log('mouse up')
    setIsRecording(false)
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
          { once: true }
        )
      })
  }
  if (isBlocked) {
    return (
      <Fab>
        <NoMicIcon />
      </Fab>
    )
  } else {
    return (
      <Fab
        onMouseDown={handleDown}
        onMouseUp={handleUp}
        color={isRecording ? 'secondary' : 'primary'}
      >
        <MicIcon />
      </Fab>
    )
  }
}

export default Recorder
