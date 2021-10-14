import React, { useEffect, useRef, useState } from 'react'
import { Animated, Easing, Text, StyleSheet } from 'react-native'
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
import { Title } from './Title'
import Token from './Token'
import { useAnimated } from '../../hooks'
import { Counter } from './Counter'
const asyncAnimated = (AnimatedArray) => {
  const validMethod = ['timing']
  return new Promise((res, rej) => {
    Animated.sequence(AnimatedArray).start(() => res())
  })
}

const Home = () => {
  const titleOpacity = useAnimated(0)
  const [acorn, setAcorn] = useObjState({
    x: useAnimated(25),
    y: useAnimated(-75),
    zRotation: useAnimated(0),
    showOrnaments: false,
  })
  const [bgDir, setBgDr] = useState(FORWARDS)
  const [rabbit, setRabbit] = useObjState({
    speaking: false,
    loop: true,
    sequence: RABBIT_HOP,
    x: useAnimated(400),
    text: 'Tαnakɛ!',
  })
  const [button, setButton] = useObjState({
    onPress: () => console.log('PRESSED'),
    show: false,
    text: 'button',
  })
  useAsyncEffect(async () => {
    await asyncAnimated([
      rabbit.x.timing({
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
        rabbit.x.timing({
          toValue: 150,
          easing: Easing.linear,
          duration: 8000,
        }),
        titleOpacity.timing({
          toValue: 1,
          easing: Easing.linear,
          duration: 2000,
        }),
      ]),
    ])
    rabbit.x.stop()
    setBgDr(STOP)
    setRabbit({
      loop: false,
      sequence: [...RABBIT_ATTN, ...RABBIT_WAITING, ...RABBIT_WAITING],
    })

    await asyncAnimated([
      titleOpacity.timing({
        easing: Easing.linear,
        duration: 2000,
        toValue: 0,
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
    acorn.zRotation.stop()
    setRabbit({
      speaking: false,
    })
    setAcorn({
      showOrnaments: true,
    })
    await asyncAnimated([
      Animated.parallel([
        acorn.x.spring({
          useNativeDriver: false,
          toValue: 150,
        }),
        acorn.y.spring({
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
        acorn.zRotation.spring({
          toValue: 25,
        }),
        acorn.zRotation.spring({
          toValue: -10,
        }),
        acorn.zRotation.spring({
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
      acorn.y.timing({
        useNativeDriver: false,
        toValue: 650,
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
          <Counter>{0}</Counter>
          <Title opacity={titleOpacity.value}>KATABARE</Title>
          <Rabbit
            loop={rabbit.loop}
            fps={5}
            style={{
              left: rabbit.x.value,
            }}
            speaking={rabbit.speaking}
            sequence={rabbit.sequence}
          >
            {rabbit.text}
          </Rabbit>
          <Token
            x={acorn.x.value}
            y={acorn.y.value}
            zRotation={acorn.zRotation}
            onPress={handleTama}
            showOrnaments={acorn.showOrnaments}
            source={require('assets/acorn_1.png')}
          ></Token>
        </Background>
      </Card>
      <Buttons show={button.show} onPress={button.onPress}>
        <Text
          style={{
            fontFamily: 'text',
            fontSize: 25,
          }}
        >
          {button.text}
        </Text>
      </Buttons>
    </Container>
  )
}

export default Home
