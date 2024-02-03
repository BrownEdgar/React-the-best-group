import { useDispatch } from 'react-redux'
import s from './Posts.module.css'
import { deletePosts } from '../../features/posts/postsSlice'

export default function Posts({ posts }) {
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deletePosts(id))
  }

  return (
    <div className={s.Posts}>
      {
        posts.map(post => {
          return (
            <div className={s.Posts__item} key={post.id}>
              <span onClick={() => handleDelete(post.id)}>&#10006;</span>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          )
        })
      }
    </div>
  )
}
