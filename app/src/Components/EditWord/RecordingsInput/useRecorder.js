import Axios from 'axios'
import { useState } from 'react'
import { useReactMediaRecorder } from 'react-media-recorder'
var reader = new FileReader()

export const useRecorder = (initBlobs = []) => {
  const [blobs, setBlobs] = useState(initBlobs)
  const handleBlob = (blob) => {
    // const blobURL = URL.createObjectURL(blob)
    const blobURL = blob
    console.log(blob)
    const config = { responseType: 'blob' }
    Axios.get(blobURL, config).then((res) => {
      const { data } = res

      reader.onloadend = function () {
        var base64data = reader.result
        setBlobs((blobs) => [...blobs, base64data])
      }
      reader.readAsDataURL(data)
    })
  }
  const { startRecording, stopRecording, status } = useReactMediaRecorder({
    onStop: handleBlob,
  })

  const startRecord = () => {
    startRecording()
  }
  const stopRecord = () => {
    stopRecording()
  }
  const removeBlob = (i) => {
    setBlobs((blobs) => blobs.filter((e, index) => index !== i))
  }
  return { blobs, startRecord, stopRecord, status, removeBlob }
}
