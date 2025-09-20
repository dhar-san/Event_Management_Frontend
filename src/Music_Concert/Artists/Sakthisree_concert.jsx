import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaUsers, FaStar, FaHeart, FaShare, FaTicketAlt, FaMusic } from 'react-icons/fa'

function Sakthisree_concert() {
  const [isLiked, setIsLiked] = useState(false);
  const [isShared, setIsShared] = useState(false);

  const eventDetails = {
    title: "SAKTHISREE GOPALAN – LIVE IN CONCERT",
    artist: "Sakthisree Gopalan",
    venue: "Music Academy Open Grounds, Chennai, Tamil Nadu",
    date: "15th November 2025",
    time: "6:30 PM – 11:00 PM",
    crowd: "10,000+ people",
    rating: 4.7,
    image: "https://i.pinimg.com/1200x/8e/ce/b8/8eceb83c1f166b02a8bbfd9baa79f56e.jpg",
    description: "Experience the soulful melodies of Sakthisree Gopalan in this enchanting Carnatic concert featuring classical and contemporary performances.",
    guestArtists: [
      "Sid Sriram",
      "Karthik",
      "Haricharan",
      "Chinmayi Sripada"
    ],
    ticketPrices: {
      premium: 3500,
      standard: 2000,
      economy: 1200,
      student: 800
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
                <span>Carnatic</span>
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
                <h3>Premium</h3>
                <div className="price">₹{eventDetails.ticketPrices.premium}</div>
                <p>Front row seating with best acoustics</p>
              </div>
              <div className="pricing-card popular">
                <div className="popular-badge">Most Popular</div>
                <h3>Standard</h3>
                <div className="price">₹{eventDetails.ticketPrices.standard}</div>
                <p>Great view with excellent sound quality</p>
              </div>
              <div className="pricing-card">
                <h3>Economy</h3>
                <div className="price">₹{eventDetails.ticketPrices.economy}</div>
                <p>General seating with good acoustics</p>
              </div>
              <div className="pricing-card">
                <h3>Student</h3>
                <div className="price">₹{eventDetails.ticketPrices.student}</div>
                <p>Special pricing for students with valid ID</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-section">
            <Link to="/conformationPageSakthisree" className="btn btn-primary btn-large">
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

export default Sakthisree_concert