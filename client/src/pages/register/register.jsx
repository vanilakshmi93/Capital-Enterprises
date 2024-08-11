import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-form">
        <h1>Create an Account</h1>
       
        <form>
          <input type="text" placeholder="Enter your name" required />
          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Enter your password" required />
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <Link to="/login" className="toggle-link">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
