const getWords = async () => {
  const res = await fetch('/api/words')
  return res.json()
}

export default getWords
