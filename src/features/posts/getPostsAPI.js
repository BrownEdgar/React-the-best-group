import axios from "axios";

async function getPosts() {
  const res = await axios('https://jsonplaceholder.typicode.com/posts')
  return res.data
}

export default getPosts