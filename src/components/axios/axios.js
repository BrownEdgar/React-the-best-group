import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_DB_URL,
    timeout: 1500
})

export default instance