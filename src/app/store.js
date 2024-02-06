import { configureStore } from "@reduxjs/toolkit";
import PostsSlice from "../Feautures/Posts/PostsSlice";
import UsersSlice from "../Feautures/Users/UsersSlice";
 const store = configureStore({
    reducer:{
        posts:PostsSlice,
        users:UsersSlice
    }
 })
 export default store;