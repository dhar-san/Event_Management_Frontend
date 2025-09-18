import React from 'react'
import { Link } from 'react-router-dom'

function Meeting5() {
  return (
    <div>
      <>
        <h1>🤝 Business Networking Event 🤝</h1>
        <br></br>
        <div className='hiphop_details'>
          <div className='image_containerhiphop'>
            <img 
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/white-modern-%26-minimal-business-networking-ev-design-template-b30318cda7335df0a472ff2962adec91.jpg?ts=1742306632" 
              alt="Business Networking Event"  
              className="musicimageaadhi"
            />
          </div>
          <div className='Birthday'>

          <h2 className='Business'>Join Us for an Exclusive Networking Event</h2>
          <h1 className='BusinessTitle'>🌐 BUSINESS NETWORKING EVENT 🌐</h1>
          <p className='BirthdayFont'>📅 Date: 12th November, 20XX</p>
          <p className='BirthdayFont'>⏰ Time: 10:00 AM – 4:00 PM</p>
          <p className='BirthdayFont'>📍 Venue: 123 Anywhere Ave, City ST, 3654</p>
          <p className='BirthdayFont'>💡 Why Attend?</p>
          <p className='BirthdayFont'>🔹 Expand your professional network</p>
          <p className='BirthdayFont'>🔹 Gain valuable industry knowledge</p>
          <p className='BirthdayFont'>🔹 Connect with like-minded entrepreneurs</p>
          <p className='BirthdayFont'>🔹 Unlock new business opportunities</p>
          <p className='BirthdayFont'>☎️ Contact: +123-456-7890</p>
          <p className='BirthdayFont'>🌐 Website: www.reallygreatsite.com</p>
          </div>
          <br />
          <Link to="/conformationMeeting5" className='bookMeetingBtn'>REGISTER NOW</Link>
        </div>
      </>
    </div>
  )
}

export default Meeting5
