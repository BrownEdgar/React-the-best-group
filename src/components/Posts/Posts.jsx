import './Posts.scss'
import { useEffect, useState } from 'react'

export default function Posts() {

  const [posts, setPosts] = useState([]);

  const deletePost = (id) => {
    setPosts(prevPosts => {
      return prevPosts.filter(post => post.id !== id)
    })
  }

  useEffect(() => {
    const fetchData = () => {
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
        .then(res => res.json())
        .then(data => setPosts(data))
    }

    fetchData();
    console.log(posts);
    return () => {
      console.log('the end');
    }

  }, [])

  return posts.length > 0 
  ? (
    <div className="Posts">
      {posts.map(post => {
        return (
          <div className={"Posts__card"} key={post.id}>
            <span onClick={() => deletePost(post.id)}>&#10006;</span>
            <div className="Posts__content">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
  : (
    <div className="Posts__message">
      <h2>No Posts Available At The Moment</h2>
    </div>
  )
}