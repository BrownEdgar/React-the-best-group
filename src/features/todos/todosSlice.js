import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getasynchTodos = createAsyncThunk('Todos/abcd', async () => {
  return axios('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.data)
})
const TodosSlce = createSlice({
  name: 'Todos',
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getasynchTodos.fulfilled, (state, action) => {
      state.data = action.payload
    })
  }

})
export default TodosSlce.reducer;
