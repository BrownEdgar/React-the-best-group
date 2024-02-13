import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLimitedPosts, getOptions, getPostsAsync, getTotal } from '../../features/posts/postsSlice';
import './Posts.scss'

export default function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector(getLimitedPosts);
  const total = useSelector(getTotal)
  const { page, perPage } = useSelector(getOptions)

  useEffect(() => {
    dispatch(getPostsAsync());
  }, [])

  return (
    <div className='Posts'>
      <h1>Latest Posts</h1>
      <h3>Page {page} / {Math.ceil(total / perPage)}</h3>
      <div className="Posts__content">
        {
          posts.map(post => {
            return (
              <div className='Posts__card' key={post.id}>
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