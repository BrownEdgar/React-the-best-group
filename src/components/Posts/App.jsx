import { useState, useEffect } from 'react';
import instance from './axios';

export default function Example() {
  const [post, setPost] = useState({});

  useEffect(() => {
    instance('posts?_limit=10')
      .then(res => setPost(res.data))
  }, [])

  return (
    <div>
      <pre>
        {JSON.stringify(post)}
      </pre>
    </div>
  )
}
