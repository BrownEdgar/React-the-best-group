import axios from 'axios'

async function getPhotos() {
  const response = await axios('https://jsonplaceholder.typicode.com/photos')
  const data = response.data;
  return data
}

export default getPhotos
