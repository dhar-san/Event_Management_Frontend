import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaUsers, FaStar, FaHeart, FaShare, FaTicketAlt, FaMusic } from 'react-icons/fa'

function Hiphop_concert() {
  const [isLiked, setIsLiked] = useState(false);
  const [isShared, setIsShared] = useState(false);

  const eventDetails = {
    title: "RETURN OF DRAGON 2025",
    artist: "Hip-Hop Tamizha Aadhi",
    venue: "YMCA Grounds, Chennai, Tamil Nadu",
    date: "22nd December 2025",
    time: "6:30 PM – 11:00 PM",
    crowd: "15,000+ people",
    rating: 4.8,
    image: "https://imgs.search.brave.com/CXrl6oYUVJWSfXkaI1_WLkAHfwVaRbbAoaAZfVnqRKA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI4L2Q5/L2Q3LzI4ZDlkN2Yx/NTI0ZjMzNTIxNjI4/MTNjMWQwODdjMGQx/LmpwZw",
    description: "Experience the ultimate hip-hop extravaganza with Tamil Nadu's most celebrated artists in one spectacular event.",
    guestArtists: [
      "Benny Dayal",
      "Arunraja Kamaraj", 
      "Kharesma Ravichandran",
      "Santhosh Narayanan"
    ],
    ticketPrices: {
      seating: 9999,
      platinum: 7500,
      gold: 4500,
      bronze: 1500
    }
  };

  return (
    <div className="event-detail-page">
      {/* Header */}
      <div className="event-header">
        <div className="header-content">
          <Link to="/music_page" className="back-button">
            <FaArrowLeft className="back-icon" />
            Back to Music Events
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
                <FaMusic className="badge-icon" />
                <span>Hip Hop</span>
              </div>
              <div className="event-rating">
                <FaStar className="star-icon" />
                <span>{eventDetails.rating}</span>
              </div>
            </div>
            
            <div className="event-info">
              <h1 className="event-title">{eventDetails.title}</h1>
              <p className="event-artist">by {eventDetails.artist}</p>
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
            <h2>Guest Artists & Performers</h2>
            <div className="artists-grid">
              <div className="main-artist">
                <div className="artist-card featured">
                  <div className="artist-avatar">
                    <FaMusic className="artist-icon" />
                  </div>
                  <h3>{eventDetails.artist}</h3>
                  <p>Main Artist</p>
                </div>
              </div>
              
              <div className="guest-artists">
                {eventDetails.guestArtists.map((artist, index) => (
                  <div key={index} className="artist-card">
                    <div className="artist-avatar">
                      <FaMusic className="artist-icon" />
                    </div>
                    <h4>{artist}</h4>
                    <p>Guest Performer</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ticket Pricing */}
          <div className="pricing-section">
            <h2>Ticket Pricing</h2>
            <div className="pricing-grid">
              <div className="pricing-card">
                <h3>Seating</h3>
                <div className="price">₹{eventDetails.ticketPrices.seating}</div>
                <p>Premium seating with best views</p>
              </div>
              <div className="pricing-card popular">
                <div className="popular-badge">Most Popular</div>
                <h3>Platinum</h3>
                <div className="price">₹{eventDetails.ticketPrices.platinum}</div>
                <p>Standing area with premium access</p>
              </div>
              <div className="pricing-card">
                <h3>Gold</h3>
                <div className="price">₹{eventDetails.ticketPrices.gold}</div>
                <p>Great view with good acoustics</p>
              </div>
              <div className="pricing-card">
                <h3>Bronze</h3>
                <div className="price">₹{eventDetails.ticketPrices.bronze}</div>
                <p>General admission standing</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-section">
            <Link to="/conformationPageHiphop" className="btn btn-primary btn-large">
              <FaTicketAlt className="btn-icon" />
              Book Tickets Now
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

export default Hiphop_concert