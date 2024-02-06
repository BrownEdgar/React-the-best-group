import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    addUser(state, action) {
      const user = {
        id: action.payload.id,
        name: action.payload.name
      }
      state.push(user);
    },
    deleteUser(state, action) {
      return state.filter(user => user.id !== action.payload)
    }
  }
})

export const { addUser, deleteUser } = usersSlice.actions
export default usersSlice.reducer