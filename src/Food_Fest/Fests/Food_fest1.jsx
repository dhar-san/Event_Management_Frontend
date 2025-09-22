import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaUsers, FaStar, FaHeart, FaShare, FaTicketAlt, FaUtensils } from 'react-icons/fa'

function Food_fest1() {
  const [isLiked, setIsLiked] = useState(false);
  const [isShared, setIsShared] = useState(false);

  const eventDetails = {
    title: "Yum Yum Yatra",
    chef: "Chef Dhamu",
    date: "11th March 2024",
    time: "6:30 PM – 10:30 PM",
    venue: "Phoenix Market City, Chennai",
    crowd: "500+ Food Enthusiasts",
    image: "https://i.pinimg.com/1200x/c9/bb/46/c9bb465e77ff65fc1f0dfbf6aef6714c.jpg",
    description: "Join us for an extraordinary culinary journey featuring authentic flavors from across India. Experience the magic of traditional cooking techniques and modern presentations.",
    highlights: [
      "Live cooking demonstrations by renowned chefs",
      "Interactive food stations with regional specialties",
      "Wine and beverage pairing sessions",
      "Meet and greet with celebrity chefs",
      "Exclusive recipe sharing sessions"
    ],
    packages: [
      {
        name: "Food Explorer",
        price: "₹2,500",
        features: ["Access to all food stations", "Welcome drink", "Chef interaction session", "Recipe booklet"]
      },
      {
        name: "Gourmet Experience",
        price: "₹3,500",
        features: ["Premium food stations", "Wine pairing", "Chef's table experience", "Exclusive merchandise"],
        popular: true
      },
      {
        name: "VIP Culinary Journey",
        price: "₹5,000",
        features: ["Private chef consultation", "Premium wine selection", "Personalized menu", "Take-home gourmet basket"]
      }
    ]
  };

  return (
    <div className="event-detail-page">
      {/* Header */}
      <div className="event-header">
        <div className="header-content">
          <Link to="/foodpage" className="back-button">
            <FaArrowLeft className="back-icon" />
            Back to Food Festivals
          </Link>
          <div className="header-actions">
            <button 
              className={`action-btn ${isLiked ? 'liked' : ''}`}
              onClick={() => setIsLiked(!isLiked)}
            >
              <FaHeart className="action-icon" />
              {isLiked ? 'Liked' : 'Like'}
            </button>
            <button 
              className={`action-btn ${isShared ? 'shared' : ''}`}
              onClick={() => setIsShared(!isShared)}
            >
              <FaShare className="action-icon" />
              {isShared ? 'Shared' : 'Share'}
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
                <span className="category-badge">Multi-Cuisine</span>
              </div>
            </div>
            
            <div className="event-info">
              <div className="event-header-info">
                <h1 className="event-title">{eventDetails.title}</h1>
                <p className="event-artist">by {eventDetails.chef}</p>
                <div className="event-rating">
                  <FaStar className="star-icon" />
                  <span className="rating-text">4.7 (2,847 reviews)</span>
                </div>
              </div>
              
              <div className="event-meta">
                <div className="meta-item">
                  <FaCalendarAlt className="meta-icon" />
                  <div className="meta-content">
                    <span className="meta-label">Date</span>
                    <span className="meta-value">{eventDetails.date}</span>
                  </div>
                </div>
                <div className="meta-item">
                  <FaClock className="meta-icon" />
                  <div className="meta-content">
                    <span className="meta-label">Time</span>
                    <span className="meta-value">{eventDetails.time}</span>
                  </div>
                </div>
                <div className="meta-item">
                  <FaMapMarkerAlt className="meta-icon" />
                  <div className="meta-content">
                    <span className="meta-label">Venue</span>
                    <span className="meta-value">{eventDetails.venue}</span>
                  </div>
                </div>
                <div className="meta-item">
                  <FaUsers className="meta-icon" />
                  <div className="meta-content">
                    <span className="meta-label">Expected Crowd</span>
                    <span className="meta-value">{eventDetails.crowd}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Event Description */}
          <div className="event-description">
            <h2>About This Event</h2>
            <p>{eventDetails.description}</p>
          </div>

          {/* Event Highlights */}
          <div className="event-highlights">
            <h2>Event Highlights</h2>
            <ul className="highlights-list">
              {eventDetails.highlights.map((highlight, index) => (
                <li key={index} className="highlight-item">
                  <FaUtensils className="highlight-icon" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ticket Pricing */}
          <div className="pricing-section">
            <h2>Choose Your Experience</h2>
            <div className="pricing-grid">
              {eventDetails.packages.map((pkg, index) => (
                <div key={index} className={`pricing-card ${pkg.popular ? 'popular' : ''}`}>
                  {pkg.popular && <div className="popular-badge">Most Popular</div>}
                  <div className="pricing-header">
                    <h3 className="package-name">{pkg.name}</h3>
                    <div className="package-price">{pkg.price}</div>
                  </div>
                  <ul className="package-features">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="feature-item">
                        <FaStar className="feature-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-section">
            <Link to="/conformationPageFoodfest1" className="btn btn-primary btn-large">
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

export default Food_fest1