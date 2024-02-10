import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getPosts from "./getPostsAPI";


export const getPostsAsync = createAsyncThunk('Posts/getAsync', getPosts)

const initialState = {
  data: [],
  loading: false,
  error: null
}

const PostSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getPostsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getPostsAsync.pending, (state) => {
        state.loading = true;
      })
  },
  selectors: {
    getAllPosts: (state) => state.data
  }
})

export const { getAllPosts } = PostSlice.selectors;
export default PostSlice.reducer;