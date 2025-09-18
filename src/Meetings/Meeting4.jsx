import React from 'react'
import { Link } from 'react-router-dom'

function Meeting4() {
  return (
    <div>
      <>
        <h1>📌 Official Meeting Invitation 📌</h1>
        <br></br>
        <div className='hiphop_details'>
          <div className='image_containerhiphop'>
            <img 
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-meeting-invitation-template-design-3e69fe291adc5d28cc6d170026d6cb79.jpg?ts=1734165612" 
              alt="Meeting Invitation"  className="musicimageaadhi"
            />
          </div>
          <div className='Birthday'>

          <h2 className='Business'>You Are Cordially Invited</h2>
          <h1 className='BusinessTitle'>📢 MEETING INVITATION 📢</h1>
          <p className='BirthdayFont'>📅 Date: February 12, 2030</p>
          <p className='BirthdayFont'>⏰ Time: 10:00 AM</p>
          <p className='BirthdayFont'>📍 Venue: 123 Anywhere St., Any City, ST 12345</p>
          <p className='BirthdayFont'>📌 Please come on time for a productive discussion</p>
          <p className='BirthdayFont'>☎️ More Info: +123-456-7890</p>
          <p className='BirthdayFont'>🌐 Website: www.internationalconference2030.com</p>
          <p className='BirthdayFont'>✨ Let’s collaborate, share ideas & achieve together ✨</p>
          </div>
          <br />
          <Link to="/conformationMeeting4" className='bookEventBtnevent'>CONFIRM ATTENDANCE</Link>
        </div>
      </>
    </div>
  )
}

export default Meeting4
