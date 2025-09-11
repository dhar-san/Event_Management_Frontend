import React from 'react'
import { Link } from 'react-router-dom'
function Hiphop_concert() {
  return (
    <>
      <h1>HIPHOP AADHI CONCERT</h1>
      <br></br>
    <div className='hiphop_details'>
   
     <div className='image_containerhiphop'>
     <img  src="https://imgs.search.brave.com/CXrl6oYUVJWSfXkaI1_WLkAHfwVaRbbAoaAZfVnqRKA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI4L2Q5/L2Q3LzI4ZDlkN2Yx/NTI0ZjMzNTIxNjI4/MTNjMWQwODdjMGQx/LmpwZw"  className="musicimageaadhi" alt="Music Event"/>
     </div>
     <div className='details_event1hip'>
      <h2 className='headhiphop'> RETURN OF DRAGON 2025</h2>
      <div className='content_hiphop'>
      <h3>Main Artist: Hip-Hop Tamizha Aadhi</h3>
      <br />
      <h3>Co-singers / Guest Performers:</h3> 
      <br /> 
      <h3>Benny Dayal</h3>
      <br />
      <h3>Arunraja Kamaraj</h3>
      <br />
      <h3>Kharesma Ravichandran</h3>
      <br />
      <h3>Santhosh Narayanan</h3>
      <br />
      <h3>Venue: YMCA Grounds, Chennai, Tamil Nadu</h3>
      <br />
      <h3>Date: 22nd December 2025</h3>
      <br />
      <h3>Time: 6:30 PM – 11:00 PM</h3>
      <br />
      <h3>Expected Crowd: 15,000+ people</h3>
      <br />
      <h3>Ratings: ⭐ 4.8 / 5 (based on past concerts)</h3>
    </div>
     <Link to="/conformationPageHiphop" className='bookEventBtn' >BOOK EVENT</Link>
    
     </div>
     




      
    </div>
    </>
  )
}

export default Hiphop_concert
