import Axios from 'axios'
import { useState } from 'react'
import { useReactMediaRecorder } from 'react-media-recorder'
var reader = new FileReader()

export const useRecorder = (initBlobs = []) => {
  const [blobs, setBlobs] = useState(initBlobs)
  const handleBlob = (blob) => {
    // const blobURL = URL.createObjectURL(blob)
    console.log('blob: ', blob)
    const blobURL = blob

    const config = { responseType: 'blob' }
    Axios.get(blobURL, config).then((res) => {
      const { data } = res

      reader.onloadend = function () {
        var base64data = reader.result
        console.log('base64: ', base64data)
        setBlobs((blobs) => [...blobs, base64data])
      }
      reader.readAsDataURL(data)
    })
  }
  const { startRecording, stopRecording, status } = useReactMediaRecorder({
    onStop: handleBlob,
    blobPropertyBag: {
      type: 'audio/mp3',
    },
  })

  const startRecord = () => {
    console.log('recording')
    startRecording()
  }
  const stopRecord = () => {
    console.log('ending recording')
    stopRecording()
  }
  const removeBlob = (i) => {
    setBlobs((blobs) => blobs.filter((e, index) => index !== i))
  }
  return { blobs, startRecord, stopRecord, status, removeBlob }
}
