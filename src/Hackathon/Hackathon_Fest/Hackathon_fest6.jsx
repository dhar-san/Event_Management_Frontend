import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaUsers, FaStar, FaHeart, FaShare, FaTicketAlt, FaCode } from 'react-icons/fa'

function Hackathon_fest6() {
  const [isLiked, setIsLiked] = useState(false);
  const [isShared, setIsShared] = useState(false);

  const eventDetails = {
    title: "GAMEJAM 2026 – CODE. PLAY. INNOVATE.",
    organizer: "Gaming Innovation Lab",
    venue: "Hyderabad Gaming Arena, HITEC City",
    date: "20th – 21st January 2027",
    time: "30-Hour Nonstop Game Hack",
    crowd: "300+ developers",
    rating: 4.7,
    image: "https://i.pinimg.com/736x/25/2c/b8/252cb8ca9ac86553efb5f617a749a1d6.jpg",
    description: "Dive into the world of gaming innovation with cutting-edge technologies including AI, VR/AR, blockchain, and cloud gaming solutions.",
    guestArtists: [
      "AI-Powered Game NPCs",
      "VR/AR Immersive Gaming", 
      "Blockchain-based In-Game Economy",
      "Cloud Gaming Optimization Tools"
    ],
    ticketPrices: {
      vip: 4000,
      platinum: 3200,
      gold: 2400,
      silver: 1800
    }
  };

  return (
    <div className="event-detail-page">
      {/* Header */}
      <div className="event-header">
        <div className="header-content">
          <Link to="/hackathon_page" className="back-button">
            <FaArrowLeft className="back-icon" />
            Back to Hackathons
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

      {/* Main Content */}
      <div className="event-content">
        <div className="event-container">
          {/* Event Image and Basic Info */}
          <div className="event-hero">
            <div className="event-image-container">
              <img src={eventDetails.image} alt={eventDetails.title} className="event-image" />
              <div className="event-badge">
                <FaCode className="badge-icon" />
                <span>Gaming</span>
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

          {/* Event Details */}
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

          {/* Guest Artists */}
          <div className="artists-section">
            <h2>Hackathon Themes</h2>
            <div className="artists-grid">
              <div className="main-artist">
                <div className="artist-card featured">
                  <div className="artist-avatar">
                    <FaCode className="artist-icon" />
                  </div>
                  <h3>Gaming Innovation Lab</h3>
                  <p>Organizer</p>
                </div>
              </div>
              
              <div className="guest-artists">
                {eventDetails.guestArtists.map((theme, index) => (
                  <div key={index} className="artist-card">
                    <div className="artist-avatar">
                      <FaCode className="artist-icon" />
                    </div>
                    <h4>{theme}</h4>
                    <p>Gaming Track</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ticket Pricing */}
          <div className="pricing-section">
            <h2>Registration Pricing</h2>
            <div className="pricing-grid">
              <div className="pricing-card">
                <h3>VIP</h3>
                <div className="price">₹{eventDetails.ticketPrices.vip}</div>
                <p>Premium access with mentorship</p>
              </div>
              <div className="pricing-card popular">
                <div className="popular-badge">Most Popular</div>
                <h3>Platinum</h3>
                <div className="price">₹{eventDetails.ticketPrices.platinum}</div>
                <p>Full access to all challenges</p>
              </div>
              <div className="pricing-card">
                <h3>Gold</h3>
                <div className="price">₹{eventDetails.ticketPrices.gold}</div>
                <p>Access to most challenges</p>
              </div>
              <div className="pricing-card">
                <h3>Silver</h3>
                <div className="price">₹{eventDetails.ticketPrices.silver}</div>
                <p>Basic hackathon access</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-section">
            <Link to="/conformationPageHackathonfest6" className="btn btn-primary btn-large">
              <FaTicketAlt className="btn-icon" />
              Register Now
            </Link>
            <button className="btn btn-secondary">
              Add to Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hackathon_fest6