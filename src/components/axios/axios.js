import axios from 'axios'
const instance = axios.create({
  baseURL: import.meta.env.VITE_DUMMY_DB_URL,
})
export default instance