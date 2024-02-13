import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
 export const showTodosAsync = createAsyncThunk('Todos/getAsync', async () => {
    const res = await axios('https://jsonplaceholder.typicode.com/todos');
    return res.data;
});
const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(showTodosAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(showTodosAsync.pending, (state, action) => {
                state.loading = true;

            })
            .addCase(showTodosAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
    },
    selectors:{
        showAllTodos:(state) => state.data
    }
})
export default todosSlice.reducer;
export  const {showAllTodos} = todosSlice.selectors;