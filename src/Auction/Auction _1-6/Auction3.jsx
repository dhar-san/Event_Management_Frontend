import React from 'react'
import { Link } from 'react-router-dom'

function Auction3() { 
  return (
      <div>
               <>
                    <h1>💎 Elite Estate Auction</h1>
                    <br></br>
                  <div className='hiphop_details'>
                 
                   <div className='image_containerhiphop'>
                   <img  
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIGzFilRgJvOcICGo-pFPAN8l0lRpSVVAgwQ&s"  
                     className="musicimageaadhi" 
                     alt="Auction Event"
                   />
                   </div>

                   <div className='details_event1hip'>
                    <h2 className='headhiphop'>📝 Event Highlights </h2>
                    <div className='content_hiphop'>
                    
                    <h2>1️⃣ Luxury Real Estate Listings</h2>
                    <br />
                    <h3 className='donationtatements'>
                      Premium villas, heritage mansions, and beachfront properties up for bidding.
                    </h3>
                    <br /> 

                    <h2>2️⃣ Transparent Online + Offline Bidding</h2>
                    <br />
                    <h3 className='donationtatements'>
                      Participate from anywhere or join live in person — all bids tracked in real-time.
                    </h3>
                    <br />

                    <h3>🎁 REWARDS</h3>
                    <br />
                    <h3>🥇 Exclusive Property Consultation for winners</h3>
                    <br />
                    <h3>🥈 Free 1-Year Membership in Elite Auction Club</h3>
                    <br />
                    <h3>🥉 Luxury Gift Hamper for first 50 registrants</h3>
                    <br />

                    <h3>📍 Venue: ITC Grand Chola, Chennai</h3>
                    <br />
                    <h3>📅 Date: 12th – 13th September 2026</h3>
                    <br />
                    <h3>⏰ Time: 9:00 AM – 7:00 PM</h3>
                    <h3>👥 Eligibility: Open to investors & property enthusiasts 21+</h3>
                  </div>

                   <Link to="/conformationAuction3" className='bookEventBtnhackathon'>
                     BOOK EVENT
                   </Link>
                   </div>
                  </div>
                  </>
            </div>
  )
}

export default Auction3
