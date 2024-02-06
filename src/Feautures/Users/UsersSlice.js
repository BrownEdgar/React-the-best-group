import { createSlice, nanoid } from "@reduxjs/toolkit";
const UsersSlice = createSlice({
    name:'Users',
    initialState:[],
    reducers:{
        addUsers(state,action){
            const user = {
                id:action.payload.id,
                name:action.payload.name,
            }
            state.push(user);
        },
        deleteUsers(state,action){
            return state.filter(user => user.id !== action.payload);
        }

    }
})
export default UsersSlice.reducer;
export const  {addUsers,deleteUsers} = UsersSlice.actions; 