import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

export default function HomePageLayout() {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        alert("Logged out successfully!");
    };

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        React-Redux
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">
                                Homepage
                            </Nav.Link>
                            <Nav.Link as={Link} to="/profile">
                                Profile Page
                            </Nav.Link>
                        </Nav>
                        <Nav>
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
            <Outlet />
        </>
    );
}
