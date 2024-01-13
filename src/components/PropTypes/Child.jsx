import axios from 'axios';
import { useEffect, useState } from 'react'


export default function Child({ count }) {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    if (count > 0 && count < 101) {
      axios(`https://jsonplaceholder.typicode.com/posts/${count}`)
        .then(res => setPosts(res.data))
    }

  }, [count])


  return (
    <div>
      <h1>Child component</h1>
      <pre>
        {JSON.stringify(posts, null, 1)}
      </pre>
    </div>
  )
}




