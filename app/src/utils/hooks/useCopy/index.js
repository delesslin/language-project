import useClippy from 'use-clippy'

const useCopy = () => {
  const [clipboard, setClipboard] = useClippy()
  return setClipboard
}

export default useCopy
