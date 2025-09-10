import React, { useState } from 'react'
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();   // ✅ useNavigate hook
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/login", {
        username,
        password,
      });
      setMessage(res.data.message);

      if (res.data.message === "Login successful") {
        navigate("/event_home_page"); // ✅ smooth navigation, no reload
      }
    } catch (err) {
      setMessage("Server error, try again later");
    }
  };

  return (
    <div className='login_page'>
      <h3 className='login_text'>LOGIN</h3>
      <div className='forms'>
        <form onSubmit={handleSubmit}>
          <label>USERNAME :</label>
          <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /><br /><br />

          <label>PASSWORD :</label>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br />

          <button type="submit" className='login_submit'>SUBMIT</button>
        </form>
      </div>

      {message && <p style={{color:"red"}} className='Error_Text'>{message}</p>}

      <p className='or_text'>OR</p>
      <p><b>SIGN IT WITH</b></p>
      <div className="icons">
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <FaGoogle style={{color:"black"}}/>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook style={{color:"black"}}/>
        </a>
      </div>
    </div>
  )
}

export default Login;
