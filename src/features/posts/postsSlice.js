import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import getPosts from './PostssAPI'

const initialPostsValue = {
  data: [],
  loading: false,
  error: null
}

export const getPostsAsync = createAsyncThunk('posts/abcd', getPosts)

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialPostsValue,
  reducers: {
    deletePosts(state, action) {
      state.data = state.data.filter(post => post.id !== action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPostsAsync.fulfilled, (state, { payload }) => {
        return {
          error: null,
          loading: false,
          data: payload,
        }
      })
      .addCase(getPostsAsync.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      })
  },
  selectors: {
    getAllPosts: (state) => state.data,
    getPostsTitles: (state) => state.data.map(post => ({ title: post.title }))
  }
})

export default postsSlice.reducer;
export const { getAllPosts, getPostsTitles } = postsSlice.selectors
export const { deletePosts } = postsSlice.actions