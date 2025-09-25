import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaUsers, FaStar, FaHeart, FaShare, FaTicketAlt, FaHeart as FaHeartIcon } from 'react-icons/fa'

function Donation1() {
  const [isLiked, setIsLiked] = useState(false);
  const [isShared, setIsShared] = useState(false);

  const eventDetails = {
    title: "LIFE SAVERS 2026 – BLOOD DONATION DRIVE",
    organizer: "Life Savers Foundation",
    venue: "Anna University, Chennai",
    date: "20th – 21st July 2026",
    time: "9:00 AM – 5:00 PM",
    crowd: "500+ donors",
    rating: 4.9,
    image: "https://i.pinimg.com/1200x/c4/35/2c/c4352ccad9814575ff5df83aff2c0cc5.jpg",
    description: "Join our life-saving mission and help hospitals maintain a healthy blood supply for emergency patients. Every donation saves lives and makes a difference.",
    guestArtists: [
      "Blood Donation & Health Screening",
      "Free Health Checkups", 
      "Certificate of Appreciation",
      "Healthy Snacks & Refreshments"
    ],
    ticketPrices: {
      donor: 0,
      volunteer: 0,
      supporter: 0,
      sponsor: 500
    }
  };

  return (
    <div className="event-detail-page">
      {/* Header */}
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

      {/* Main Content */}
      <div className="event-content">
        <div className="event-container">
          {/* Event Image and Basic Info */}
          <div className="event-hero">
            <div className="event-image-container">
              <img src={eventDetails.image} alt={eventDetails.title} className="event-image" />
              <div className="event-badge">
                <FaHeartIcon className="badge-icon" />
                <span>Blood Donation</span>
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
            <h2>Event Highlights</h2>
            <div className="artists-grid">
              <div className="main-artist">
                <div className="artist-card featured">
                  <div className="artist-avatar">
                    <FaHeartIcon className="artist-icon" />
                  </div>
                  <h3>Life Savers Foundation</h3>
                  <p>Organizer</p>
                </div>
              </div>
              
              <div className="guest-artists">
                {eventDetails.guestArtists.map((highlight, index) => (
                  <div key={index} className="artist-card">
                    <div className="artist-avatar">
                      <FaHeartIcon className="artist-icon" />
                    </div>
                    <h4>{highlight}</h4>
                    <p>Service</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ticket Pricing */}
          <div className="pricing-section">
            <h2>Participation Options</h2>
            <div className="pricing-grid">
              <div className="pricing-card">
                <h3>Blood Donor</h3>
                <div className="price">Free</div>
                <p>Donate blood and save lives</p>
              </div>
              <div className="pricing-card popular">
                <div className="popular-badge">Most Popular</div>
                <h3>Volunteer</h3>
                <div className="price">Free</div>
                <p>Help organize and support the event</p>
              </div>
              <div className="pricing-card">
                <h3>Supporter</h3>
                <div className="price">Free</div>
                <p>Spread awareness and encourage others</p>
              </div>
              <div className="pricing-card">
                <h3>Sponsor</h3>
                <div className="price">₹{eventDetails.ticketPrices.sponsor}</div>
                <p>Support the cause financially</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-section">
            <Link to="/conformationDonation1" className="btn btn-primary btn-large">
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

export default Donation1