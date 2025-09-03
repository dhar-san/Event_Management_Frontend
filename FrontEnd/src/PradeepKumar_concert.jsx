import React from 'react'
import { Link } from 'react-router-dom'

function PradeepKumar_concert() {
  return (
    <div>
       <>
      <h1>PRADEEPKUMAR'S LIVE</h1>
      <br></br>
    <div className='hiphop_details'>
   
     <div className='image_containerhiphop'>
     <img  src="https://i.pinimg.com/1200x/b4/1e/00/b41e008f477c1eb12117197eabce0168.jpg"  className="musicimageaadhi" alt="Music Event"/>
     </div>
     <div className='details_event1hip'>
      <h2 className='headhiphop'> KAADHALUDAN – LIVE IN CONCERT</h2>
      <div className='content_hiphop'>
      <h3>Main Artist: PRADEEP KUMAR</h3>
      <br />
      <h3>Co-singers / Guest Performers:</h3> 
      <br /> 
      <h3>Sid Sriram</h3>
      <br />
      <h3>Karthik</h3>
      <br />
      <h3>Shweta Mohan</h3>
      <br />
      <h3>pooja</h3>
      <br />
      <h3>Venue: Nehru Indoor Stadium, Chennai, Tamil Nadu</h3>
      <br />
      <h3>Date: 20th December 2025</h3>
      <br />
      <h3>Time: 6:30 PM – 11:00 PM</h3>
      <br />
      <h3>Expected Crowd: 12,000+ people</h3>
      <br />
      <h3>Ratings: ⭐ 4.8 / 5 (based on past concerts)</h3>
    </div>
     <Link to="/conformationPagePradeepkumar" className='bookEventBtnPradeepKumar'>BOOK EVENT</Link>
     </div>
    </div>
    </>

      
    </div>
   
  )
}

export default PradeepKumar_concert
