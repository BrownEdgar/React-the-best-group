import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    addCount(state, action) {
      console.log(state)
      // return state + action.payload
    }
  }
})


export const { addCount } = counterSlice.actions;
export default counterSlice.reducer