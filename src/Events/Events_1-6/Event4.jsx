import React from 'react'
import { Link } from 'react-router-dom'

function Event4() {
  return (
    <div>
      <>
        <h1>🎧 Saturday Night Party 🎧</h1>
        <br></br>
        <div className='hiphop_details'>
          <div className='image_containerhiphop'>
            <img 
              src="https://files.codegrape.com/199891.jpg" 
              alt="DJ Night Party"  className="musicimageaadhi"
            />
          </div>
          <div className='Birthday'>

          <h2 className='BirthdayTitle'>🎶 Live Show • Big DJ Night 🎶</h2>
          <h1 className='BirthdayTitle'>🔥 Special Guest: DJ Bravu 🔥</h1>
          <p className='BirthdayFont'>📅 Date: Saturday, 2nd April 2025</p>
          <p className='BirthdayFont'>⏰ Time: 8:00 PM – Late Night</p>
          <p className='BirthdayFont'>📍 Venue: Main Street 14, YourCity</p>
          <p className='BirthdayFont'>🎧 Music By: DJ Devil & DJ Imran</p>
          <p className='BirthdayFont'>🎟️ Entry: $22 • Free Parking • Free Drink</p>
          <p className='BirthdayFont'>👗 Dress Code: Party Wear</p>
          <p className='BirthdayFont'>✨ Let’s light up the night with music, dance & vibes ✨</p>
           </div>
          <br />
           <Link to="/conformationEvent4" className='bookEventBtnevent'>BOOK EVENT</Link>
        </div>
      </>
    </div>
  )
}

export default Event4
