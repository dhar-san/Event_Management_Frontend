import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaUsers, FaStar, FaHeart, FaShare, FaTicketAlt, FaMusic } from 'react-icons/fa'

function PradeepKumar_concert() {
  const [isLiked, setIsLiked] = useState(false);
  const [isShared, setIsShared] = useState(false);

  const eventDetails = {
    title: "KAADHALUDAN – LIVE IN CONCERT",
    artist: "Pradeep Kumar",
    venue: "Nehru Indoor Stadium, Chennai, Tamil Nadu",
    date: "20th December 2025",
    time: "6:30 PM – 11:00 PM",
    crowd: "12,000+ people",
    rating: 4.8,
    image: "https://i.pinimg.com/1200x/b4/1e/00/b41e008f477c1eb12117197eabce0168.jpg",
    description: "Join Pradeep Kumar for an unforgettable evening of folk fusion music featuring his most beloved tracks and soulful performances.",
    guestArtists: [
      "Sid Sriram",
      "Karthik",
      "Shweta Mohan",
      "Pooja"
    ],
    ticketPrices: {
      vip: 4500,
      premium: 3000,
      standard: 1800,
      economy: 1200
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
                <span>Folk Fusion</span>
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
                <h3>VIP</h3>
                <div className="price">₹{eventDetails.ticketPrices.vip}</div>
                <p>Front row seating with meet & greet</p>
              </div>
              <div className="pricing-card popular">
                <div className="popular-badge">Most Popular</div>
                <h3>Premium</h3>
                <div className="price">₹{eventDetails.ticketPrices.premium}</div>
                <p>Premium seating with great views</p>
              </div>
              <div className="pricing-card">
                <h3>Standard</h3>
                <div className="price">₹{eventDetails.ticketPrices.standard}</div>
                <p>Great view with excellent sound</p>
              </div>
              <div className="pricing-card">
                <h3>Economy</h3>
                <div className="price">₹{eventDetails.ticketPrices.economy}</div>
                <p>General admission with good sound</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-section">
            <Link to="/conformationPagePradeepkumar" className="btn btn-primary btn-large">
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

export default PradeepKumar_concert