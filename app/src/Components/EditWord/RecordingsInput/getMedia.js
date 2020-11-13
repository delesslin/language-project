// let Recorder
export async function getMedia() {
  try {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      return await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      })
    } else {
      throw new Error('mediaDevices not supported')
    }
    /* use the stream */
  } catch (err) {
    /* handle the error */
    throw err
  }
}
