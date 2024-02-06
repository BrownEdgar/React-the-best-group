import { createSlice } from "@reduxjs/toolkit";
import { myFloatAction } from '../counter/counterSlice';

const usersSlice = createSlice({
  name: 'users',
  initialState: [{
    id: "superAdmin123",
    name: 'Samo',
    createdAt: new Date().getTime()
  }],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    deleteUser(state, action) {
      return state.filter(user => user.id !== action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(myFloatAction, (state, action) => {
      return []
    })
  }
})

export const { addUser, deleteUser } = usersSlice.actions
export default usersSlice.reducer