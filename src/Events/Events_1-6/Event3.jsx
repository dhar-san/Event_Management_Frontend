import React from 'react'
import { Link } from 'react-router-dom'

function Event3() {
  return (
    <div>
      <>
        <h1>🎃 Happy Halloween 🎃</h1>
        <br></br>
        <div className='hiphop_details'>
          <div className='image_containerhiphop'>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyr-2Pg39wyhTUJk-LXJFCVGocmRWhjn9_tA&s" 
              alt="Halloween Party"  className="musicimageaadhi"
            />
          </div>
          <div className='Birthday'>

          <h2 className='BirthdayTitle'>👻 Spooky Night Awaits You 👻</h2>
          <h1 className='halloweenTitle'>🕷️ Big Halloween Party 🕷️</h1>
          <div className='Halloween'>
          <p className='BirthdayFont'>📅 Date: Friday, 31st October 2025</p>
          <p className='BirthdayFont'>⏰ Time: 7:00 PM – Midnight</p>
          <p className='BirthdayFont'>📍 Venue: Dark Moon Club, Coimbatore</p>
          <p className='BirthdayFont'>🧛 Costume Contest • 🎶 DJ Music • 🍬 Trick or Treat</p>
          <p className='BirthdayFont'>💀 Scary Décor & Haunted Vibes</p>
          <p className='BirthdayFont'>👗 Dress Code: Halloween Costumes</p>
          <p className='BirthdayFont'>✨ Come if you dare, a spooky night full of surprises ✨</p>
          </div>
           </div>
          <br />
           <Link to="/conformationEvent3" className='bookEventBtnevent'>BOOK EVENT</Link>
        </div>
      </>
    </div>
  )
}

export default Event3
