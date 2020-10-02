import React from 'react'
import Player from '../../Components/Player'
const Sound = ({ data }) => {
  if (data.length > 0) {
    return <Player base64={data[0]} />
  } else {
    return null
  }
}

export default Sound
