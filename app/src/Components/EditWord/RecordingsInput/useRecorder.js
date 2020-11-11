import { useEffect, useState } from 'react'
import { getMedia } from './getMedia'

let Recorder

const initRecorder = async (setChunks, isRecording, setIsDenied) => {
  try {
    return await getMedia().then((stream) => new MediaRecorder(stream))
  } catch (e) {
    setIsDenied(true)
  }
}
export const useRecorder = (recordings = [], update = () => {}) => {
  const [isRecording, setIsRecording] = useState(false)
  const [blobs, setBlobs] = useState(recordings)
  const [chunks, setChunks] = useState([])
  const [isDenied, setIsDenied] = useState(true)
  const [isInit, setIsInit] = useState(false)
  // const [recorder, setRecorder] = useState(null)

  const init = () => {
    initRecorder(setChunks).then((recorder) => {
      Recorder = recorder
      Recorder.ondataavailable = (e) => {
        console.log('data!', e.data)
        if (!isRecording) {
          // let blob = new Blob(e.data, { type: 'audio/mpeg-3' })
          let blob = e.data
          console.log('blob', blob)
          let reader = new FileReader()
          reader.readAsDataURL(blob)
          reader.onloadend = () => {
            let base64 = reader.result
            setBlobs((blobs) => {
              let arr = [...blobs, base64]
              update(arr)
              return arr
            })
          }
        }
      }
      setIsInit(true)
    })
  }

  const start = async () => {
    console.log('start')
    try {
      setIsRecording(true)

      Recorder.start()
    } catch (e) {
      console.error(e)
    }
  }
  const stop = () => {
    console.log('stop')
    Recorder.stop()
    setIsRecording(false)
  }
  const removeRecording = (i) => {
    setBlobs((blobs) => {
      let arr = blobs.filter((e, index) => index !== i)
      update(arr)
      return arr
    })
  }
  return {
    start,
    stop,
    setBlobs,
    removeRecording,
    startRecord: start,
    stopRecord: stop,
    isRecording,
    isDenied,
    isInit,
    init,
  }
}
