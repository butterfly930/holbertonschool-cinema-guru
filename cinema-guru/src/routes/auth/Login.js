import React from 'react';
import './auth.css';

function Login({ username, password, setUsername, setPassword, setIsLoggedIn, setUserUsername }) {
    const handleSubmit = (event) => {
        event.preventDefault();

        // Simulate login request (replace this with your API call)
        if (username === "testuser" && password === "password") {
            setIsLoggedIn(true);
            setUserUsername(username);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>Sign in with your account</p>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username:"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password:"
                required
            />
            <button type="submit">Sign In</button>
        </form>
    );
}

export default Login;
