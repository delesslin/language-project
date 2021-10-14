import React, { useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { Animated, View, Text, Pressable } from 'react-native'
import Theme from 'Theme'
import { useAnimated, useAsyncEffect, useInterval } from 'hooks'

function Circle({ deg, playing }) {
  return (
    <Animated.View
      style={[
        {
          borderRadius: 50,
          justifyContent: 'center',
          padding: 35,
          borderWidth: 2,
          backgroundColor: Theme.WHITE,
          position: 'absolute',
          transform: [
            {
              rotateZ: '45deg',
            },
          ],
        },
        !playing
          ? {
              borderColor: Theme.BLACK,
            }
          : {
              // borderBottomColor: `${deg.value % 360}deg`,
              borderRightColor: deg.interpolate({
                inputRange: [270, 360],
                outputRange: [
                  Theme.rgba(Theme.YELLOW, 0),
                  Theme.rgba(Theme.YELLOW, 1),
                ],
              }),
              borderTopColor: deg.interpolate({
                inputRange: [180, 270],
                outputRange: [
                  Theme.rgba(Theme.YELLOW, 0),
                  Theme.rgba(Theme.YELLOW, 1),
                ],
              }),
              borderBottomColor: deg.interpolate({
                inputRange: [0, 90],
                outputRange: [
                  Theme.rgba(Theme.YELLOW, 0),
                  Theme.rgba(Theme.YELLOW, 1),
                ],
              }),
              borderLeftColor: deg.interpolate({
                inputRange: [90, 180],
                outputRange: [
                  Theme.rgba(Theme.YELLOW, 0),
                  Theme.rgba(Theme.YELLOW, 1),
                ],
              }),
            },
      ]}
    ></Animated.View>
  )
}

function PlayButton() {
  const deg = useAnimated(0)
  const arr = [0, 1, 2, 3]
  const [playing, setPlaying] = useState(false)

  useAsyncEffect(() => {
    Animated.loop(
      Animated.sequence([
        deg.timing({ toValue: 360, duration: 3000 }),
        deg.timing({ toValue: 0, duration: 1000 }),
      ])
    ).start()
  }, [])
  const togglePlay = () => setPlaying((p) => !p)
  return (
    <Animated.View
      style={{
        borderRadius: 50,
        justifyContent: 'center',
        padding: 35,
        borderWidth: 2,
        alignItems: 'center',
        position: 'absolute',
        right: -25,
      }}
    >
      <Pressable
        style={{
          alignItems: 'center',
          position: 'absolute',
          justifyContent: 'center',
        }}
        onPress={togglePlay}
      >
        <Circle deg={deg} playing={playing}></Circle>
        <FontAwesome5
          style={{
            position: 'absolute',
          }}
          name='play'
          size={24}
          color='black'
        />
      </Pressable>
    </Animated.View>
  )
}

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

export default PlayButton
