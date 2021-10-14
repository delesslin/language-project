import React, { useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import {
  Animated,
  View,
  Image,
  StyleSheet,
  Pressable,
  Text,
  Easing,
} from 'react-native'
import Theme from '../../../Theme'
import { useAnimated, useAsyncEffect, useInterval } from '../../../hooks'
import Stars from './Stars'
import PlayButton from './PlayButton'

const Info = ({
  show = true,
  term = 'tama',
  pronunciation = 'tah-mah',
  translation = 'acorn',
}) => {
  if (!show) return null
  return (
    <View
      style={{
        flex: 1,
        top: 75,
        flexDirection: 'row',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: 165,
      }}
    >
      <View
        style={{
          flex: 1,
          paddingVertical: 5,
          paddingLeft: 15,
          paddingRight: 10,
          backgroundColor: Theme.WHITE,
          borderRadius: 15,
          borderWidth: 3,
          borderColor: Theme.BLACK,
        }}
      >
        <Text style={{ fontFamily: 'text', fontSize: 25 }}>{term}</Text>
        <Text style={{ fontStyle: 'italic' }}>{`(${pronunciation})`}</Text>
        <View
          style={{
            borderTopColor: Theme.BLACK,
            borderTopWidth: 1,
            marginTop: 5,
            width: 75,
          }}
        ></View>
        <Text style={{ fontFamily: 'text', paddingVertical: 5, fontSize: 20 }}>
          {`: ${translation}`}
        </Text>
      </View>
      <PlayButton></PlayButton>
    </View>
  )
}
function Token({ x, y, onPress, showOrnaments, zRotation, source }) {
  return (
    <Animated.View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        top: y,
        left: x,
        position: 'absolute',
      }}
    >
      <Stars show={showOrnaments}></Stars>

      <Animated.View
        style={{
          alignSelf: 'center',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          transform: [
            {
              rotateZ: zRotation.interpolate({
                inputRange: [0, 360],
                outputRange: ['0deg', '360deg'],
              }),
            },
            {
              scale: zRotation.interpolate({
                inputRange: [0, 360],
                outputRange: [1, 2],
              }),
            },
          ],
        }}
      >
        <Pressable onPress={onPress}>
          <Image
            source={source}
            style={{
              width: 50,
              height: 50,
            }}
          />
        </Pressable>
      </Animated.View>
      <Info />
    </Animated.View>
  )
}

export default Token
