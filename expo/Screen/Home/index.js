import React, { useEffect, useRef, useState } from 'react'
import { Animated, Easing, View, Text, Image, StyleSheet } from 'react-native'
import Theme from '../../Theme'
import Background, { BACKWARDS, FORWARDS, STOP } from './Background'
import Buttons from './Buttons'
import Rabbit, {
  RABBIT_ATTN,
  RABBIT_EAT,
  RABBIT_HOP,
  RABBIT_NEUTRAL,
  RABBIT_STARE_FORWARD,
  RABBIT_STARE_USER,
  RABBIT_WAITING,
  RABIT_STARE_TURN,
} from './Rabbit'
import { Container, Card } from 'Components'

import { useAnimatedValue, useObjState, useAsyncEffect } from 'hooks'
const asyncAnimated = (AnimatedArray) => {
  const validMethod = ['timing']
  return new Promise((res, rej) => {
    Animated.sequence(AnimatedArray).start(() => res())
  })
}
const Home = () => {
  const titleOpacity = useAnimatedValue(0)
  const [acorn, setAcorn] = useState({
    x: useAnimatedValue(-125),
    y: useAnimatedValue(-50),
    zRotation: useAnimatedValue(0),
  })
  const [bgDir, setBgDr] = useState(FORWARDS)
  const [rabbit, setRabbit] = useObjState({
    speaking: false,
    loop: true,
    sequence: RABBIT_HOP,
    x: useAnimatedValue(400),
    text: 'Tαnakɛ!',
  })
  const [button, setButton] = useObjState({
    onPress: () => console.log('PRESSED'),
    show: false,
    text: 'button',
  })
  useAsyncEffect(async () => {
    await asyncAnimated([
      Animated.timing(rabbit.x, {
        useNativeDriver: false,
        toValue: -175,
        easing: Easing.sin,
        duration: 5000,
      }),
    ])

    setRabbit({
      sequence: RABBIT_EAT,
    })
    await asyncAnimated([
      Animated.parallel([
        Animated.timing(rabbit.x, {
          useNativeDriver: false,
          toValue: 150,
          easing: Easing.linear,
          duration: 8000,
        }),
        Animated.timing(titleOpacity, {
          useNativeDriver: false,
          toValue: 1,
          easing: Easing.linear,
          duration: 2000,
        }),
      ]),
    ])
    rabbit.x.stopAnimation()
    setBgDr(STOP)
    setRabbit({
      loop: false,
      sequence: [...RABBIT_ATTN, ...RABBIT_WAITING, ...RABBIT_WAITING],
    })

    await asyncAnimated([
      Animated.timing(titleOpacity, {
        useNativeDriver: false,
        toValue: 0,
        easing: Easing.linear,
        duration: 2000,
      }),
    ])

    setRabbit({
      speaking: true,
    })
    await asyncAnimated([Animated.delay(2000)])
    setButton({
      show: true,
      onPress: handleTanake,
      text: 'Tαnakɛ!!',
    })
  }, [])
  const handleTama = async () => {
    console.log('TAMA PRESS')
    acorn.zRotation.stopAnimation()
    await asyncAnimated([
      Animated.parallel([
        Animated.spring(acorn.x, {
          useNativeDriver: false,
          toValue: 0,
        }),
        Animated.spring(acorn.y, {
          useNativeDriver: false,
          toValue: 250,
        }),
      ]),
    ])
  }
  const handleHanidu = () => {
    console.log('Hanidu!')
    setButton({
      show: false,
    })
    setRabbit({
      speaking: true,
      text: 'Tama hare.',
    })
    Animated.loop(
      Animated.sequence([
        Animated.spring(acorn.zRotation, {
          useNativeDriver: false,
          toValue: 25,
        }),
        Animated.spring(acorn.zRotation, {
          useNativeDriver: false,
          toValue: -10,
        }),
        Animated.spring(acorn.zRotation, {
          useNativeDriver: false,
          toValue: 0,
        }),
      ])
    ).start()
  }
  const handleTanake = async () => {
    setBgDr(FORWARDS)
    setButton({
      show: false,
      text: 'hanidu',
      onPress: handleHanidu,
    })
    setRabbit({
      speaking: false,
      loop: true,
      sequence: RABBIT_HOP,
    })

    await asyncAnimated([Animated.delay(3000)])

    await asyncAnimated([
      Animated.timing(acorn.y, {
        useNativeDriver: false,
        toValue: 700,
        duration: 1000,
        easing: Easing.bounce,
      }),
    ])
    setBgDr(STOP)
    setRabbit({
      loop: false,
      sequence: [...RABBIT_ATTN, ...RABIT_STARE_TURN, ...RABBIT_STARE_FORWARD],
    })
    setButton({
      show: true,
    })
  }
  return (
    <Container>
      <Card>
        <Background direction={bgDir} fps={30}>
          <Rabbit
            loop={rabbit.loop}
            fps={5}
            style={{
              left: rabbit.x,
            }}
            speaking={rabbit.speaking}
            sequence={rabbit.sequence}
          >
            {rabbit.text}
          </Rabbit>
          <Animated.View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Theme.RED,
              top: acorn.y,
              left: acorn.x,
            }}
          >
            <Animated.View
              style={{
                alignSelf: 'center',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                transform: [
                  {
                    rotateZ: acorn.zRotation.interpolate({
                      inputRange: [0, 360],
                      outputRange: ['0deg', '360deg'],
                    }),
                  },
                  {
                    scale: acorn.zRotation.interpolate({
                      inputRange: [0, 360],
                      outputRange: [1, 2],
                    }),
                  },
                ],
              }}
            >
              <Image
                onPress={handleTama}
                source={require('assets/acorn_1.png')}
                style={{ width: 50, height: 50, position: 'absolute' }}
              />
            </Animated.View>
          </Animated.View>
        </Background>
        <Animated.View
          style={{
            flex: 1,
            alignItems: 'center',
            paddingVertical: 100,
            opacity: titleOpacity,
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
              KATABARE
            </Text>
          </Animated.View>
        </Animated.View>
      </Card>
      {button.show ? (
        <Buttons onPress={button.onPress}>
          <Text
            style={{
              fontFamily: 'text',
              fontSize: 25,
            }}
          >
            {button.text}
          </Text>
        </Buttons>
      ) : null}
    </Container>
  )
}

export default Home
