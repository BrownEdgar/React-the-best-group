import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

createAsyncThunk

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    addCount(state, action) {
      return state + action.payload
    },
    minusCount(state, action) {
      return state - action.payload;
    }
  },
})

export const {addCount, minusCount} = counterSlice.actions;
export default counterSlice.reducer;