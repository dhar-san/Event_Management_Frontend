import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCalendarAlt, FaArrowLeft, FaMapMarkerAlt, FaClock, FaTicketAlt, FaStar } from 'react-icons/fa'

function Events_Page() {
  const [searchQuery, setSearchQuery] = useState('');

  const specialEvents = [
    {
      id: 1,
      title: 'Corporate Conference 2026',
      organizer: 'Business Solutions Inc',
      date: '2024-07-01',
      time: '9:00 AM',
      venue: 'Chennai Trade Centre',
      price: '₹5,000',
      image: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1200&auto=format&fit=crop',
      link: '/event1',
      rating: 4.8,
      category: 'Corporate'
    },
    {
      id: 2,
      title: 'Tech Summit 2026',
      organizer: 'Technology Leaders',
      date: '2024-07-08',
      time: '10:00 AM',
      venue: 'IIT Madras, Chennai',
      price: '₹3,500',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
      link: '/event2',
      rating: 4.9,
      category: 'Technology'
    },
    {
      id: 3,
      title: 'Cultural Festival 2026',
      organizer: 'Cultural Society',
      date: '2024-07-15',
      time: '6:00 PM',
      venue: 'Marina Beach, Chennai',
      price: '₹1,000',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
      link: '/event3',
      rating: 4.7,
      category: 'Cultural'
    },
    {
      id: 4,
      title: 'Sports Championship 2026',
      organizer: 'Sports Authority',
      date: '2024-07-22',
      time: '8:00 AM',
      venue: 'Jawaharlal Nehru Stadium',
      price: '₹2,000',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop',
      link: '/event4',
      rating: 4.6,
      category: 'Sports'
    },
    {
      id: 5,
      title: 'Educational Workshop 2026',
      organizer: 'Education Foundation',
      date: '2024-07-29',
      time: '9:30 AM',
      venue: 'Anna University, Chennai',
      price: '₹1,500',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop',
      link: '/event5',
      rating: 4.8,
      category: 'Education'
    },
    {
      id: 6,
      title: 'Health & Wellness Expo 2026',
      organizer: 'Health Society',
      date: '2024-08-05',
      time: '10:00 AM',
      venue: 'Phoenix MarketCity, Chennai',
      price: '₹800',
      image: 'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=1200&auto=format&fit=crop',
      link: '/event6',
      rating: 4.5,
      category: 'Health'
    }
  ];

  const filteredEvents = specialEvents.filter(event =>
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
            <FaCalendarAlt className="page-icon" />
            <h1>Special Events</h1>
            <p>Discover unique and memorable experiences</p>
          </div>
          <div className="search-section">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search events, categories, or venues..."
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
                    <span>Book Now</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredEvents.length === 0 && searchQuery && (
          <div className="no-results">
            <FaCalendarAlt className="no-results-icon" />
            <h3>No events found</h3>
            <p>Try searching with different keywords</p>
          </div>
        )}
      </div>

      {/* Featured Section */}
      <div className="featured-section">
        <h2>Why Choose PLANIT for Special Events?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <FaTicketAlt className="feature-icon" />
            <h3>Best Prices</h3>
            <p>Get the best deals on event tickets with our exclusive partnerships</p>
          </div>
          <div className="feature-item">
            <FaMapMarkerAlt className="feature-icon" />
            <h3>Premium Venues</h3>
            <p>Access to the most prestigious venues and event spaces</p>
          </div>
          <div className="feature-item">
            <FaStar className="feature-icon" />
            <h3>Quality Events</h3>
            <p>Carefully curated events that deliver exceptional experiences</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events_Page