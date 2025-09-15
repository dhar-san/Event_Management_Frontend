import React from 'react'
import { Link } from 'react-router-dom'

function Auction5() { 
  return (
      <div>
               <>
                    <h1>🏏 IPL 2026 Mega Auction</h1>
                    <br></br>
                  <div className='hiphop_details'>
                 
                   <div className='image_containerhiphop'>
                   <img  
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUkvNT_D3pOuFaz92Nm6GuUpX3-6Vl9Ru0IA&s"  
                     className="musicimageaadhi" 
                     alt="IPL Auction"
                   />
                   </div>

                   <div className='details_event1hip'>
                    <h2 className='headhiphop'>📝 Event Highlights </h2>
                    <div className='content_hiphop'>
                    
                    <h2>1️⃣ Star Players Under the Hammer</h2>
                    <br />
                    <h3 className='donationtatements'>
                      Watch your favorite cricketers go up for bidding — who will land the biggest contracts?
                    </h3>
                    <br /> 

                    <h2>2️⃣ Live Bidding War Between Franchises</h2>
                    <br />
                    <h3 className='donationtatements'>
                      Experience the thrill as franchises battle it out for top players in real-time.
                    </h3>
                    <br />

                    <h3>🎁 REWARDS</h3>
                    <br />
                    <h3>🥇 Meet & Greet with Selected Players</h3>
                    <br />
                    <h3>🥈 Free IPL Match Tickets</h3>
                    <br />
                    <h3>🥉 Official IPL 2026 Merchandise</h3>
                    <br />

                    <h3>📍 Venue: Taj Coromandel, Chennai</h3>
                    <br />
                    <h3>📅 Date: 20th – 21st November 2026</h3>
                    <br />
                    <h3>⏰ Time: 10:00 AM – 9:00 PM</h3>
                    <h3>👥 Eligibility: Cricket fans & franchise representatives (18+)</h3>
                  </div>

                   <Link to="/conformationAuction5" className='bookEventBtnhackathon'>
                     BOOK EVENT
                   </Link>
                   </div>
                  </div>
                  </>
            </div>
  )
}

export default Auction5
