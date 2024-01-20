import './App.scss'
import { useState, useEffect } from 'react'
import instance from "./axios";

export default function psts() {
  const [post, setPost] = useState({})
  useEffect(() => {
    instance('posts/1')
      .then(res => setPost(res.data))
  }, [])

  return (
    <div >
      <pre>
        {JSON.stringify(post)}
      </pre>

    </div>
  )
}
