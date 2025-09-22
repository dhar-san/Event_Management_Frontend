import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBusinessTime, FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaTicketAlt, FaStar } from 'react-icons/fa'

function Meeting_Page() {
  const [searchQuery, setSearchQuery] = useState('');

  const meetingEvents = [
    {
      id: 1,
      title: 'Business Strategy Meeting',
      organizer: 'Corporate Solutions',
      date: '2024-04-10',
      time: '10:00 AM',
      venue: 'Taj Coromandel',
      price: '₹2,000',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&h=300&fit=crop',
      link: '/meetingpage1',
      rating: 4.8,
      category: 'Business'
    },
    {
      id: 2,
      title: 'Team Building Workshop',
      organizer: 'HR Solutions',
      date: '2024-04-17',
      time: '9:00 AM',
      venue: 'ITC Grand Chola',
      price: '₹1,500',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop',
      link: '/meetingpage2',
      rating: 4.7,
      category: 'Workshop'
    },
    {
      id: 3,
      title: 'Board Meeting',
      organizer: 'Executive Board',
      date: '2024-04-24',
      time: '2:00 PM',
      venue: 'Park Hyatt',
      price: '₹3,000',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop',
      link: '/meetingpage3',
      rating: 4.9,
      category: 'Executive'
    },
    {
      id: 4,
      title: 'Client Presentation',
      organizer: 'Sales Team',
      date: '2024-05-01',
      time: '11:00 AM',
      venue: 'Chennai Convention Centre',
      price: '₹1,800',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop',
      link: '/meetingpage4',
      rating: 4.6,
      category: 'Presentation'
    },
    {
      id: 5,
      title: 'Training Session',
      organizer: 'Learning & Development',
      date: '2024-05-08',
      time: '9:30 AM',
      venue: 'Anna University',
      price: '₹1,200',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop',
      link: '/meetingpage5',
      rating: 4.5,
      category: 'Training'
    },
    {
      id: 6,
      title: 'Annual Review Meeting',
      organizer: 'Management Team',
      date: '2024-05-15',
      time: '3:00 PM',
      venue: 'Taj Coromandel',
      price: '₹2,500',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&h=300&fit=crop',
      link: '/meetingpage6',
      rating: 4.8,
      category: 'Review'
    }
  ];

  const filteredEvents = meetingEvents.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.organizer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="music-page">
      <div className="page-header">
        <div className="header-content">
          <Link to="/event_home_page" className="back-button">
            <FaArrowLeft className="back-icon" />
            Back to Events
          </Link>
          <div className="header-title">
            <FaBusinessTime className="page-icon" />
            <h1>Meeting Events</h1>
            <p>Professional meetings and corporate events</p>
          </div>
          <div className="search-section">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search meetings, types, or organizers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
        </div>
      </div>

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
                  <p className="event-artist">by {event.organizer}</p>
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
                    <span>Register Now</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredEvents.length === 0 && searchQuery && (
          <div className="no-results">
            <FaBusinessTime className="no-results-icon" />
            <h3>No meetings found</h3>
            <p>Try searching with different keywords</p>
          </div>
        )}
      </div>

      <div className="featured-section">
        <h2>Why Choose PLANIT for Meeting Events?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <FaTicketAlt className="feature-icon" />
            <h3>Best Prices</h3>
            <p>Get the best deals on meeting registrations with our exclusive partnerships</p>
          </div>
          <div className="feature-item">
            <FaMapMarkerAlt className="feature-icon" />
            <h3>Premium Venues</h3>
            <p>Access to the most prestigious venues and meeting spaces</p>
          </div>
          <div className="feature-item">
            <FaStar className="feature-icon" />
            <h3>Top Organizers</h3>
            <p>Connect with the best meeting organizers and corporate professionals</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meeting_Page