import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

// Shared layout component for authenticated pages
export default function HomePageLayout() {
    // Access user data from Redux store
    const user = useSelector((state) => state.auth.user);
    // Get dispatch function to trigger Redux actions
    const dispatch = useDispatch();

    // Handler for user logout
    const handleLogout = () => {
        dispatch(logout());
        alert("Logged out successfully!");
    };

    return (
        <>
            {/* Navigation bar shared across authenticated routes */}
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    {/* Use Link component for client-side navigation */}
                    <Navbar.Brand as={Link} to="/">
                        React-Redux
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* Navigation links using React Router */}
                            <Nav.Link as={Link} to="/">
                                Homepage
                            </Nav.Link>
                            <Nav.Link as={Link} to="/profile">
                                Profile Page
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            {/* Display username if user is logged in */}
                            {user && (
                                <Navbar.Text className="me-3">
                                    Signed in as: <strong className="text-white">{user.username}</strong>
                                </Navbar.Text>
                            )}

                            <Button variant="outline-light" onClick={handleLogout}>
                                Logout
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* Outlet renders the child route components */}
            <Outlet />
        </>
    );
}
