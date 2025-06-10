import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

// Import React-Bootstrap components
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Login attempt:", { username, password });
        dispatch(login({ username: username }));
        alert(`Logged in as: ${username}`);

        setUsername("");
        setPassword("");
    };

    return (
        // Container and Row/Col for centering and layout
        <div className="d-flex justify-content-center align-center">
            <Container>
                <Row className="w-100 mt-5">
                    <Col xs={12} className="border p-4">
                        <h2 className="text-center mb-4">Login</h2>
                        <Form onSubmit={handleSubmit}>
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

                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </Form.Group>

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
