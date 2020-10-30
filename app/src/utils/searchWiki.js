import Axios from 'axios'

const searchWiki = async (searchTerm) => {
  const { data } = await Axios.get(`/api/image/search/${searchTerm}`)
  return data
}

export default searchWiki
