import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

// Configure and create the Redux store
export const store = configureStore({
    // Combine reducers - currently only auth reducer is used
    reducer: {
        auth: authReducer, // Authentication state slice
    },
});
