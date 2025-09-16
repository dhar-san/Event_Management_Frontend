import React from 'react'
import { Link } from 'react-router-dom'

function Auction1() {
  return (
    <div>
      <>
        <h1>🎉 You Are Invited 🎉</h1>
        <br></br>
        <div className='hiphop_details'>
          <div className='image_containerhiphop'>
            <img 
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/kids-birthday-party-square-flyer-design-template-1d3c875c19b088fc7f620302fb004f80_screen.jpg?ts=1738003986" 
              alt="Birthday Kid"  className="musicimageaadhi"
            />
          </div>
          <div className='Birthday'>

          <h2  className='BirthdayTitle'>Come & Celebrate Aarav’s 7th Birthday</h2>
          <h1  className='BirthdayTitle'>🎂 Grand Birthday Bash 🎂</h1>
          <p className='BirthdayFont'>📅 Date: Sunday, 5th October 2025</p>
          <p className='BirthdayFont'>⏰ Time: 6:00 PM – 10:00 PM</p>
          <p className='BirthdayFont'>📍 Venue: Rainbow Party Hall, Coimbatore</p>
          <p className='BirthdayFont'>🍕 Unlimited Food • 🎶 DJ Music • 🎉 Fun Games</p>
          <p className='BirthdayFont'>🎁 Surprise Return Gifts for all kids</p>
          <p className='BirthdayFont'>👗 Dress Code: Party Wear / Casuals</p>
          <p className='BirthdayFont'>Hosted with ❤️ by: Priya & Karthik</p>
          <p className='BirthdayFont'>✨ Let’s make this evening full of laughter, joy & memories ✨</p>
           </div>
          <br />
           <Link to="/conformationEvent1" className='bookEventBtnevent'>BOOK EVENT</Link>
        </div>
      </>
    </div>
  )
}

export default Auction1
