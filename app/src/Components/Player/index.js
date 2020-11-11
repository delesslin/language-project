import React from 'react'
import { Button } from '../Surfaces/Button'
import { SoundIcon } from '../Surfaces/Icon'

const PlayerComponent = (props) => {
  const { base64 } = props
  const AUDIO = new Audio(base64)

  const hasEnded = (event) => {
    event.currentTarget.removeEventListener(event.type, hasEnded)
  }
  const handlePlay = () => {
    console.log(base64.slice(0, 30))
    AUDIO.play()
      .then(() => {
        AUDIO.addEventListener('ended', hasEnded)
      })
      .catch((e) => {
        console.error(e)
        // setError(true)
      })
  }

  return (
    <Button round={true} onClick={handlePlay} {...props}>
      <SoundIcon />
    </Button>
  )
}

export const Player = React.memo(PlayerComponent)
