import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/Login";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage"; // We will create this next
import "./App.css"; // Your main app CSS
import HomePageLayout from "./layout/HomePageLayout";

function App() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route element={isAuthenticated ? <HomePageLayout /> : <Navigate to="/login" />}>
                        <Route index element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
                        <Route path="profile" element={isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />} />
                    </Route>

                    <Route path="login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
                    <Route path="*" element={isAuthenticated ? <Navigate to="/" /> : <Navigate to="/login" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
