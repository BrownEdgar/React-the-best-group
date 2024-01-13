import React, { useState, useEffect } from 'react'
import './App.scss';

export default function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    console.log("useEffect run")
  })

  useEffect(() => {
    console.log('fetch data')
    const fetchData = () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }
    fetchData();
    () => {
      console.log('the end')
    }

  }, [])




  return (
    <div>
      <h1>Fetch data in react</h1>

      <div className="Posts">
        {
          posts.map(post => {
            return (
              <div className="Posts__item" key={post.id}>

                <span>&#10006;</span>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
