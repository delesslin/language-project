import React, { useEffect } from 'react'
import { View, Image } from 'react-native'

const Frame = ({
  source,
  frame = 0,
  height = 260,
  width = 400,
  cols = 4,
  rows = 3,
}) => {
  const frameWidth = width / cols,
    frameHeight = height / rows
  let column = frame % cols
  let row = Math.floor(frame / cols)
  // useEffect(() => console.log(frame), [frame])
  return (
    <View>
      <View
        style={{
          overflow: 'hidden',
          width: frameWidth,
          height: frameHeight,
        }}
      >
        <Image
          style={{
            height,
            width,
            right: frameWidth * column,
            bottom: frameHeight * row,
          }}
          source={source}
        />
      </View>
    </View>
  )
}

export default Frame
