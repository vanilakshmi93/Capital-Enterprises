import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    // Add logic to handle login
    console.log("Email:", email);
    console.log("Password:", password);
    navigate("/");
  };

  return (
    <div className="login-container">
    <div className="login-form">
    <h1 className="">Capital Enterprises</h1>
      <h2 className="">Welcome Back</h2>
      
      <form>
        <input type="email" placeholder="Enter your email" required />
        <input type="password" placeholder="Enter your password" required />
       
        <button type="submit">Login</button>
        <div className="options">
         
         <a href="/" className="forgot-password">
           Forgot Password?
         </a>
       </div>
      </form>
      
      <p>
        Don't have an account? <Link to="/register" className="toggle-link">Register</Link>
      </p>
    </div>
  </div>
  );
}

export default Login;
