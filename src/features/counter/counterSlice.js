import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const myFloatAction = createAction(
  'myFloatAction'
)

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
  extraReducers: (builder) => {
    builder.addCase(myFloatAction, (state, action) => {
      return state + 1
    })
  }
})

export const { addCount, minusCount } = counterSlice.actions;
export default counterSlice.reducer;