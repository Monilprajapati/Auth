import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // Import the CSS

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Extracting username from email
    const user = {
      email,
      password,
    };

    onLogin(user);
    navigate("/home");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 data-testid="heading">Login</h2>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
