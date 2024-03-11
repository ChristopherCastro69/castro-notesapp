import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"; // Import the CSS file for styling

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate(); // Hook to access navigation function

  const handleLogin = () => {
    // Retrieve user data from local storage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.firstname === username && user.lastname === password) {
        setLoginStatus("Login successful!");

        // Redirect to DisplayNotes component after successful login
        navigate("/displaynotes", { state: { userId: user.id } });
      } else {
        setLoginStatus("Invalid credentials. Please try again.");
      }
    } else {
      setLoginStatus("User not found. Please register first.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            required
          />
        </label>
        <div className="login-buttons">
          <button type="button" onClick={handleLogin} className="login-button">
            Login
          </button>
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="register-button"
          >
            Register
          </button>
        </div>
      </form>
      {loginStatus && <p className="login-status">{loginStatus}</p>}
    </div>
  );
}

export default Login;
