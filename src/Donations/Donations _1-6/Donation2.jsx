import React from 'react'
import { Link } from 'react-router-dom'

function Donation2() {
  return (
      <div>
               <>
                    <h1>🤝 HEARTS UNITED 2026 – Charity Fundraiser</h1>
                    <br></br>
                  <div className='hiphop_details'>
                 
                   <div className='image_containerhiphop'>
                   <img  src="https://i.pinimg.com/736x/ef/c7/c2/efc7c23485e18929243c71ec39e63fbe.jpg"  className="musicimageaadhi" alt="Charity Event"/>
                   </div>
                   <div className='details_event1hip'>
                    <h2 className='headhiphop'>📝 Event Highlights </h2>
                    <div className='content_hiphop'>
                    <h2>1️⃣ Support Local Communities</h2>
                    <br />
                    <h3 className='donationtatements'>Join hands to raise funds for education, healthcare, and basic needs of underprivileged families.</h3>
                    <br /> 
                    <h2>2️⃣ Cultural Performances & Stalls</h2>
                    <br />
                    <h3 className='donationtatements'>Enjoy music, art, and food stalls while contributing to a meaningful cause.</h3>
                    <br />
                    <h3>REWARDS</h3>
                    <br />
                    <h3>🥇 Appreciation Certificate for every donor</h3>
                    <br />
                    <h3>🥈 Special Recognition for Top Contributors</h3>
                    <br />
                    <h3>🥉 Complimentary Goodie Bag & Refreshments</h3>
                    <br />
                    <h3>📍 Venue: Anna University, Chennai</h3>
                    <br />
                    <h3>📅 Date: 20th – 21st July 2026</h3>
                    <br />
                    <h3>⏰ Time: 10:00 AM – 6:00 PM</h3>
                    <h3>👥 Open to All Generous Hearts</h3>
                  </div>
                   <Link to="/conformationDonation2" className='bookEventBtnhackathon'>BOOK EVENT</Link>
                   </div>
                  </div>
                  </>
              
            </div>

  )
}

export default Donation2
