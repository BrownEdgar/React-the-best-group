import React, { useState, useEffect } from 'react'
import './App.scss';

export default function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
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


  // const deleteItem = (elem) => {
  //   const newPosts = arr.toSpliced(post.indexOf(`${elem}`), 1)
  //   setPosts(newPosts)
  // }
  const deleteItem = (elem) => {
    const newArr = arr.toSpliced(posts.indexOf(elem), 1)
    setArr(newArr)
  }


  return (
    <div>
      <h1>Fetch data in react</h1>

      <div className="Posts">
        {
          posts.map(post => {
            return (
              <div className="Posts__item" key={post.id}>

                <button className='Posts__delBtn' onClick={deleteItem}><span >&#10006;</span></button>
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
