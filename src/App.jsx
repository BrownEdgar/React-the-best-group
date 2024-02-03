import { getAllPosts, getPostsAsync, getPostsTitles } from './features/posts/postsSlice';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import Posts from './components/Posts/Posts';
import { getasynchTodos } from './features/todos/todosSlice';

export default function App() {
  const counter = useSelector((state) => state.counter);
  const posts = useSelector(getAllPosts)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getasynchTodos())
  }, [])

  return (
    <div className='App'>

      <Posts posts={posts} />

    </div>
  )
}


