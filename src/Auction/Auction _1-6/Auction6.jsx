import React from 'react'
import { Link } from 'react-router-dom'

function Auction6() { 
  return (
      <div>
               <>
                    <h1>🌌 MetaVerse NFT Auction 2026</h1>
                    <br></br>
                  <div className='hiphop_details'>
                 
                   <div className='image_containerhiphop'>
                   <img  
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG3dvHOedMScrTNyOlNwpRbEupy_VFL7UCkg&s"  
                     className="musicimageaadhi" 
                     alt="NFT Auction"
                   />
                   </div>

                   <div className='details_event1hip'>
                    <h2 className='headhiphop'>📝 Event Highlights </h2>
                    <div className='content_hiphop'>
                    
                    <h2>1️⃣ Exclusive NFT Drops</h2>
                    <br />
                    <h3 className='donationtatements'>
                      Bid on one-of-a-kind NFTs from trending digital artists, gamers, and creators worldwide.
                    </h3>
                    <br /> 

                    <h2>2️⃣ VR & AR Auction Experience</h2>
                    <br />
                    <h3 className='donationtatements'>
                      Step into the metaverse and join the auction floor in immersive 3D.
                    </h3>
                    <br />

                    <h3>🎁 REWARDS</h3>
                    <br />
                    <h3>🥇 Free Crypto Wallet Setup + Gas Fee Credits</h3>
                    <br />
                    <h3>🥈 Limited Edition NFT Airdrops</h3>
                    <br />
                    <h3>🥉 Access to Private Discord Collectors Club</h3>
                    <br />

                    <h3>📍 Venue: Phoenix MarketCity, Chennai + Online (Metaverse)</h3>
                    <br />
                    <h3>📅 Date: 15th – 16th December 2026</h3>
                    <br />
                    <h3>⏰ Time: 6:00 PM – Midnight</h3>
                    <h3>👥 Eligibility: Open for digital collectors & blockchain enthusiasts (18+)</h3>
                  </div>

                   <Link to="/conformationAuction6" className='bookEventBtnhackathon'>
                     BOOK EVENT
                   </Link>
                   </div>
                  </div>
                  </>
            </div>
  )
}

export default Auction6
