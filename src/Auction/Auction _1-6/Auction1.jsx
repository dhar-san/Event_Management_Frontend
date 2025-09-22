import React from 'react'
import { Link } from 'react-router-dom'

function Auction1() {
  return (
    <div>
      <>
        <h1>💰 AUCTION 2026 – Exclusive Art & Collectibles</h1>
        <br></br>
        <div className='hiphop_details'>

          <div className='image_containerhiphop'>
            <img  
              src="https://thumbs.dreamstime.com/b/auction-banner-poster-template-auctioneer-flat-vector-illustration-public-sales-promotion-card-design-offering-up-goods-232378143.jpg"  
              className="musicimageaadhi" 
              alt="Auction Event"
            />
          </div>

          <div className='details_event1hip'>
            <h2 className='headhiphop'>📝 Event Highlights </h2>
            <div className='content_hiphop'>
              <h2>1️⃣ Rare Art & Collectibles</h2>
              <br />
              <h3 className='donationtatements'>
                Bid on exclusive art pieces, antiques, and collectibles from renowned artists and sellers.
              </h3>
              <br /> 
              <h2>2️⃣ Live Bidding Experience</h2>
              <br />
              <h3 className='donationstatements'>
                Participate in our live auction with expert auctioneers guiding the process.
              </h3>
              <br />
              <h3>REWARDS & PERKS</h3>
              <br />
              <h3>🥇 Winner receives authenticated certificates of purchased items</h3>
              <br />
              <h3>🥈 Exclusive early access to upcoming auctions</h3>
              <br />
              <h3>🥉 Complimentary refreshments during the event</h3>
              <br />
              <h3>📍 Venue: Lalit Kala Akademi, Chennai</h3>
              <br />
              <h3>📅 Date: 25th – 26th August 2026</h3>
              <br />
              <h3>⏰ Time: 10:00 AM – 6:00 PM</h3>
              <h3>👥 Eligibility: Participants aged 18+</h3>
            </div>
            <Link to="/conformationAuction1" className='bookEventBtnhackathon'>BOOK EVENT</Link>
          </div>

        </div>
      </>
    </div>
  )
}

export default Auction1
