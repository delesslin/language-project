import useClippy from 'use-clippy'

const useCopy = () => {
  const clippy = useClippy()
  return clippy[1]
}

export default useCopy
