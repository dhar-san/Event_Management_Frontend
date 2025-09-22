import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCalendar, FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaTicketAlt, FaStar } from 'react-icons/fa'

function Events_Page() {
  const [searchQuery, setSearchQuery] = useState('');

  const variousEvents = [
    {
      id: 1,
      title: 'Tech Conference 2024',
      organizer: 'Tech Society',
      date: '2024-04-15',
      time: '9:00 AM',
      venue: 'Chennai Convention Centre',
      price: '₹2,500',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop',
      link: '/Eventpage1',
      rating: 4.8,
      category: 'Conference'
    },
    {
      id: 2,
      title: 'Cultural Festival',
      organizer: 'Cultural Society',
      date: '2024-04-22',
      time: '6:00 PM',
      venue: 'Phoenix Market City',
      price: '₹1,500',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&h=300&fit=crop',
      link: '/Eventpage2',
      rating: 4.7,
      category: 'Cultural'
    },
    {
      id: 3,
      title: 'Business Networking',
      organizer: 'Business Society',
      date: '2024-04-29',
      time: '7:00 PM',
      venue: 'Taj Coromandel',
      price: '₹3,000',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&h=300&fit=crop',
      link: '/Eventpage3',
      rating: 4.6,
      category: 'Networking'
    },
    {
      id: 4,
      title: 'Art Exhibition',
      organizer: 'Art Society',
      date: '2024-05-06',
      time: '10:00 AM',
      venue: 'National Art Gallery',
      price: '₹800',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=300&fit=crop',
      link: '/Eventpage4',
      rating: 4.5,
      category: 'Art'
    },
    {
      id: 5,
      title: 'Sports Tournament',
      organizer: 'Sports Society',
      date: '2024-05-13',
      time: '8:00 AM',
      venue: 'Jawaharlal Nehru Stadium',
      price: '₹1,200',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
      link: '/Eventpage5',
      rating: 4.9,
      category: 'Sports'
    },
    {
      id: 6,
      title: 'Workshop Series',
      organizer: 'Learning Society',
      date: '2024-05-20',
      time: '2:00 PM',
      venue: 'Anna University',
      price: '₹1,800',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop',
      link: '/Eventpage6',
      rating: 4.7,
      category: 'Workshop'
    }
  ];

  const filteredEvents = variousEvents.filter(event =>
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
            <FaCalendar className="page-icon" />
            <h1>Various Events</h1>
            <p>Discover diverse events for every interest</p>
          </div>
          <div className="search-section">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search events, categories, or organizers..."
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
                    <span>Book Now</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredEvents.length === 0 && searchQuery && (
          <div className="no-results">
            <FaCalendar className="no-results-icon" />
            <h3>No events found</h3>
            <p>Try searching with different keywords</p>
          </div>
        )}
      </div>

      <div className="featured-section">
        <h2>Why Choose PLANIT for Various Events?</h2>
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
            <h3>Top Organizers</h3>
            <p>Connect with the best event organizers and industry leaders</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events_Page