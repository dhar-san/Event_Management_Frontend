import React from 'react'
import { Link } from 'react-router-dom'


function Sakthisree_concert() {
  return (
    <div>
       <>
      <h1>ANIRUDTH RAVICHANDER</h1>
      <br></br>
    <div className='hiphop_details'>
   
     <div className='image_containerhiphop'>
     <img  src="https://i.pinimg.com/1200x/8e/ce/b8/8eceb83c1f166b02a8bbfd9baa79f56e.jpg"  className="musicimageaadhi" alt="Music Event"/>
     </div>
     <div className='details_event1hip'>
      <h2 className='headhiphop'> SAKTHISREE GOPALAN – LIVE IN CONCERT</h2>
      <div className='content_hiphop'>
      <h3>Main Artist: SAKTHISREE GOPALAN</h3>
      <br />
      <h3>Co-singers / Guest Performers:</h3> 
      <br /> 
      <h3>Sid Sriram</h3>
      <br />
      <h3>Karthik</h3>
      <br />
      <h3>Haricharan</h3>
      <br />
      <h3>Chinmayi Sripada</h3>
      <br />
      <h3>Music Academy Open Grounds, Chennai, Tamil Nadu</h3>
      <br />
      <h3>Date: 15th November 2025</h3>
      <br />
      <h3>Time: 6:30 PM – 11:00 PM</h3>
      <br />
      <h3>Expected Crowd: 10,000+ people</h3>
      <br />
      <h3>Ratings: ⭐ 4.7 / 5 (based on past concerts)</h3>
    </div>
     <Link to="/conformationPageSakthisree" className='bookEventBtnSakthisree'>BOOK EVENT</Link>
     </div>
    </div>
    </>

      
    </div>
  )
}

export default Sakthisree_concert
