import React, { Children, useEffect, useRef } from 'react'
import { Animated, Easing, View, Text, StyleSheet } from 'react-native'
import Theme from '../../../Theme'
const duration = 500
const Bubble = ({ d = 5, r, xOffset, yOffset, opacity = 0.5, delay = 0 }) => {
  const scale = useRef(new Animated.Value(0)).current
  useEffect(() => {
    Animated.sequence([
      Animated.delay(delay),
      Animated.timing(scale, {
        useNativeDriver: false,
        toValue: 1,
        duration,
        easing: Easing.bounce,
      }),
    ]).start()
  }, [])
  return (
    <Animated.View
      style={{
        width: d,
        height: d,
        borderRadius: r || d,
        backgroundColor: Theme.rgba(Theme.WHITE, opacity),
        borderWidth: 1,
        left: scale.interpolate({
          inputRange: [0, 1],
          outputRange: [0, xOffset],
        }),
        bottom: scale.interpolate({
          inputRange: [0, 1],
          outputRange: [0, yOffset],
        }),
        position: 'absolute',
        transform: [
          {
            scale,
          },
        ],
      }}
    />
  )
}

function SpeechBubble({ children, delay = 3000 }) {
  const opacity = useRef(new Animated.Value(0)).current
  useEffect(() => {
    Animated.sequence([
      Animated.delay(delay),
      Animated.timing(opacity, {
        useNativeDriver: false,
        toValue: 0.95,
        duration,
        easing: Easing.bounce,
      }),
    ]).start()
  })
  return (
    <Animated.View
      style={{
        backgroundColor: Theme.WHITE,
        position: 'absolute',
        width: 125,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        bottom: opacity.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 125],
        }),
        height: 100,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: Theme.BLACK,
        opacity,
        transform: [
          {
            scale: opacity,
          },
        ],
      }}
    >
      {children}
    </Animated.View>
  )
}

function Speech({ children }) {
  return (
    <View
      style={{
        flex: 1,
        position: 'absolute',
      }}
    >
      <Bubble d={10} xOffset={0} yOffset={40} />
      <Bubble
        opacity={0.7}
        d={20}
        r={9}
        xOffset={10}
        yOffset={55}
        delay={500}
      />
      <Bubble
        opacity={0.8}
        d={30}
        r={12}
        xOffset={-20}
        yOffset={80}
        delay={750}
      />
      <SpeechBubble delay={1000}>
        <View>
          <Text style={{ fontFamily: 'text', fontSize: 25 }}>{children}</Text>
        </View>
      </SpeechBubble>
    </View>
  )
}

export default Speech
