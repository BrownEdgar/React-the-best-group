import './Post.scss'
import { useEffect, useState } from 'react'
import instance from '../axios/axios';
export default function Post() {
    const [posts, setPosts] = useState([]);

    const close = (id) =>{
        setPosts(prevPosts=>{
            return prevPosts.filter(post=> id !==post.id);
        })
    }

    useEffect(() => {
      instance('posts?_limit=6')
      .then(res => setPosts(res.data));
      () => {
        console.log('the end');
      }
  
    }, [])
  
  
  
   
   
    return posts.length > 0 
  ? (
        <div className="Post">
            {posts.map(post => {
                return (
                    <div className="Post__card" key={post.id}>
                        <span onClick={()=>close(post.id)} className='Post__close'>&#10006;</span>
                        <div className="Post__content">
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
