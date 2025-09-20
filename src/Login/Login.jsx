import React, { useState } from 'react'
import { FaFacebook, FaGoogle, FaEye, FaEyeSlash, FaUser, FaLock } from "react-icons/fa6";
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();   
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    
    try {
      const res = await axios.post("http://localhost:3000/login", {
        username,
        password,
      });
      setMessage(res.data.message);

      if (res.data.message === "Login successful") {
        navigate("/event_home_page"); 
      }
    } catch (err) {
      setMessage("Server error, try again later");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <div className="logo-container">
            <img src='logo2.png' className='login-logo' alt="PLANIT Logo"/>
          </div>
          <h1 className="login-title">Welcome Back!</h1>
          <p className="login-subtitle">Sign in to continue your event journey</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label className="form-label">
              <FaUser className="label-icon" />
              Username
            </label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              <FaLock className="label-icon" />
              Password
            </label>
            <div className="password-input-container">
              <input 
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                placeholder="Enter your password"
                required
              />
              <button 
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            className={`btn btn-primary login-submit ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        {message && (
          <div className={`message ${message.includes('successful') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}

        <div className="divider">
          <span>OR</span>
        </div>

        <div className="social-login">
          <p className="social-text">Continue with</p>
          <div className="social-buttons">
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="social-btn google">
              <FaGoogle />
              <span>Google</span>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-btn facebook">
              <FaFacebook />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        <div className="login-footer">
          <p>Don't have an account? <Link to="/Register" className="link">Sign up here</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login;
