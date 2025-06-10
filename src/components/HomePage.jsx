import React from "react";
import { Container } from "react-bootstrap";

function HomePage() {
    return (
        <>
            <Container className="mt-5 text-center">
                <h1>Hello World!</h1>
                <p>Welcome to your home page.</p>
                <p>This is where you'd typically see a dashboard or main content.</p>
            </Container>
        </>
    );
}

export default HomePage;
