import axios from 'axios'

async function getAnimals() {
  const response = await axios('http://localhost:3000/animals')
  const data = response.data;
  return data
}

export default getAnimals
