import React from 'react'
import { Link } from 'react-router-dom'

function Meeting2() {
  return (
    <div>
      <>
        <h1>💻 Technology Conference 2025 💻</h1>
        <br></br>
        <div className='hiphop_details'>
          <div className='image_containerhiphop'>
            <img 
              src="https://media.istockphoto.com/id/2159704830/vector/technology-conference-event-invitation-template-creative-geometric-abstract-futuristic.jpg?s=612x612&w=0&k=20&c=dXyftVYhpg92eyTaY0o1dTTZdMU0NKYAXXKZS8I9Ncw=" 
              alt="Technology Conference"  className="musicimageaadhi"
            />
          </div>
          <div className='Birthday'>

          <h2 className='BirthdayTitle'>You Are Invited</h2>
          <h1 className='BirthdayTitle'>TECHNOLOGY CONFERENCE</h1>
          <p className='BirthdayFont'>📅 Date: 25th February 2025</p>
          <p className='BirthdayFont'>⏰ Time: Starts at 3:00 PM</p>
          <p className='BirthdayFont'>📍 Venue: Tech Convention Center, Bengaluru</p>
          <p className='BirthdayFont'>🌐 Topics: AI • Cloud • Cybersecurity • Web3</p>
          <p className='BirthdayFont'>🎤 Keynote Speakers from leading tech companies</p>
          <p className='BirthdayFont'>👔 Dress Code: Business Casual</p>
          <p className='BirthdayFont'>✨ Join us to explore the future of technology ✨</p>
          </div>
          <br />
          <Link to="/conformationMeeting2" className='bookEventBtnevent'>READ MORE</Link>
        </div>
      </>
    </div>
  )
}

export default Meeting2
