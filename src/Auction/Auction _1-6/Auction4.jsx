import React from 'react'
import { Link } from 'react-router-dom'

function Auction4() { 
  return (
      <div>
               <>
                    <h1>🚗 Luxe Wheels Auction</h1>
                    <br></br>
                  <div className='hiphop_details'>
                 
                   <div className='image_containerhiphop'>
                   <img  
                     src="https://resource.designwiz.com/designwiz/compressed/exciting-auto-auction-event-flyer-template-pib5mka6e41bac.png"  
                     className="musicimageaadhi" 
                     alt="Luxury Car Auction"
                   />
                   </div>

                   <div className='details_event1hip'>
                    <h2 className='headhiphop'>📝 Event Highlights </h2>
                    <div className='content_hiphop'>
                    
                    <h2>1️⃣ Rare Supercars & Classics</h2>
                    <br />
                    <h3 className='donationtatements'>
                      Ferrari, Lamborghini, Rolls Royce, and vintage classics ready for bidding.
                    </h3>
                    <br /> 

                    <h2>2️⃣ Live Test Drives & Showcase</h2>
                    <br />
                    <h3 className='donationtatements'>
                      Exclusive previews, engine rev-offs, and premium test drives for bidders.
                    </h3>
                    <br />

                    <h3>🎁 REWARDS</h3>
                    <br />
                    <h3>🥇 Free Supercar Track Day Experience</h3>
                    <br />
                    <h3>🥈 VIP Access to Next Car Expo</h3>
                    <br />
                    <h3>🥉 Luxury Car Merchandise Kit</h3>
                    <br />

                    <h3>📍 Venue: Mahindra World City, Chennai</h3>
                    <br />
                    <h3>📅 Date: 18th – 19th October 2026</h3>
                    <br />
                    <h3>⏰ Time: 11:00 AM – 8:00 PM</h3>
                    <h3>👥 Eligibility: Open for participants aged 21+ with valid license</h3>
                  </div>

                   <Link to="/conformationAuction4" className='bookEventBtnhackathon'>
                     BOOK EVENT
                   </Link>
                   </div>
                  </div>
                  </>
            </div>
  )
}

export default Auction4
