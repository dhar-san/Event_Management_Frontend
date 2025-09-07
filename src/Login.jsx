import React from 'react'
import { FaFacebook, FaGoogle, FaXTwitter } from "react-icons/fa6";
import {BrowserRouter,Routes,Route,Link}from 'react-router-dom';



function Login() {
  return (
    <div className='login_page'>
      <h3 className='login_text'>LOGIN</h3>
      <div className='forms'>
          <form>
            <label>USERNAME :</label>
            <input type="text"/><br></br><br></br>
            <label>PASSWORD :</label>
            <input type="password"/><br></br>
            <Link to="/event_home_page" className='login_submit'>SUBMIT</Link>
           {/* <p className='submit_in_login'>SUBMIT</p> */}
      </form>
      </div>
      <p className='or_text'>OR</p>
      <p ><b>SIGN IT WITH</b></p>
      <div  className="icons">
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

export default Login
