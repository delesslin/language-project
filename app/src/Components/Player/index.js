import React, { useState } from 'react'
import { Button } from '../Surfaces/Button'
import { RiUserVoiceLine } from 'react-icons/ri'
import { Text } from '../Surfaces'
import { SoundIcon } from '../Surfaces/Icon'

const PlayerComponent = (props) => {
  const { base64 } = props
  const AUDIO = new Audio(base64)
  const [isPlaying, setIsPlaying] = useState(false)
  const [error, setError] = useState(false)
  const hasEnded = (event) => {
    setIsPlaying(false)
    console.log('done!')
    event.currentTarget.removeEventListener(event.type, hasEnded)
  }
  const handlePlay = () => {
    setIsPlaying(true)
    AUDIO.play()
      .then(() => {
        AUDIO.addEventListener('ended', hasEnded)
      })
      .catch((e) => {
        console.error(e)
        setError(true)
      })
  }

  return (
    <Button round={true} onClick={handlePlay} {...props}>
      <Text size={1.5}>
        <SoundIcon />
      </Text>
    </Button>
  )
}

export const Player = React.memo(PlayerComponent)
