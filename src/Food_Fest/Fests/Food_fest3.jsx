import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaUsers, FaStar, FaHeart, FaShare, FaTicketAlt, FaUtensils } from 'react-icons/fa'

function FoodFest3() {
  const [isLiked, setIsLiked] = useState(false);
  const [isShared, setIsShared] = useState(false);

  const eventDetails = {
    title: "GLOBAL GRUB CARNIVAL",
    chef: "Chef Madhampatty Rangaraj",
    venue: "Bandra Kurla Complex Grounds, Mumbai",
    date: "2nd December 2026",
    time: "3:00 PM – 11:00 PM",
    crowd: "60,000+ food explorers",
    rating: 4.8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaWwfWy8E0MffKXqrk0RdL9-l8nbwEd_GWCQ&s",
    description: "Experience a global culinary carnival with Chef Madhampatty Rangaraj showcasing gourmet dishes from around the world.",
    cuisines: [
      "French Gourmet & Breads",
      "Mediterranean Flavors",
      "Chinese Dim Sum Specials",
      "Exotic Ice Cream & Desserts"
    ],
    chefImage: "https://static.asianetnews.com/images/w-1280,h-720,format-jpg,imgid-01k3v2qhmb5n50j4e0vzw0ph1a,imgname-madhampatty-rangaraj-cooku-with-comali-1756476720777.jpg",
    ticketPrices: {
      vip: 3000,
      premium: 2200,
      standard: 1500,
      economy: 1000
    }
  };

  return (
    <div className="event-detail-page">
      {/* Header */}
      <div className="event-header">
        <div className="header-content">
          <Link to="/food_page" className="back-button">
            <FaArrowLeft className="back-icon" />
            Back to Food Festivals
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
                <FaUtensils className="badge-icon" />
                <span>Gourmet</span>
              </div>
              <div className="event-rating">
                <FaStar className="star-icon" />
                <span>{eventDetails.rating}</span>
              </div>
            </div>
            
            <div className="event-info">
              <h1 className="event-title">{eventDetails.title}</h1>
              <p className="event-artist">Hosted by {eventDetails.chef}</p>
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

          {/* Chef & Cuisines Section */}
          <div className="artists-section">
            <h2>Featured Chef & Cuisines</h2>
            <div className="artists-grid">
              <div className="main-artist">
                <div className="artist-card featured">
                  <img src={eventDetails.chefImage} alt={eventDetails.chef} className="artist-avatar chef-image" />
                  <h3>{eventDetails.chef}</h3>
                  <p>Chief Guest Chef</p>
                </div>
              </div>
              
              <div className="guest-artists">
                <h3 style={{textAlign: 'center', marginBottom: '1rem', color: 'var(--text-primary)'}}>Featured Cuisines</h3>
                {eventDetails.cuisines.map((cuisine, index) => (
                  <div key={index} className="artist-card">
                    <div className="artist-avatar">
                      <FaUtensils className="artist-icon" />
                    </div>
                    <h4>{cuisine}</h4>
                    <p>Culinary Experience</p>
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
                <p>All access with chef meet & greet</p>
              </div>
              <div className="pricing-card popular">
                <div className="popular-badge">Most Popular</div>
                <h3>Premium</h3>
                <div className="price">₹{eventDetails.ticketPrices.premium}</div>
                <p>Priority access to all food stalls</p>
              </div>
              <div className="pricing-card">
                <h3>Standard</h3>
                <div className="price">₹{eventDetails.ticketPrices.standard}</div>
                <p>Access to most food stalls</p>
              </div>
              <div className="pricing-card">
                <h3>Economy</h3>
                <div className="price">₹{eventDetails.ticketPrices.economy}</div>
                <p>Basic access to food festival</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-section">
            <Link to="/conformationPageFoodfest3" className="btn btn-primary btn-large">
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

export default FoodFest3