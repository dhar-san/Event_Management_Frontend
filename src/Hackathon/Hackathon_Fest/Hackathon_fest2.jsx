import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaUsers, FaStar, FaHeart, FaShare, FaTicketAlt, FaCode, FaTrophy, FaMedal } from 'react-icons/fa'

function Hackathon_fest2() {
  const [isLiked, setIsLiked] = useState(false);
  const [isShared, setIsShared] = useState(false);

  const eventDetails = {
    title: "BrainWave 2026",
    venue: "IIT Madras Research Park, Chennai",
    date: "10th – 11th August 2026",
    time: "36-Hour Coding Challenge",
    teamSize: "2–4 members",
    crowd: "300+ developers",
    rating: 4.7,
    image: "https://i.pinimg.com/736x/95/04/ea/9504ea9721e01951bb73ddb781399abc.jpg",
    description: "Push your creative boundaries in this intensive 36-hour coding challenge. Build innovative solutions for tomorrow's problems.",
    problemStatements: [
      { title: "Smart Health Tracker", description: "Develop a comprehensive health monitoring system" },
      { title: "AI-Powered Learning Assistant", description: "Create an intelligent tutoring platform" },
      { title: "Virtual Reality Shopping Experience", description: "Build an immersive e-commerce solution" },
      { title: "Blockchain-based Voting System", description: "Design a secure digital voting platform" }
    ],
    prizes: [
      { position: "1st Prize", amount: "₹1,00,000", bonus: "Internship Opportunity", icon: FaTrophy },
      { position: "2nd Prize", amount: "₹50,000", bonus: "Tech Gadgets", icon: FaMedal },
      { position: "3rd Prize", amount: "₹25,000", bonus: "Certificates", icon: FaMedal }
    ],
    ticketPrices: {
      team: 1800,
      individual: 700,
      student: 400,
      early: 1300
    }
  };

  return (
    <div className="event-detail-page">
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

      <div className="event-content">
        <div className="event-container">
          <div className="event-hero">
            <div className="event-image-container">
              <img src={eventDetails.image} alt={eventDetails.title} className="event-image" />
              <div className="event-badge">
                <FaCode className="badge-icon" />
                <span>Coding Challenge</span>
              </div>
              <div className="event-rating">
                <FaStar className="star-icon" />
                <span>{eventDetails.rating}</span>
              </div>
            </div>
            
            <div className="event-info">
              <h1 className="event-title">{eventDetails.title}</h1>
              <p className="event-artist">Innovation Challenge</p>
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
                  <h3>Duration</h3>
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

              <div className="detail-card">
                <FaUsers className="detail-icon" />
                <div className="detail-content">
                  <h3>Team Size</h3>
                  <p>{eventDetails.teamSize}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="artists-section">
            <h2>Project Titles</h2>
            <div className="artists-grid">
              {eventDetails.problemStatements.map((problem, index) => (
                <div key={index} className="artist-card">
                  <div className="artist-avatar">
                    <FaCode className="artist-icon" />
                  </div>
                  <h4>{problem.title}</h4>
                  <p>{problem.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="artists-section">
            <h2>Prizes & Rewards</h2>
            <div className="artists-grid">
              {eventDetails.prizes.map((prize, index) => {
                const IconComponent = prize.icon;
                return (
                  <div key={index} className="artist-card">
                    <div className="artist-avatar">
                      <IconComponent className="artist-icon" />
                    </div>
                    <h4>{prize.position}</h4>
                    <p><strong>{prize.amount}</strong></p>
                    <p>{prize.bonus}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pricing-section">
            <h2>Registration Pricing</h2>
            <div className="pricing-grid">
              <div className="pricing-card">
                <h3>Team Registration</h3>
                <div className="price">₹{eventDetails.ticketPrices.team}</div>
                <p>Per team (2-4 members)</p>
              </div>
              <div className="pricing-card popular">
                <div className="popular-badge">Most Popular</div>
                <h3>Individual</h3>
                <div className="price">₹{eventDetails.ticketPrices.individual}</div>
                <p>Single participant</p>
              </div>
              <div className="pricing-card">
                <h3>Student</h3>
                <div className="price">₹{eventDetails.ticketPrices.student}</div>
                <p>With valid student ID</p>
              </div>
              <div className="pricing-card">
                <h3>Early Bird</h3>
                <div className="price">₹{eventDetails.ticketPrices.early}</div>
                <p>Limited time offer</p>
              </div>
            </div>
          </div>

          <div className="action-section">
            <Link to="/conformationPageHackathonfest2" className="btn btn-primary btn-large">
              <FaTicketAlt className="btn-icon" />
              Register Now
            </Link>
            <button className="btn btn-secondary">
              View Guidelines
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hackathon_fest2