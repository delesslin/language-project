import React, { useState, useEffect, useRef } from 'react'
import { Animated } from 'react-native'
export const useAsyncEffect = async (asyncFN, arr) => {
  useEffect(() => {
    asyncFN()
  }, [...arr])
}

export const useObjState = (obj) => {
  const isObject = (o) => o === Object(o)
  const [state, setState] = useState(isObject(obj) ? obj : {})
  const setObjState = (update) => {
    if (isObject(update)) {
      setState((curr) => {
        return {
          ...curr,
          ...update,
        }
      })
    }
  }
  return [state, setObjState]
}
export const useAnimatedValue = (val) => useRef(new Animated.Value(val)).current
export function useInterval(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
