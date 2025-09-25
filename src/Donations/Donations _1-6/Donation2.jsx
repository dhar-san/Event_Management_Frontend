import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaUsers, FaStar, FaHeart, FaShare, FaTicketAlt, FaHandsHelping } from 'react-icons/fa'

function Donation2() {
  const [isLiked, setIsLiked] = useState(false);
  const [isShared, setIsShared] = useState(false);

  const eventDetails = {
    title: "HEARTS UNITED 2026 – CHARITY FUNDRAISER",
    organizer: "Hearts United Foundation",
    venue: "Anna University, Chennai",
    date: "20th – 21st July 2026",
    time: "10:00 AM – 6:00 PM",
    crowd: "300+ supporters",
    rating: 4.8,
    image: "https://i.pinimg.com/736x/ef/c7/c2/efc7c23485e18929243c71ec39e63fbe.jpg",
    description: "Join hands to raise funds for education, healthcare, and basic needs of underprivileged families. Make a difference through your generous contributions.",
    guestArtists: [
      "Cultural Performances & Stalls",
      "Music & Art Exhibitions", 
      "Food Stalls & Entertainment",
      "Community Support Activities"
    ],
    ticketPrices: {
      supporter: 0,
      contributor: 100,
      sponsor: 500,
      patron: 1000
    }
  };

  return (
    <div className="event-detail-page">
      <div className="event-header">
        <div className="header-content">
          <Link to="/donation_page" className="back-button">
            <FaArrowLeft className="back-icon" />
            Back to Donations
          </Link>
          
          <div className="header-actions">
            <button 
              className={`action-btn ${isLiked ? 'liked' : ''}`}
              onClick={() => setIsLiked(!isLiked)}
            >
              <FaHeart className={`heart-icon ${isLiked ? 'filled' : ''}`} />
              {isLiked ? 'Liked' : 'Like'}
            </button>
            <button 
              className={`action-btn ${isShared ? 'shared' : ''}`}
              onClick={() => setIsShared(!isShared)}
            >
              <FaShare className="share-icon" />
              Share
            </button>
          </div>
        </div>
      </div>

      <div className="event-content">
        <div className="event-container">
          <div className="event-hero">
            <div className="event-image-container">
              <img src={eventDetails.image} alt={eventDetails.title} className="event-image" />
              <div className="event-badge">
                <FaHandsHelping className="badge-icon" />
                <span>Charity</span>
              </div>
              <div className="event-rating">
                <FaStar className="star-icon" />
                <span>{eventDetails.rating}</span>
              </div>
            </div>
            
            <div className="event-info">
              <h1 className="event-title">{eventDetails.title}</h1>
              <p className="event-artist">by {eventDetails.organizer}</p>
              <p className="event-description">{eventDetails.description}</p>
              
              <div className="event-stats">
                <div className="stat-item">
                  <FaUsers className="stat-icon" />
                  <span>{eventDetails.crowd}</span>
                </div>
                <div className="stat-item">
                  <FaStar className="stat-icon" />
                  <span>{eventDetails.rating}/5 Rating</span>
                </div>
              </div>
            </div>
          </div>

          <div className="event-details-section">
            <div className="details-grid">
              <div className="detail-card">
                <FaCalendarAlt className="detail-icon" />
                <div className="detail-content">
                  <h3>Date</h3>
                  <p>{eventDetails.date}</p>
                </div>
              </div>
              
              <div className="detail-card">
                <FaClock className="detail-icon" />
                <div className="detail-content">
                  <h3>Time</h3>
                  <p>{eventDetails.time}</p>
                </div>
              </div>
              
              <div className="detail-card">
                <FaMapMarkerAlt className="detail-icon" />
                <div className="detail-content">
                  <h3>Venue</h3>
                  <p>{eventDetails.venue}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="artists-section">
            <h2>Event Highlights</h2>
            <div className="artists-grid">
              <div className="main-artist">
                <div className="artist-card featured">
                  <div className="artist-avatar">
                    <FaHandsHelping className="artist-icon" />
                  </div>
                  <h3>Hearts United Foundation</h3>
                  <p>Organizer</p>
                </div>
              </div>
              
              <div className="guest-artists">
                {eventDetails.guestArtists.map((highlight, index) => (
                  <div key={index} className="artist-card">
                    <div className="artist-avatar">
                      <FaHandsHelping className="artist-icon" />
                    </div>
                    <h4>{highlight}</h4>
                    <p>Activity</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pricing-section">
            <h2>Participation Options</h2>
            <div className="pricing-grid">
              <div className="pricing-card">
                <h3>Supporter</h3>
                <div className="price">Free</div>
                <p>Attend and support the cause</p>
              </div>
              <div className="pricing-card popular">
                <div className="popular-badge">Most Popular</div>
                <h3>Contributor</h3>
                <div className="price">₹{eventDetails.ticketPrices.contributor}</div>
                <p>Make a meaningful contribution</p>
              </div>
              <div className="pricing-card">
                <h3>Sponsor</h3>
                <div className="price">₹{eventDetails.ticketPrices.sponsor}</div>
                <p>Support the fundraising efforts</p>
              </div>
              <div className="pricing-card">
                <h3>Patron</h3>
                <div className="price">₹{eventDetails.ticketPrices.patron}</div>
                <p>Major supporter with special recognition</p>
              </div>
            </div>
          </div>

          <div className="action-section">
            <Link to="/conformationDonation2" className="btn btn-primary btn-large">
              <FaTicketAlt className="btn-icon" />
              Register Now
            </Link>
            <button className="btn btn-secondary">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donation2