import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getPostsAsync = createAsyncThunk("Posts/async", async () => {
    const res = await axios('https://jsonplaceholder.typicode.com/posts')
    return res.data;
})
const initialState = {
    data: [],
    loading: false,
    error: null
}
const PostSlice = createSlice({
    name: 'Posts',
    initialState: initialState,
    reducers: {

    },
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
    selectors:{
        getAllPosts: (state) => state.data
    }
})
export const {getAllPosts} = PostSlice.selectors;
export default PostSlice.reducer;