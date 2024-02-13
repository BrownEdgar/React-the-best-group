import { configureStore } from "@reduxjs/toolkit";
import PostsSlice from "../Feautures/Posts/PostsSlice";
 const store = configureStore({
    reducer:{
        posts:PostsSlice  
    }
 })
 export default store;