import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, Platform, Animated } from 'react-native'
import Home from './Screen/Home'
import Theme from 'Theme'
import { useFonts } from 'expo-font'
export default function App() {
  const [loaded, error] = useFonts({
    title: require('./assets/Fonts/ConcertOne-Regular.ttf'),
    text: require('./assets/Fonts/SourceSansPro-Bold.ttf'),
  })
  if (error) {
    console.error(error)
    return null
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Theme.BLUE,
        paddingTop: Platform.OS === 'android' ? 30 : 0,
      }}
    >
      {loaded ? <Home /> : null}
    </SafeAreaView>
  )
}
