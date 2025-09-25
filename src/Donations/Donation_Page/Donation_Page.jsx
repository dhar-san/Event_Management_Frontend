import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHeart, FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaTicketAlt, FaStar } from 'react-icons/fa'

function Donation_Page() {
  const [searchQuery, setSearchQuery] = useState('');

  const donationEvents = [
    {
      id: 1,
      title: 'Life Savers 2026 – Blood Donation',
      organizer: 'Life Savers Foundation',
      date: '2024-05-01',
      time: '9:00 AM',
      venue: 'Anna University, Chennai',
      price: 'Free',
      image: 'https://images.unsplash.com/photo-1516575150278-77136aed6920?q=80&w=1200&auto=format&fit=crop',
      link: '/donation1',
      rating: 4.9,
      category: 'Blood Donation'
    },
    {
      id: 2,
      title: 'Hearts United 2026 – Charity',
      organizer: 'Hearts United Foundation',
      date: '2024-05-08',
      time: '10:00 AM',
      venue: 'Anna University, Chennai',
      price: '₹100',
      image: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1200&auto=format&fit=crop',
      link: '/donation2',
      rating: 4.8,
      category: 'Charity'
    },
    {
      id: 3,
      title: 'Hope Fund 2026 – Money Drive',
      organizer: 'Hope Fund Foundation',
      date: '2024-05-15',
      time: '11:00 AM',
      venue: 'Anna University, Chennai',
      price: '₹200',
      image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200&auto=format&fit=crop',
      link: '/donation3',
      rating: 4.7,
      category: 'Money Donation'
    },
    {
      id: 4,
      title: 'Blood Donation Drive',
      organizer: 'Life Savers Foundation',
      date: '2024-05-22',
      time: '9:00 AM',
      venue: 'Anna University, Chennai',
      price: 'Free',
      image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1200&auto=format&fit=crop',
      link: '/donation4',
      rating: 4.9,
      category: 'Blood Donation'
    },
    {
      id: 5,
      title: 'Charity Fundraiser',
      organizer: 'Hearts United Foundation',
      date: '2024-05-29',
      time: '10:00 AM',
      venue: 'Anna University, Chennai',
      price: '₹100',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1200&auto=format&fit=crop',
      link: '/donation5',
      rating: 4.8,
      category: 'Charity'
    },
    {
      id: 6,
      title: 'Money Donation Drive',
      organizer: 'Hope Fund Foundation',
      date: '2024-06-05',
      time: '11:00 AM',
      venue: 'Anna University, Chennai',
      price: '₹200',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1200&auto=format&fit=crop',
      link: '/donation6',
      rating: 4.7,
      category: 'Money Donation'
    }
  ];

  const filteredEvents = donationEvents.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.organizer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="music-page">
      {/* Header */}
      <div className="page-header">
        <div className="header-content">
          <Link to="/event_home_page" className="back-button">
            <FaArrowLeft className="back-icon" />
            Back to Events
          </Link>
          <div className="header-title">
            <FaHeart className="page-icon" />
            <h1>Donation Events</h1>
            <p>Make a difference in your community</p>
          </div>
          <div className="search-section">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search donation events, causes, or organizations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="events-container">
        <div className="events-grid">
          {filteredEvents.map((event) => (
            <Link key={event.id} to={event.link} className="event-card">
              <div className="event-image-container">
                <img src={event.image} alt={event.title} className="event-image" />
                <div className="event-badge">
                  <span className="category-badge">{event.category}</span>
                </div>
                <div className="event-overlay">
                  <div className="rating">
                    <FaStar className="star-icon" />
                    <span>{event.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="event-content">
                <div className="event-header">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-artist">{event.organizer}</p>
                </div>
                
                <div className="event-details">
                  <div className="detail-item">
                    <FaCalendarAlt className="detail-icon" />
                    <span>{new Date(event.date).toLocaleDateString('en-IN', { 
                      weekday: 'short', 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="detail-item">
                    <FaClock className="detail-icon" />
                    <span>{event.time}</span>
                  </div>
                  <div className="detail-item">
                    <FaMapMarkerAlt className="detail-icon" />
                    <span>{event.venue}</span>
                  </div>
                </div>
                
                <div className="event-footer">
                  <div className="price">
                    <FaTicketAlt className="ticket-icon" />
                    <span className="price-amount">{event.price}</span>
                  </div>
                  <div className="book-button">
                    <span>Participate</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredEvents.length === 0 && searchQuery && (
          <div className="no-results">
            <FaHeart className="no-results-icon" />
            <h3>No donation events found</h3>
            <p>Try searching with different keywords</p>
          </div>
        )}
      </div>

      {/* Featured Section */}
      <div className="featured-section">
        <h2>Why Choose PLANIT for Donation Events?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <FaTicketAlt className="feature-icon" />
            <h3>Transparent Process</h3>
            <p>Full accountability and reporting for all donations and contributions</p>
          </div>
          <div className="feature-item">
            <FaMapMarkerAlt className="feature-icon" />
            <h3>Verified Organizations</h3>
            <p>Partner with trusted and verified charitable organizations</p>
          </div>
          <div className="feature-item">
            <FaStar className="feature-icon" />
            <h3>Community Impact</h3>
            <p>Make a real difference in your community through meaningful causes</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donation_Page