import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import HomePage from "./HomePage";

function ProfilePage() {
    const user = useSelector((state) => state.auth.user);

    if (!user) {
        return <p>Please log in to view your profile.</p>;
    }

    return (
        <>
            <Container className="mt-5 text-center">
                <h2>Profile Page</h2>
                <p>Welcome to your profile, <b>{user.username}</b>!</p>
                <p>This is where your user-specific details would be displayed.</p>
            </Container>
        </>
    );
}

export default ProfilePage;
