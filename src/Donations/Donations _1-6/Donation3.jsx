import React from 'react'
import { Link } from 'react-router-dom'

function Donation3() {
  return (
      <div>
               <>
                    <h1>💰 HOPE FUND 2026 – Money Donation Drive</h1>
                    <br></br>
                  <div className='hiphop_details'>
                 
                   <div className='image_containerhiphop'>
                   <img  src="https://i.pinimg.com/1200x/56/76/04/567604a8fabfd9650237a052ac26c3e6.jpg"  className="musicimageaadhi" alt="Money Donation Event"/>
                   </div>
                   <div className='details_event1hip'>
                    <h2 className='headhiphop'>📝 Event Highlights </h2>
                    <div className='content_hiphop'>
                    <h2>1️⃣ Contribute to a Brighter Future</h2>
                    <br />
                    <h3 className='donationtatements'>Support education, healthcare, and essentials with your contribution.</h3>
                    <br /> 
                    <h2>2️⃣ Transparent & Impactful Giving</h2>
                    <br />
                    <h3 className='donationtatements'>Every donation directly aids community development with full transparency.</h3>
                    <br />
                    <h3>REWARDS</h3>
                    <br />
                    <h3>🥇 Appreciation Certificate for all donors</h3>
                    <br />
                    <h3>🥈 Special Recognition for Major Contributors</h3>
                    <br />
                    <h3>🥉 Invitation to Annual Donor Meet & Networking Session</h3>
                    <br />
                    <h3>📍 Venue: Anna University, Chennai</h3>
                    <br />
                    <h3>📅 Date: 20th – 21st July 2026</h3>
                    <br />
                    <h3>⏰ Time: 10:00 AM – 6:00 PM</h3>
                    <h3>👥 Open to All Generous Supporters</h3>
                  </div>
                   <Link to="/conformationDonation3" className='bookEventBtnhackathon'>BOOK EVENT</Link>
                   </div>
                  </div>
                  </>
              
            </div>

  )
}

export default Donation3
