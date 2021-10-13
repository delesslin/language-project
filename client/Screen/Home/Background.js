import React, { useEffect, useRef } from 'react'
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
  Easing,
} from 'react-native'
import { useInterval } from '../../hooks'
const layerOne = require('assets/Layers/1.png'),
  layerTwo = require('assets/Layers/2.png'),
  layerThree = require('assets/Layers/3.png'),
  layerFour = require('assets/Layers/4.png'),
  layerFive = require('assets/Layers/5.png'),
  layerSix = require('assets/Layers/6.png')
let maxWidth = -250
export const BACKWARDS = -1,
  FORWARDS = 1,
  STOP = 0
const BgImage = ({ source, fps = 24, z = 0, direction = STOP }) => {
  const [left, setLeft] = React.useState(maxWidth / 2)
  const windowHeight = Dimensions.get('window').height
  useInterval(() => {
    if (direction === STOP) {
      return
    }

    setLeft((lft) => {
      let int = 1 * z * direction
      if (lft + int > 0) {
        return maxWidth
      }
      if (lft + int < maxWidth) {
        return 0
      }
      return lft + int
    })
  }, 1000 / fps)

  return (
    <View style={{ position: 'absolute' }}>
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: 'red',
          position: 'absolute',
          justifyContent: 'center',
          bottom: 100,
          left,
        }}
      >
        <Image
          style={{
            ...StyleSheet.absoluteFillObject,
            height: windowHeight,
          }}
          source={source}
        />
      </Animated.View>
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: 'red',
          position: 'absolute',
          justifyContent: 'center',
          bottom: 100,
          left: 250 + left,
        }}
      >
        <Image
          style={{
            ...StyleSheet.absoluteFillObject,
            height: windowHeight,
          }}
          source={source}
        />
      </Animated.View>
    </View>
  )
}
function Background({ direction = RIGHT, fps = 24, children }) {
  return (
    <View style={{ ...StyleSheet.absoluteFillObject, flex: 1 }}>
      <BgImage source={layerOne} z={0.2} direction={direction} fps={fps} />

      <BgImage source={layerFour} z={0.5} direction={direction} fps={fps} />
      <View style={{ ...StyleSheet.absoluteFillObject, position: 'absolute' }}>
        {children}
      </View>
      {/* <BgImage source={layerSix} z={0.8} direction={direction} fps={fps} /> */}
    </View>
  )
}
export default Background
