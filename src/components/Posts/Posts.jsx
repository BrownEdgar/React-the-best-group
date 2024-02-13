import React, { useEffect } from 'react'
import './Posts.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getLimitedPosts, getPostsAsync } from '../../Feautures/Posts/PostsSlice';

export default function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector(getLimitedPosts);
    useEffect(() => {
    dispatch(getPostsAsync());
    }, [])
    
  return (
    <div className='Posts'>
        {
            posts.map(post =>{
                return (
                    <div className='Posts__box' key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                )
            })
            
        }

    </div>
  )
}
