import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function App() {
  const [page, setPage] = useState(1)
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/photos', {
      params: {
        _limit: 20,
        _start: (page - 1) * 20
      }
    })
      .then(res => setPhotos([...photos, ...res.data]))
  }, [page])


  return (
    <div>
      <pre>
        {JSON.stringify(photos, null, 1)}
      </pre>
      <button onClick={() => setPage(page + 1)}>load more</button>
    </div>
  )
}
