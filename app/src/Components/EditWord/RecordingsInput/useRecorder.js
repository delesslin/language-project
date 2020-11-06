import Axios from 'axios'
import React, { useState } from 'react'
import { useReactMediaRecorder } from 'react-media-recorder'
var reader = new FileReader()
let Recorder
const audioChunks = []
export const useRecorder = (initBlobs = []) => {
  const [blobs, setBlobs] = useState(initBlobs)

  // const [audioChunks, setAudioChunks] = useState([])
  React.useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      Recorder = new MediaRecorder(stream)
    })
  }, [])
  const handleBlob = (blob) => {
    // const blobURL = URL.createObjectURL(blob)
    console.log('blob: ', blob)
    reader.onloadend = () => {
      var base64data = reader.result
      console.log('base64: ', base64data)
      setBlobs((blobs) => [...blobs, base64data])
    }
    reader.readAsDataURL(blob)
    // const blobURL = blob

    // const config = { responseType: 'blob' }
    // Axios.get(blobURL, config).then((res) => {
    //   const { data } = res

    //   reader.onloadend = function () {
    //     var base64data = reader.result.split(',')[1]
    //     console.log('base64: ', base64data)
    //     setBlobs((blobs) => [...blobs, base64data])
    //   }
    //   reader.readAsDataURL(data)
    // })
  }
  const { startRecording, stopRecording, status } = useReactMediaRecorder({
    onStop: handleBlob,
    blobPropertyBag: {
      type: 'audio/mp3',
    },
  })

  const startRecord = () => {
    console.log('recording')
    Recorder.addEventListener('dataavailable', (event) => {
      console.log(event.data)
      audioChunks.push(event.data)
    })
    Recorder.addEventListener('stop', () => {
      const audioBlob = new Blob(audioChunks, { type: 'audio/mp3' })
      handleBlob(audioBlob)
    })
    Recorder.start()
  }
  const stopRecord = () => {
    console.log('ending recording')
    Recorder.stop()
  }
  const removeBlob = (i) => {
    setBlobs((blobs) => blobs.filter((e, index) => index !== i))
  }
  return { blobs, startRecord, stopRecord, status, removeBlob }
}
