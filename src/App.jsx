import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/Login";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import "./App.css";
import HomePageLayout from "./layout/HomePageLayout";

function App() {
    // Access authentication state from Redux store
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return (
        // Router wrapper enables client-side routing
        <Router>
            <div className="App">
                <Routes>
                    {/* Protected route group with shared layout */}
                    <Route element={isAuthenticated ? <HomePageLayout /> : <Navigate to="/login" />}>
                        {/* Home page route - protected by authentication */}
                        <Route index element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
                        {/* Profile page route - protected by authentication */}
                        <Route path="profile" element={isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />} />
                    </Route>

                    {/* Login route - redirects to home if already authenticated */}
                    <Route path="login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
                    {/* Catch-all route for unmatched paths */}
                    <Route path="*" element={isAuthenticated ? <Navigate to="/" /> : <Navigate to="/login" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
