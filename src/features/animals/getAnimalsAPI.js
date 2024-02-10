import axios from "axios";

async function getAnimals() {
  const res = await axios('http://localhost:3000/animals')
  return res.data
}

export default getAnimals