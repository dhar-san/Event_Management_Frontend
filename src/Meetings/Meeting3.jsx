import React from 'react'
import { Link } from 'react-router-dom'

function Meeting3() {
  return (
    <div>
      <>
        <h1>🌍 International Conference 2030 🌍</h1>
        <br></br>
        <div className='hiphop_details'>
          <div className='image_containerhiphop'>
            <img 
              src="https://i.pinimg.com/236x/8c/3c/71/8c3c71aa519b6f3e1a371751830428df.jpg" 
              alt="International Conference"  className="musicimageaadhi"
            />
          </div>
          <div className='Birthday'>

          <h2 className='Business'>MOST  EFFECTIVE TACTICS TO SUCCEED IN  TODAY'S BUSINESS:</h2>
          <h1 className='BusinessTitle'>INTERNATIONAL CONFERENCE 2030</h1>
          <p className='BirthdayFont'>📅 Date: Saturday, 20th July 2030</p>
          <p className='BirthdayFont'>⏰ Time: 9:00 AM – 6:00 PM</p>
          <p className='BirthdayFont'>📍 Venue: The Summit Park, Atlanta</p>
          <p className='BirthdayFont'>🎤 Featured Speakers: Industry Leaders & Experts</p>
          <p className='BirthdayFont'>📈 Topics: Business Strategy • Leadership • Innovation</p>
          <p className='BirthdayFont'>👔 Dress Code: Formal / Business Professional</p>
          <p className='BirthdayFont'>✨ A global platform to connect, learn, and grow ✨</p>
          </div>
          <br />
          <Link to="/conformationMeeting3" className='bookEventBtnevent'>REGISTER NOW</Link>
        </div>
      </>
    </div>
  )
}

export default Meeting3
