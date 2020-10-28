import { useState } from 'react'
import { useReactMediaRecorder } from 'react-media-recorder'

export const useRecorder = (initBlobs = []) => {
  const [blobs, setBlobs] = useState(initBlobs)
  const handleBlob = (blob) => {
    setBlobs((blobs) => [...blobs, blob])
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
