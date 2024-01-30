import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.scss'
import { nanoid } from 'nanoid';

export default function App() {
  const [posts, setPosts] = useState([]);
  const getPosts = () => {
    axios('http://localhost:3000/posts')
      .then(res => setPosts(res.data))
  }
  useEffect(() => {
    getPosts()
  }, [])
  const deletePost = (postId) => {
    axios.delete(`http://localhost:3000/posts/${postId}`)
      .then(getPosts)
      .catch(console.log)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const { title } = e.target;
    const data = {
      id: nanoid(4),
      title: title.value,
      createAt: moment().format()
    }
    axios.post(`http://localhost:3000/posts`, data)
      .then(res => console.log(res))
      .then(getPosts)
      .catch(console.log)
  }
  return (
    <div>
      <h1>json server in react</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='enter new title' id='title' />
        {/* <select name="postsIds" id="postsIds" defaultValue={"1"}>
          {posts.map(post => {
            return <option value={post.id} key={post.id}>{post.id}</option>
          })}
        </select> */}
        <input type="submit" value="save post" />
      </form>
      <div className="Posts">
        {
          posts.map(elem => {
            return (
              <div key={elem.id}>
                <button className='delete' onClick={() => deletePost(elem.id)}>X</button>
                <h2>{elem.title}</h2>
                <p>
                  <em>
                    {moment("2024/01/29").fromNow()}

                  </em>
                </p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
