import { useEffect, useState } from 'react'
import { getMedia } from './getMedia'
import MicRecorder from 'mic-recorder-to-mp3'

let Recorder

const initRecorder = async (setIsDenied) => {
  return new MicRecorder({
    bitRate: 128,
  })
  // try {
  //   return await getMedia().then(
  //     (stream) => new MediaRecorder(stream, { mimeType: 'audio/mpeg' })
  //   )
  // } catch (e) {
  //   console.error('initRecorder Error: ', e)
  //   setIsDenied(true)
  // }
}
export const useRecorder = (recordings = [], update = () => {}) => {
  const [isRecording, setIsRecording] = useState(false)
  const [blobs, setBlobs] = useState(recordings)
  const [chunks, setChunks] = useState([])
  const [isDenied, setIsDenied] = useState(true)
  const [isInit, setIsInit] = useState(false)
  // const [recorder, setRecorder] = useState(null)

  const init = () => {
    initRecorder(setIsDenied).then((recorder) => {
      Recorder = recorder
      // Recorder.ondataavailable = (e) => {
      //   console.log('data!', e.data)
      //   if (!isRecording) {
      //     let blob = new Blob(e.data, { type: 'audio/mpeg' })
      //     // let blob = e.data
      //     console.log('blob', blob)
      //     let reader = new FileReader()
      //     reader.readAsDataURL(blob)
      //     reader.onloadend = () => {
      //       let base64 = reader.result
      //       setBlobs((blobs) => {
      //         let arr = [...blobs, base64]
      //         update(arr)
      //         return arr
      //       })
      //     }
      //   }
      // }
      setIsInit(true)
    })
  }

  const start = async () => {
    console.log('start')
    try {
      await Recorder.start().then(() => {
        setIsRecording(true)
      })
    } catch (e) {
      console.error(e)
    }
  }
  const stop = () => {
    console.log('stop')
    Recorder.stop()
      .getMp3()
      .then(([buffer, blob]) => {
        console.log(blob)
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
      })
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
