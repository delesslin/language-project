import React, { useEffect, useRef } from 'react'
import { Animated, Easing, Text, Pressable } from 'react-native'
import Theme from '../../Theme'

function Buttons({ onPress, children }) {
  const scale = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(scale, {
      useNativeDriver: false,
      toValue: 1,
      easing: Easing.bounce,
      duration: 500,
    }).start()
  }, [])
  const handlePressIn = () => {
      Animated.timing(scale, {
        useNativeDriver: false,
        toValue: 0.9,
        easing: Easing.linear,
        duration: 200,
      }).start()
    },
    handlePressOut = () => {
      Animated.timing(scale, {
        useNativeDriver: false,
        toValue: 1,
        easing: Easing.bounce,
        duration: 200,
      }).start(() => {
        console.log('clicked!')
        onPress()
      })
    }
  return (
    <Animated.View
      style={{
        position: 'absolute',
        alignSelf: 'center',
        bottom: 50,
        alignItems: 'center',
        opacity: scale,
        transform: [
          {
            scale,
          },
        ],
      }}
    >
      <Pressable
        style={{
          position: 'absolute',
          paddingHorizontal: 20,
          paddingVertical: 5,
          backgroundColor: Theme.YELLOW,
          borderRadius: 25,
          borderWidth: 3,
          borderColor: Theme.BLACK,
        }}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        {children}
      </Pressable>
    </Animated.View>
  )
}

export default Buttons
