import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaLock, FaEye, FaEyeSlash, FaEnvelope, FaPhone, FaCalendarAlt } from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
    dateOfBirth: ""
  });
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setMessage("Password must be at least 6 characters long");
      setIsLoading(false);
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/register", { 
        username: formData.username, 
        password: formData.password 
      });
      setMessage(res.data.message);

      if (res.data.message === "User registered successfully") {
        navigate("/Login");
      }
    } catch (err) {
      setMessage("Server error, try again later");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-header">
          <div className="logo-container">
            <img src='logo2.png' className='register-logo' alt="PLANIT Logo"/>
          </div>
          <h1 className="register-title">Join PLANIT!</h1>
          <p className="register-subtitle">Create your account and start discovering amazing events</p>
        </div>

        <form onSubmit={handleRegister} className="register-form">
          <div className="form-group">
            <label className="form-label">
              <FaUser className="label-icon" />
              Username
            </label>
            <input 
              type="text" 
              name="username"
              value={formData.username} 
              onChange={handleInputChange}
              className="form-input"
              placeholder="Choose a username"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              <FaEnvelope className="label-icon" />
              Email
            </label>
            <input 
              type="email" 
              name="email"
              value={formData.email} 
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              <FaPhone className="label-icon" />
              Phone Number
            </label>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone} 
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              <FaCalendarAlt className="label-icon" />
              Date of Birth
            </label>
            <input 
              type="date" 
              name="dateOfBirth"
              value={formData.dateOfBirth} 
              onChange={handleInputChange}
              className="form-input"
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
                name="password"
                value={formData.password} 
                onChange={handleInputChange}
                className="form-input"
                placeholder="Create a password"
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

          <div className="form-group">
            <label className="form-label">
              <FaLock className="label-icon" />
              Confirm Password
            </label>
            <div className="password-input-container">
              <input 
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword} 
                onChange={handleInputChange}
                className="form-input"
                placeholder="Confirm your password"
                required
              />
              <button 
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            className={`btn btn-primary register-submit ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        {message && (
          <div className={`message ${message.includes('successfully') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}

        <div className="register-footer">
          <p>Already have an account? <Link to="/Login" className="link">Sign in here</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Register;
