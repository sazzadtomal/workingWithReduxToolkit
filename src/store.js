import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import postReducer from "./features/posts/postSlice";
import userReducer from "./features/users/usersSlice";
import { apiSlice } from "./features/api/apiSlice";

export const store=configureStore({
    reducer:{
       [apiSlice.reducerPath]:apiSlice.reducer,
       users:userReducer
    },
    middleware:getDefaultMiddleware=>(
        getDefaultMiddleware().concat(apiSlice.middleware))
    
})