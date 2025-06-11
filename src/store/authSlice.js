import { createSlice } from "@reduxjs/toolkit";

// Initial state for authentication
const initialState = {
    user: null,
    isAuthenticated: false,
};

// Create a Redux slice for authentication state management
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // Action to handle user login
        login: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        // Action to handle user logout
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
        // Action to handle user signup
        signup: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
    },
});

// Export the action creators and reducer
export const { login, logout, signup } = authSlice.actions;
export default authSlice.reducer;
