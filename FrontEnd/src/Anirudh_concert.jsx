import React from 'react'
import { Link } from 'react-router-dom'


function Anirudh_concert() {
  return (
  
      <>
      <h1>ANIRUDTH RAVICHANDER</h1>
      <br></br>
    <div className='hiphop_details'>
   
     <div className='image_containerhiphop'>
     <img  src="https://i.pinimg.com/736x/e9/22/b0/e922b0216d32439c5dd15418b5a0094e.jpg"  className="musicimageaadhi" alt="Music Event"/>
     </div>
     <div className='details_event1hip'>
      <h2 className='headhiphop'> HUKUM WORLD TOUR</h2>
      <div className='content_hiphop'>
      <h3>Main Artist: ANIRUDTH RAVICHANDER</h3>
      <br />
      <h3>Co-singers / Guest Performers:</h3> 
      <br /> 
      <h3>Jonita Gandhi</h3>
      <br />
      <h3>Adithya RK</h3>
      <br />
      <h3>Shaktisree Gopalan</h3>
      <br />
      <h3>Arunraja Kamaraj</h3>
      <br />
      <h3>MARG Swarnabhoomi (ECR), Chennai, Tamil Nadu</h3>
      <br />
      <h3>Date: 23rd December 2025</h3>
      <br />
      <h3>Time: 6:30 PM – 11:00 PM</h3>
      <br />
      <h3>Expected Crowd: 20,000+ people</h3>
      <br />
      <h3>Ratings: ⭐ 4.9 / 5 (based on past concerts)</h3>
    </div>
     <Link to="/conformationPageAnirudth" className='bookEventBtnAnirudth' >BOOK EVENT</Link>
     </div>
    </div>
    </>

  )
}
export default Anirudh_concert
