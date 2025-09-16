import React from 'react'
import { Link } from 'react-router-dom'

function Event5() {
  return (
    <div>
      <>
        <h1>🎄 Christmas Party 🎄</h1>
        <br></br>
        <div className='hiphop_details'>
          <div className='image_containerhiphop'>
            <img 
              src="https://www.shutterstock.com/image-vector/christmas-party-poster-template-shining-260nw-1198234690.jpg" 
              alt="Christmas Party"  
              className="musicimageaadhi"
            />
          </div>
          <div className='Birthday'>

          <h2 className='BirthdayTitle'>✨ Eat, Drink and be Merry ✨</h2>
          <h1 className='BirthdayTitle'>🎅 Special Christmas Celebration 🎅</h1>
          <p className='BirthdayFont'>📅 Date: Tuesday, 25th December</p>
          <p className='BirthdayFont'>⏰ Time: Evening till Midnight</p>
          <p className='BirthdayFont'>📍 Venue: Location</p>
          <p className='BirthdayFont'>🎶 Enjoy Music, Dance & Festive Vibes</p>
          <p className='BirthdayFont'>🎁 Surprise Gifts • Fun Games • Free Drinks</p>
          <p className='BirthdayFont'>👗 Dress Code: Festive Wear</p>
          <p className='BirthdayFont'>✨ Celebrate the joy of Christmas together ✨</p>
           </div>
          <br />
           <Link to="/conformationEvent4" className='bookEventBtnevent'>BOOK EVENT</Link>
        </div>
      </>
    </div>
  )
}

export default Event5
