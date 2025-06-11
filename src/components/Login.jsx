import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

// Import React-Bootstrap components
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

function Login() {
    // Local state for form inputs
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    // Get dispatch function to trigger Redux actions
    const dispatch = useDispatch();

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Log attempt and dispatch login action to Redux
        console.log("Login attempt:", { username, password });
        dispatch(login({ username: username }));
        alert(`Logged in as: ${username}`);

        // Reset form fields after submission
        setUsername("");
        setPassword("");
    };

    return (
        // Center the login form on the page
        <div className="d-flex justify-content-center align-center">
            <Container>
                <Row className="w-100 mt-5">
                    <Col xs={12} className="border p-4">
                        <h2 className="text-center mb-4">Login</h2>
                        {/* Login form with controlled components */}
                        <Form onSubmit={handleSubmit}>
                            {/* Username input field */}
                            <Form.Group className="mb-3" controlId="formBasicUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            {/* Password input field */}
                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="Password" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required 
                                />
                            </Form.Group>

                            {/* Submit button */}
                            <Button variant="primary" type="submit" className="w-100">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;
