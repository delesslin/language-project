import React, { useState } from 'react'
import { Animated, View, Image, StyleSheet, Pressable } from 'react-native'
import Theme from '../../Theme'
import { useInterval } from '../../hooks'

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
            key={_.toString()}
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

export function AcornToken(props) {
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
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        top: props.acorn.y,
        left: props.acorn.x,
        position: 'absolute',
      }}
    >
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          position: 'absolute',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          transform: [
            {
              scale: props.showOrnaments ? 1 : 0,
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
                rotateZ,
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

      <Animated.View
        style={{
          alignSelf: 'center',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          transform: [
            {
              rotateZ: props.acorn.zRotation.interpolate({
                inputRange: [0, 360],
                outputRange: ['0deg', '360deg'],
              }),
            },
            {
              scale: props.acorn.zRotation.interpolate({
                inputRange: [0, 360],
                outputRange: [1, 2],
              }),
            },
          ],
        }}
      >
        <Pressable onPress={props.handleTama}>
          <Image
            source={require('assets/acorn_1.png')}
            style={{
              width: 50,
              height: 50,
            }}
          />
        </Pressable>
      </Animated.View>
    </Animated.View>
  )
}
