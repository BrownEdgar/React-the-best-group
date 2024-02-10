import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import postsSlice from "../features/posts/postsSlice";
import usersSlice from "../features/users/usersSlice";
import animalsSlice from "../features/animals/animalsSlice";
import myMiddleWariesArray from '../middlewaries';

const store = configureStore({
  reducer: {
    counter: counterSlice,
    posts: postsSlice,
    users: usersSlice,
    animals: animalsSlice
  },
  // middleware: myMiddleWariesArray
})

export default store