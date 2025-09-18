import React from 'react'
import { Link } from 'react-router-dom'

function Meeting6() {
  return (
    <div>
      <>
        <h1>💻 Tech Conference 2025 💻</h1>
        <br></br>
        <div className='hiphop_details'>
          <div className='image_containerhiphop'>
            <img 
              src="https://marketplace.canva.com/EAFttR0lcWI/1/0/1131w/canva-teal-and-orange-gradient-abstract-tech-conference-poster-HB92yHY7UXs.jpg" 
              alt="Tech Conference 2025"  
              className="musicimageaadhi"
            />
          </div>
          <div className='Birthday'>

            <h2 className='Business'>Join Us for the Tech Conference of the Year</h2>
            <h1 className='BusinessTitle'>🌐 TECH CONFERENCE 🌐</h1>
            <p className='BirthdayFont'>📅 Date: 09/25/2025</p>
            <p className='BirthdayFont'>⏰ Time: 10:00 AM – 4:00 PM</p>
          <p className='BirthdayFont'>📍 Venue: Grand Hall, 456 Innovation Blvd, Tech City, TX 75001</p>
            <p className='BirthdayFont'>💡 Why Attend?</p>
            <p className='BirthdayFont'>🔹 Discover the latest tech trends</p>
            <p className='BirthdayFont'>🔹 Network with industry professionals</p>
            <p className='BirthdayFont'>🔹 Gain insights to boost your career</p>
            <p className='BirthdayFont'>🌐 Website: www.connecttech.com</p>
          </div>
          <br />
          <Link to="/conformationMeeting6" className='bookMeetingBtn'>REGISTER NOW</Link>
        </div>
      </>
    </div>
  )
}

export default Meeting6
