import React from 'react'
import { Link } from 'react-router-dom'


function Billie_concert() {
  return (
    <div>
       <>
            <h1>BILLIE EILISH</h1>
            <br></br>
          <div className='hiphop_details'>
         
           <div className='image_containerhiphop'>
           <img  src="https://i.pinimg.com/736x/61/6b/a3/616ba36c2d60d526bc7303a9587d9043.jpg"  className="musicimageaadhi" alt="Music Event"/>
           </div>
           <div className='details_event1hip'>
            <h2 className='headhiphop'> HIT ME HARD AND SOFT</h2>
            <div className='content_hiphop'>
            <h3>Main Artist: BILLIE ELISH</h3>
            <br />
            <h3>Co-singers / Guest Performers:</h3> 
            <br /> 
            <h3>lil nas x</h3>
            <br />
            <h3>Bruno Mars</h3>
            <br />
            <h3>Justin Bieber</h3>
            <br />
            <h3>Ed Sheeren</h3>
            <br />
            <h3>Venue: Los Angels</h3>
            <br />
            <h3>Date: 20th December 2025</h3>
            <br />
            <h3>Time: 6:30 PM – 11:00 PM</h3>
            <br />
            <h3>Expected Crowd: 5,00000+ people</h3>
            <br />
            <h3>Ratings: ⭐ 4.8 / 5 (based on past concerts)</h3>
          </div>
           <Link to="/conformationPageBillie" className='bookEventBtnBillie'>BOOK EVENT</Link>
           </div>
          </div>
          </>
      
    </div>
  )
}

export default Billie_concert
