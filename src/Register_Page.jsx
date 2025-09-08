import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/register", { username, password });
      setMessage(res.data.message);

      // backend return "User registered successfully"
      if (res.data.message === "User registered successfully") {
        navigate("/Login"); // redirect to login page
      }
    } catch (err) {
      setMessage("Server error, try again later");
    }
  };

  return (
    <div className="register_page">
      <h3>REGISTER HERE!!</h3>
      <form onSubmit={handleRegister}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        /><br />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        /><br />
        <button type="submit">SUBMIT</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Register;
