import React from 'react'
import { View } from 'react-native'
import Theme from '../Theme'

export const Container = ({ children }) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 10 }}>
      {children}
    </View>
  )
}

export const Card = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Theme.WHITE,
        borderRadius: 25,
        borderWidth: 5,
        borderColor: Theme.BLACK,
        overflow: 'hidden',
      }}
    >
      {children}
    </View>
  )
}
