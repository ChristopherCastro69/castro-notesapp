// App.js

import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"; // Import the CSS file

function App() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="App">
      <h1>Welcome to Notes App</h1>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleRegisterClick}>Register</button>
    </div>
  );
}

export default App;
