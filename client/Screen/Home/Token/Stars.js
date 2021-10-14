import React, { useState } from 'react'
import { Animated, View, StyleSheet } from 'react-native'
import { useInterval } from '../../../hooks'
import Theme from '../../../Theme'

function Star({ style, rays = 5 }) {
  return (
    <Animated.View
      style={{
        ...StyleSheet.absoluteFillObject,
        flex: 1,

        ...style,
      }}
    >
      {Array.from(Array(rays)).map((_, i, arr) => {
        const coefficient = 360 / arr.length
        return (
          <View
            // TODO: be smarter about this key
            key={i}
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: Theme.rgba(Theme.YELLOW, 0.9),
              flex: 1,
              transform: [
                {
                  scale: 1,
                },
                {
                  rotateZ: `${i * coefficient}deg`,
                },
                {
                  skewX: '75deg',
                },
              ],
            }}
          ></View>
        )
      })}
    </Animated.View>
  )
}

function Stars({ show }) {
  const [rotateZ, setRotateZ] = useState(0)

  useInterval(() => {
    setRotateZ((z) => {
      let newZ = z + 1
      return newZ % 360
    })
  }, 1000 / 10)
  return (
    <Animated.View
      style={{
        ...StyleSheet.absoluteFillObject,
        position: 'absolute',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        transform: [
          {
            scale: show ? 1 : 0,
          },
        ],
      }}
    >
      <Star
        rays={15}
        style={{
          opacity: 1,
          transform: [
            {
              rotateZ: 1.75 * rotateZ,
            },
            {
              scale: 0.8,
            },
          ],
        }}
      ></Star>
      <Star
        rays={15}
        style={{
          opacity: 0.7,
          transform: [
            {
              rotateZ: -1.5 * rotateZ,
            },
            {
              scale: 1.2,
            },
          ],
        }}
      ></Star>
      <Star
        rays={15}
        style={{
          opacity: 0.8,
          transform: [
            {
              rotateZ: rotateZ,
            },
          ],
        }}
      ></Star>
      <View
        style={{
          backgroundColor: Theme.BLUE,
          borderRadius: 100,
          flex: 1,
          padding: 75,
          position: 'absolute',
          borderWidth: 3,
          borderColor: Theme.BLACK,
        }}
      />
    </Animated.View>
  )
}

export default Stars
