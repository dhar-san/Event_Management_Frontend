import React from 'react'
import { Link } from 'react-router-dom'  
import { FaCalendarAlt, FaUsers, FaMusic, FaUtensils, FaCode, FaHeart, FaGavel, FaFilm, FaBusinessTime } from 'react-icons/fa'

function Main_Page() {
  return ( 
    <div className="main-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="logo-container">
            <img src='logo2.png' className='main-logo' alt="PLANIT Logo"/>
          </div>
          
          <h1 className="hero-title">
            Welcome to <span className="brand-name">PLANIT!</span>
          </h1>
          
          <p className="hero-subtitle">
            Your ultimate destination for discovering, organizing, and attending amazing events
          </p>
          
          <div className="hero-buttons">
            <Link to="/Login" className="btn btn-primary">
              <FaUsers className="btn-icon" />
              Login
            </Link> 
            <Link to='/Register' className="btn btn-secondary">
              <FaCalendarAlt className="btn-icon" />
              Register
            </Link>
          </div>
        </div>
        
        {/* Floating Event Icons */}
        <div className="floating-icons">
          <div className="floating-icon music-icon">
            <FaMusic />
          </div>
          <div className="floating-icon food-icon">
            <FaUtensils />
          </div>
          <div className="floating-icon code-icon">
            <FaCode />
          </div>
          <div className="floating-icon heart-icon">
            <FaHeart />
          </div>
          <div className="floating-icon gavel-icon">
            <FaGavel />
          </div>
          <div className="floating-icon film-icon">
            <FaFilm />
          </div>
          <div className="floating-icon business-icon">
            <FaBusinessTime />
          </div>
        </div>
      </div>

      {/* Features Preview */}
      <div className="features-preview">
        <h2 className="features-title">What's Waiting for You?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaMusic className="feature-icon" />
            <h3>Music Concerts</h3>
            <p>Experience live performances from your favorite artists</p>
          </div>
          <div className="feature-card">
            <FaUtensils className="feature-icon" />
            <h3>Food Festivals</h3>
            <p>Discover culinary delights and food experiences</p>
          </div>
          <div className="feature-card">
            <FaCode className="feature-icon" />
            <h3>Hackathons</h3>
            <p>Join coding competitions and tech events</p>
          </div>
          <div className="feature-card">
            <FaHeart className="feature-icon" />
            <h3>Charity Events</h3>
            <p>Make a difference through meaningful causes</p>
          </div>
          <div className="feature-card">
            <FaGavel className="feature-icon" />
            <h3>Auctions</h3>
            <p>Bid on unique items and collectibles</p>
          </div>
          <div className="feature-card">
            <FaFilm className="feature-icon" />
            <h3>Movie Screenings</h3>
            <p>Enjoy exclusive film events and premieres</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <h2>Ready to Plan Your Next Adventure?</h2>
        <p>Join thousands of event enthusiasts and never miss out on amazing experiences</p>
        <Link to="/Register" className="btn btn-cta">
          Get Started Today
        </Link>
      </div>
    </div>
  )
}

export default Main_Page
