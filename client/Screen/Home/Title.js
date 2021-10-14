import React from 'react'
import { Animated, Text } from 'react-native'
import Theme from '../../Theme'

export function Title({ opacity, children }) {
  return (
    <Animated.View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingVertical: 100,
        opacity,
      }}
    >
      <Animated.View
        style={{
          backgroundColor: Theme.rgba(Theme.WHITE, 0.9),
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 15,
        }}
      >
        <Text
          style={{
            fontSize: 70,
            fontFamily: 'title',
            color: Theme.rgba(Theme.RED, 0.9),
          }}
        >
          {children}
        </Text>
      </Animated.View>
    </Animated.View>
  )
}
