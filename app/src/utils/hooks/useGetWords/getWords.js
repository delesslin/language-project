const getWords = async (headers = {}) => {
  const res = await fetch('/api/words', headers)
  return res.json()
}

export default getWords
