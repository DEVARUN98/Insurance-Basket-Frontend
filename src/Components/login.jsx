import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import iblogo from '../iblogo.png';

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy validation for example
    setError(true);
  };

  return (
    <div className="login-page">
      {/* --- TOPBAR --- */}
      {/* <div className="topbar">
        <div className="logo-section">
          <img src={iblogo} alt="iblogo" className="logo" />
          
        </div>
      </div> */}

      {/* --- LOGIN CONTENT --- */}
      <div className="login-container">
        <div className="login-box">
          {error && <p className="error-msg">*Invalid credentials</p>}

          <form onSubmit={handleLogin}>
            <input type="text" placeholder="Username" className="login-input" />
            <input type="password" placeholder="Password" className="login-input" />

            <button
              type="submit"
              className="login-btn"
              onClick={() => {
                navigate("/admin");
              }}
            >
              Log in
            </button>
          </form>

          <p
            className="forgot-password"
            onClick={() => {
              navigate("/forgot");
            }}
          >
            Forgotten password?
          </p>

          <p className="signup-text">
            Don't have an account?{" "}
            <span
              className="signup-link"
              onClick={() => {
                navigate("/register");
              }}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
