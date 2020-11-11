import React from 'react'
// BUG: error recording on words that already have a word
import MicRecorder from 'mic-recorder-to-mp3'
import { Fab } from '@material-ui/core'
import { MicIcon } from '../'
import { NoMicIcon } from '../Surfaces/Icon'
const recorder = new MicRecorder({ bitRate: 256 })

// TODO: style for when it is isRecording
// TODO: style for when permission is denied
const Recorder = ({
  add = (base64) => console.log('no add fn. base64: ', base64),
}) => {
  const [isRecording, setIsRecording] = React.useState(false)
  const [isBlocked, setIsBlocked] = React.useState(false)

  const handleDown = () => {
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
    setIsRecording(false)
    const reader = new FileReader()
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
