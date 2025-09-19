import React from 'react'
import { Link } from 'react-router-dom'

function Meeting1() {
  return (
    <div>
      <>
        <h1>📊 Business Meeting 2020 📊</h1>
        <br></br>
        <div className='hiphop_details'>
          <div className='image_containerhiphop'>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToDMYlriiF0wTQJNk3VcRG-YKwDCFM4henkQ&s" 
              alt="Business Meeting"  className="musicimageaadhi"
            />
          </div>
          <div className='Birthday'>

          <h1 className='BusinessTitle1'>Official Business Meeting 2020:</h1>
          <h2 className='Business1'>Petrol Energies International and Annual</h2>
          <p className='BirthdayFont'>📅 Date: September 30 & 31, 2020</p>
          <p className='BirthdayFont'>⏰ Time: 10:00 AM – 4:00 PM</p>
          <p className='BirthdayFont'>📍 Venue: The Queen’s Hall Center, Detroit, MI</p>
          <p className='BirthdayFont'>🤝 Networking • 📈 Presentations • 💼 Corporate Strategy</p>
          <p className='BirthdayFont'>👔 Dress Code: Formal Attire</p>
          <p className='BirthdayFont'>Organized by Petrol Energies Solutions</p>
          <p className='BirthdayFont'>✨ A platform to discuss, collaborate and grow ✨</p>
          </div>
          <br />
          <Link to="/conformationMeeting1" className='bookEventBtnevent'>REGISTER NOW</Link>
        </div>
      </>
    </div>
  )
}

export default Meeting1
