import React from 'react'
import { View, Text, Image } from 'react-native'
import Theme from '../../Theme'

export function Counter({ children }) {
  return (
    <View
      style={{
        width: 100,
        backgroundColor: Theme.WHITE,
        alignSelf: 'flex-end',
        margin: 10,
        borderRadius: 25,
        borderWidth: 3,
        borderColor: Theme.BLACK,
        paddingHorizontal: 5,
        paddingVertical: 1,
      }}
    >
      <View
        style={{
          position: 'absolute',
          left: -40,
          top: -15,
        }}
      >
        <Image
          style={{
            width: 100,
            height: 60,
          }}
          source={require('../../assets/acorn_counter.png')}
        />
      </View>
      <Text
        style={{
          fontFamily: 'mono',
          textAlign: 'right',
          fontSize: 20,
        }}
      >
        {children}
      </Text>
    </View>
  )
}
