import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHeart, FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaTicketAlt, FaStar } from 'react-icons/fa'

function Donation_Page() {
  const [searchQuery, setSearchQuery] = useState('');

  const donationEvents = [
    {
      id: 1,
      title: 'Children Education Fund',
      organizer: 'Education for All Foundation',
      date: '2024-03-25',
      time: 'All Day',
      venue: 'Online Event',
      price: '₹1,000',
      image: 'https://i.pinimg.com/1200x/c4/35/2c/c4352ccad9814575ff5df83aff2c0cc5.jpg',
      link: '/Donationpage1',
      rating: 4.9,
      category: 'Education'
    },
    {
      id: 2,
      title: 'Animal Welfare Fund',
      organizer: 'Paws & Care Foundation',
      date: '2024-03-28',
      time: 'All Day',
      venue: 'Online Event',
      price: '₹1,500',
      image: 'https://i.pinimg.com/736x/ef/c7/c2/efc7c23485e18929243c71ec39e63fbe.jpg',
      link: '/Donationpage2',
      rating: 4.8,
      category: 'Animal Welfare'
    },
    {
      id: 3,
      title: 'Environmental Conservation',
      organizer: 'Green Earth Foundation',
      date: '2024-04-05',
      time: 'All Day',
      venue: 'Online Event',
      price: '₹2,000',
      image: 'https://i.pinimg.com/1200x/56/76/04/567604a8fabfd9650237a052ac26c3e6.jpg',
      link: '/Donationpage3',
      rating: 4.7,
      category: 'Environment'
    },
    {
      id: 4,
      title: 'Medical Emergency Fund',
      organizer: 'Health Care Foundation',
      date: '2024-04-12',
      time: 'All Day',
      venue: 'Online Event',
      price: '₹2,500',
      image: 'https://i.pinimg.com/736x/43/68/ab/4368ab0da8b03b1bb7401b192222d590.jpg',
      link: '/Donationpage4',
      rating: 4.9,
      category: 'Healthcare'
    },
    {
      id: 5,
      title: 'Disaster Relief Fund',
      organizer: 'Emergency Response Foundation',
      date: '2024-04-19',
      time: 'All Day',
      venue: 'Online Event',
      price: '₹3,000',
      image: 'https://i.pinimg.com/736x/eb/37/8e/eb378e0b0070dcfc0532bc1326c79cf8.jpg',
      link: '/Donationpage5',
      rating: 4.8,
      category: 'Disaster Relief'
    },
    {
      id: 6,
      title: 'Senior Citizens Care',
      organizer: 'Elder Care Foundation',
      date: '2024-04-26',
      time: 'All Day',
      venue: 'Online Event',
      price: '₹1,800',
      image: 'https://i.pinimg.com/1200x/ea/15/2a/ea152afb65fcc9bd4ba92c5ec35addb6.jpg',
      link: '/Donationpage6',
      rating: 4.6,
      category: 'Elder Care'
    }
  ];

  const filteredEvents = donationEvents.filter(event =>
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
            <FaHeart className="page-icon" />
            <h1>Charity Events</h1>
            <p>Make a difference in the world through giving</p>
          </div>
          <div className="search-section">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search charity events, causes, or organizations..."
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
                    <span>Donate Now</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredEvents.length === 0 && searchQuery && (
          <div className="no-results">
            <FaHeart className="no-results-icon" />
            <h3>No charity events found</h3>
            <p>Try searching with different keywords</p>
          </div>
        )}
      </div>

      <div className="featured-section">
        <h2>Why Choose PLANIT for Charity Events?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <FaTicketAlt className="feature-icon" />
            <h3>Transparent Giving</h3>
            <p>Track your donations and see the impact you're making in real-time</p>
          </div>
          <div className="feature-item">
            <FaMapMarkerAlt className="feature-icon" />
            <h3>Verified Organizations</h3>
            <p>All charities are verified and trusted organizations making real impact</p>
          </div>
          <div className="feature-item">
            <FaStar className="feature-icon" />
            <h3>Tax Benefits</h3>
            <p>Get tax exemption certificates for all your charitable donations</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donation_Page
     
     
      
  