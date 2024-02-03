import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice'
import postsSlice from '../features/posts/postsSlice'
import todosSlice from '../features/todos/todosSlice'

const store = configureStore({
  reducer: {
    counter: counterSlice,
    posts: postsSlice,
    todos: todosSlice
  }
})

export default store