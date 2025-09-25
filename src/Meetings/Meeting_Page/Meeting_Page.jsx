import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUsers, FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaTicketAlt, FaStar } from 'react-icons/fa'

function Meeting_Page() {
  const [searchQuery, setSearchQuery] = useState('');

  const meetingEvents = [
    {
      id: 1,
      title: 'Business Networking Meet 2026',
      organizer: 'Professional Network',
      date: '2024-08-01',
      time: '6:00 PM',
      venue: 'Taj Coromandel, Chennai',
      price: '₹2,500',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
      link: '/meeting1',
      rating: 4.8,
      category: 'Networking'
    },
    {
      id: 2,
      title: 'Industry Leaders Summit',
      organizer: 'Industry Association',
      date: '2024-08-08',
      time: '9:00 AM',
      venue: 'ITC Grand Chola, Chennai',
      price: '₹5,000',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
      link: '/meeting2',
      rating: 4.9,
      category: 'Summit'
    },
    {
      id: 3,
      title: 'Startup Pitch Session',
      organizer: 'Venture Capital Group',
      date: '2024-08-15',
      time: '2:00 PM',
      venue: 'NASSCOM Startup Warehouse',
      price: '₹1,000',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
      link: '/meeting3',
      rating: 4.7,
      category: 'Startup'
    },
    {
      id: 4,
      title: 'Academic Conference 2026',
      organizer: 'University Consortium',
      date: '2024-08-22',
      time: '10:00 AM',
      venue: 'IIT Madras, Chennai',
      price: '₹3,000',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
      link: '/meeting4',
      rating: 4.6,
      category: 'Academic'
    },
    {
      id: 5,
      title: 'Board Meeting Workshop',
      organizer: 'Corporate Governance Institute',
      date: '2024-08-29',
      time: '11:00 AM',
      venue: 'Oberoi Hotel, Chennai',
      price: '₹4,500',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop',
      link: '/meeting5',
      rating: 4.8,
      category: 'Workshop'
    },
    {
      id: 6,
      title: 'Community Town Hall',
      organizer: 'Local Government',
      date: '2024-09-05',
      time: '7:00 PM',
      venue: 'Chennai Corporation Hall',
      price: 'Free',
      image: 'https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1200&auto=format&fit=crop',
      link: '/meeting6',
      rating: 4.5,
      category: 'Community'
    }
  ];

  const filteredEvents = meetingEvents.filter(event =>
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
            <FaUsers className="page-icon" />
            <h1>Meetings</h1>
            <p>Connect, collaborate, and grow together</p>
          </div>
          <div className="search-section">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search meetings, topics, or organizers..."
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
                    <span>Register</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredEvents.length === 0 && searchQuery && (
          <div className="no-results">
            <FaUsers className="no-results-icon" />
            <h3>No meetings found</h3>
            <p>Try searching with different keywords</p>
          </div>
        )}
      </div>

      {/* Featured Section */}
      <div className="featured-section">
        <h2>Why Choose PLANIT for Meetings?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <FaTicketAlt className="feature-icon" />
            <h3>Professional Network</h3>
            <p>Connect with industry leaders and like-minded professionals</p>
          </div>
          <div className="feature-item">
            <FaMapMarkerAlt className="feature-icon" />
            <h3>Premium Venues</h3>
            <p>Access to the most prestigious meeting venues and conference centers</p>
          </div>
          <div className="feature-item">
            <FaStar className="feature-icon" />
            <h3>Quality Content</h3>
            <p>Carefully curated meetings with valuable insights and discussions</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Meeting_Page