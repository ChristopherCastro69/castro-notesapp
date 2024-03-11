// Register.js

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstname", firstName);
      formData.append("lastname", lastName);

      const response = await axios.post(
        "http://hyeumine.com/newuser.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setUser(response.data);
      setRegisterStatus("User created successfully!");
      localStorage.setItem("user", JSON.stringify(response.data));
      setFirstName("");
      setLastName("");
    } catch (error) {
      console.error("Error registering user:", error);
      setRegisterStatus("Registration failed!");
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="register-input"
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="register-input"
          />
        </label>
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
      {registerStatus && <p className="register-status">{registerStatus}</p>}
      {user && (
        <div className="user-details">
          <h3>User Details:</h3>
          <p>First Name: {user.firstname}</p>
          <p>Last Name: {user.lastname}</p>
        </div>
      )}
      <button onClick={() => navigate("/login")} className="back-button">
        Back to Login
      </button>
    </div>
  );
}

export default Register;
