import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'  

function Main_Page() {
  return ( 
    <>
      <div className='loginform'>
        <div className='all_login_elements'>
          <img src='logo2.png' className='logo'/>
          <h4 className='greeting'>WELCOME TO PLANIT!</h4>

         
          <Link to="/Login" className='login_button'>LOGIN</Link> 

          <p className='or'>OR</p>
          <p className='register_button'>REGISTER</p>
        </div>
      </div>
    </>
  )
}

export default Main_Page
