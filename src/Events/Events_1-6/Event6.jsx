import React from 'react'
import { Link } from 'react-router-dom'

function Event6() {
  return (
    <div>
      <>
        <h1>🤘 Rock Night Party 🤘</h1>
        <br></br>
        <div className='hiphop_details'>
          <div className='image_containerhiphop'>
            <img 
              src="https://www.shutterstock.com/shutterstock/photos/676250194/display_1500/stock-vector-rock-night-party-poster-flyer-vintage-styled-vector-illustration-676250194.jpg" 
              alt="Rock Night Party"  
              className="musicimageaadhi"
            />
          </div>
          <div className='Birthday'>

          <h2 className='BirthdayTitle'>🎸 Alternative • Garage • Heavy Metal 🎸</h2>
          <h1 className='BirthdayTitle'>🔥 Rock till you drop 🔥</h1>
          <p className='BirthdayFont'>📅 Date: 15th (Saturday)</p>
          <p className='BirthdayFont'>⏰ Time: 9:00 AM</p>
          <p className='BirthdayFont'>📍 Venue: Main Stage Arena, YourCity</p>
          <p className='BirthdayFont'>🎶 Featuring: Post-Punk • Hard Rock • Metal Bands</p>
          <p className='BirthdayFont'>🎟️ Entry: $5 Admission • Tickets at www.somesite.com</p>
          <p className='BirthdayFont'>👗 Dress Code: Rock Vibes</p>
          <p className='BirthdayFont'>⚡ Get ready for loud music, crazy energy & headbanging ⚡</p>
           </div>
          <br />
           <Link to="/conformationEvent4" className='bookEventBtnevent'>BOOK EVENT</Link>
        </div>
      </>
    </div>
  )
}

export default Event6
