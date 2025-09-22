import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCode, FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaTicketAlt, FaStar } from 'react-icons/fa'

function HackathanPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const hackathonEvents = [
    {
      id: 1,
      title: 'AI & Machine Learning Hackathon',
      organizer: 'Tech Innovators Hub',
      date: '2024-04-02',
      time: '9:00 AM',
      venue: 'IIT Madras Campus',
      price: '₹999',
      image: 'https://i.pinimg.com/1200x/c1/f9/42/c1f94250264c7c3f4f898f92a9b87e92.jpg',
      link: '/hackathonpage1',
      rating: 4.8,
      category: 'AI/ML'
    },
    {
      id: 2,
      title: 'Web Development Hackathon',
      organizer: 'Tech Innovators Hub',
      date: '2024-04-09',
      time: '9:00 AM',
      venue: 'Anna University',
      price: '₹599',
      image: 'https://i.pinimg.com/736x/95/04/ea/9504ea9721e01951bb73ddb781399abc.jpg',
      link: '/hackathonpage2',
      rating: 4.7,
      category: 'Web Dev'
    },
    {
      id: 3,
      title: 'Mobile App Development',
      organizer: 'Tech Innovators Hub',
      date: '2024-04-16',
      time: '9:00 AM',
      venue: 'VIT University',
      price: '₹1,499',
      image: 'https://i.pinimg.com/736x/1f/d8/ab/1fd8ab4a3b823b6fc02984142a0a1779.jpg',
      link: '/hackathonpage3',
      rating: 4.6,
      category: 'Mobile Dev'
    },
    {
      id: 4,
      title: 'Blockchain & Crypto',
      organizer: 'Tech Innovators Hub',
      date: '2024-04-23',
      time: '9:00 AM',
      venue: 'SRM University',
      price: '₹1,299',
      image: 'https://i.pinimg.com/1200x/a6/07/35/a60735f39ac3becbceae4df80c036b27.jpg',
      link: '/hackathonpage4',
      rating: 4.9,
      category: 'Blockchain'
    },
    {
      id: 5,
      title: 'IoT & Smart City',
      organizer: 'Tech Innovators Hub',
      date: '2024-04-30',
      time: '9:00 AM',
      venue: 'Chennai Trade Centre',
      price: '₹1,999',
      image: 'https://i.pinimg.com/736x/5e/e5/24/5ee5248fe49db285c2665d9ec9608b42.jpg',
      link: '/hackathonpage5',
      rating: 4.8,
      category: 'IoT'
    },
    {
      id: 6,
      title: 'Cybersecurity Challenge',
      organizer: 'Tech Innovators Hub',
      date: '2024-05-07',
      time: '9:00 AM',
      venue: 'IIT Madras',
      price: '₹1,799',
      image: 'https://i.pinimg.com/736x/25/2c/b8/252cb8ca9ac86553efb5f617a749a1d6.jpg',
      link: '/hackathonpage6',
      rating: 4.7,
      category: 'Cybersecurity'
    }
  ];

  const filteredEvents = hackathonEvents.filter(event =>
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
            <FaCode className="page-icon" />
            <h1>Hackathon Events</h1>
            <p>Code, compete, and create amazing solutions</p>
          </div>
          <div className="search-section">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search hackathons, technologies, or themes..."
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
            <FaCode className="no-results-icon" />
            <h3>No hackathons found</h3>
            <p>Try searching with different keywords</p>
          </div>
        )}
      </div>

      <div className="featured-section">
        <h2>Why Choose PLANIT for Hackathon Events?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <FaTicketAlt className="feature-icon" />
            <h3>Best Prices</h3>
            <p>Get the best deals on hackathon registrations with our exclusive partnerships</p>
          </div>
          <div className="feature-item">
            <FaMapMarkerAlt className="feature-icon" />
            <h3>Premium Venues</h3>
            <p>Access to the most prestigious venues and tech campuses</p>
          </div>
          <div className="feature-item">
            <FaStar className="feature-icon" />
            <h3>Top Mentors</h3>
            <p>Learn from industry experts and renowned tech professionals</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HackathanPage
     
      