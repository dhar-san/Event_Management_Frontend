import React from 'react'
import { Link } from 'react-router-dom'

function Event2() {
  return (
    <div>
      <>
        <h1>🍸 Cocktail Party 🍸</h1>
        <br></br>
        <div className='hiphop_details'>
          <div className='image_containerhiphop'>
            <img 
              src="https://static.vecteezy.com/system/resources/previews/040/812/815/non_2x/cocktail-party-banner-or-poster-template-for-networking-or-business-reception-with-aperitif-and-alcohol-drinks-invitation-leaflet-or-flyer-with-glasses-full-of-various-beverage-with-bubbles-vector.jpg" 
              alt="Cocktail Party"  className="musicimageaadhi"
            />
          </div>
          <div className='Birthday'>

          <h2 className='BirthdayTitle'>🍹 Join Us For An Unforgettable Evening 🍹</h2>
          <h1 className='BirthdayTitle'>🎶 Cocktail Party & DJ Night 🎶</h1>
          <p className='BirthdayFont'>📅 Date: Thursday, 17th July 2025</p>
          <p className='BirthdayFont'>⏰ Time: 8:00 PM – Midnight</p>
          <p className='BirthdayFont'>📍 Venue: Blue Moon Lounge, Coimbatore</p>
          <p className='BirthdayFont'>🎧 Live DJ • 🍸 Drinks • 🎉 Dance Floor</p>
          <p className='BirthdayFont'>🎟️ Entry Ticket: $23 per person</p>
          <p className='BirthdayFont'>👗 Dress Code: Smart Casual / Party Wear</p>
          <p className='BirthdayFont'>✨ Let’s groove all night with music & vibes ✨</p>
           </div>
          <br />
           <Link to="/conformationEvent2" className='bookEventBtnevent'>BOOK EVENT</Link>
        </div>
      </>
    </div>
  )
}

export default Event2
