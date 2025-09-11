import React from 'react'
import { Link } from 'react-router-dom'

function Coldplay_concert() {
  return (
    <div>
       <>
            <h1>COLD PLAY LIVE</h1>
            <br></br>
          <div className='hiphop_details'>
         
           <div className='image_containerhiphop'>
           <img  src="https://i.pinimg.com/1200x/58/18/a1/5818a1379893a2ef60ae220619462a46.jpg"  className="musicimageaadhi" alt="Music Event"/>
           </div>
           <div className='details_event1hip'>
            <h2 className='headhiphop'> MUSIC OF THE SPHERES WORLD TOUR</h2>
            <div className='content_hiphop'>
            <h3>Main Artist: COLDPLAY BAND</h3>
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
            <h3>Venue: Mumbai</h3>
            <br />
            <h3>Date: 27th December 2025</h3>
            <br />
            <h3>Time: 6:30 PM – 11:00 PM</h3>
            <br />
            <h3>Expected Crowd: 3,00000+ people</h3>
            <br />
            <h3>Ratings: ⭐ 4.8 / 5 (based on past concerts)</h3>
          </div>
           <Link to="/conformationPageColdPlay" className='bookEventBtnColdPlay'>BOOK EVENT</Link>
           </div>
          </div>
          </>
    </div>
  )
}

export default Coldplay_concert
