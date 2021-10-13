import React, { useEffect, useState } from 'react'
import { Animated } from 'react-native'
import { useInterval } from '../../../hooks'
import Frame from '../Frame'
import Speech from './Speech'
export const RABBIT_EAT = [4, 0, 1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1, 0, 4],
  RABBIT_HOP = [8, 9, 10, 11, 12, 13],
  RABBIT_SLEEP = [14, 15, 16, 7, 6, 5],
  RABBIT_ATTN = [4, 17, 18, 19, 20, 21, 22, 21, 20],
  RABBIT_WAITING = [20, 20, 20, 20, 22, 22, 22, 21, 21, 22, 22, 21, 21, 20],
  RABBIT_SATISFIED = [21, 22, 19, 18, 17],
  RABBIT_NEUTRAL = [0, 1, 2, 1],
  RABBIT_STARE_USER = [20],
  RABBIT_STARE_FORWARD = [22],
  RABIT_STARE_TURN = [21]

function Rabbit({
  fps,
  sequence,
  style,
  loop = true,
  speaking,
  stop,
  children,
}) {
  const [frameIndex, setFrameIndex] = useState(0)

  useInterval(() => {
    if (sequence.length > 1) {
      let lastI = sequence.length - 1
      if (stop) {
        return
      }
      if (!loop) {
        if (frameIndex > lastI) {
          setFrameIndex(lastI)
          return
        }
        if (frameIndex == lastI) {
          return
        }
        setFrameIndex((i) => i + 1)
        return
      }
      setFrameIndex((i) => {
        if (i >= lastI) {
          return 0
        }
        return i + 1
      })
      return
    }
  }, 1000 / fps)
  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          top: 600,
          // bottom: 250,
          // left: 125,
          transform: [
            {
              scale: 2.5,
            },
          ],
        },
        style,
      ]}
    >
      <Frame
        frame={sequence[frameIndex]}
        height={444}
        width={220}
        cols={4}
        rows={6}
        source={require('assets/bunny-Sheet.png')}
      />
      {speaking ? <Speech>{children}</Speech> : null}
    </Animated.View>
  )
}

export default Rabbit
