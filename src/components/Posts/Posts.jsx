import './Posts.scss'
import { useEffect, useState } from 'react'
import instance from '../axios/axios';

export default function Posts() {

  const [posts, setPosts] = useState([]);

  const deletePost = (id) => {
    setPosts(prevPosts => {
      return prevPosts.filter(post => post.id !== id)
    })
  }

  useEffect(() => {
    instance('posts?_limit=6')
      .then(res => setPosts(res.data))

    return () => {
      console.log('the end');
    }

  }, [])

  return posts.length > 0
    ? (
      <>
        <div className="Posts">
        {/* <h2>Our Posts</h2> */}
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
      </>

    )
    : (
      <div className="Posts__message">
        <h2>No Posts Available At The Moment</h2>
      </div>
    )
}