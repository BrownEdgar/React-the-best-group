import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getPosts from "./getPostsAPI";

export const getPostsAsync = createAsyncThunk('Posts/getAsync', getPosts)

const initialState = {
  data: [],
  page: 1,
  perPage: 12,
  loading: false,
  error: null,
  total: 0
}

const PostSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    updatePage: (state, action) => {
      state.page = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.total = action.payload.length
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
    getAllPosts: (state) => state.data,
    getLimitedPosts: ({ data, page, perPage }) => {
      const x = perPage * page;
      return data.slice(x - perPage, x)
    },
    getTotal: ({ total }) => total,
    getOptions: ({ page, perPage }) => ({ page, perPage })
  }
})

export const { updatePage } = PostSlice.actions
export const { getAllPosts, getLimitedPosts, getTotal, getOptions } = PostSlice.selectors;
export default PostSlice.reducer;