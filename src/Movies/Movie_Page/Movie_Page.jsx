import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFilm, FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaTicketAlt, FaStar } from 'react-icons/fa'

function Movie_Page() {
  const [searchQuery, setSearchQuery] = useState('');

  const movieEvents = [
    {
      id: 1,
      title: 'Blockbuster Movie Night',
      organizer: 'Cinema Society',
      date: '2024-04-12',
      time: '7:00 PM',
      venue: 'PVR Cinemas',
      price: '₹500',
      image: 'https://images.unsplash.com/photo-1489599803001-0b1a4b4b4b4b?w=500&h=300&fit=crop',
      link: '/moviepage1',
      rating: 4.8,
      category: 'Entertainment'
    },
    {
      id: 2,
      title: 'Film Festival',
      organizer: 'Film Society',
      date: '2024-04-19',
      time: '6:00 PM',
      venue: 'Chennai International Film Festival',
      price: '₹800',
      image: 'https://images.unsplash.com/photo-1489599803001-0b1a4b4b4b4b?w=500&h=300&fit=crop',
      link: '/moviepage2',
      rating: 4.7,
      category: 'Festival'
    },
    {
      id: 3,
      title: 'Classic Movie Screening',
      organizer: 'Heritage Cinema Club',
      date: '2024-04-26',
      time: '8:00 PM',
      venue: 'Sathyam Cinemas',
      price: '₹400',
      image: 'https://images.unsplash.com/photo-1489599803001-0b1a4b4b4b4b?w=500&h=300&fit=crop',
      link: '/moviepage3',
      rating: 4.6,
      category: 'Classic'
    },
    {
      id: 4,
      title: 'Documentary Screening',
      organizer: 'Documentary Society',
      date: '2024-05-03',
      time: '7:30 PM',
      venue: 'Inox Cinemas',
      price: '₹300',
      image: 'https://images.unsplash.com/photo-1489599803001-0b1a4b4b4b4b?w=500&h=300&fit=crop',
      link: '/moviepage4',
      rating: 4.5,
      category: 'Documentary'
    },
    {
      id: 5,
      title: 'Movie Premiere',
      organizer: 'Film Production House',
      date: '2024-05-10',
      time: '9:00 PM',
      venue: 'Luxe Cinemas',
      price: '₹1,200',
      image: 'https://images.unsplash.com/photo-1489599803001-0b1a4b4b4b4b?w=500&h=300&fit=crop',
      link: '/moviepage5',
      rating: 4.9,
      category: 'Premiere'
    },
    {
      id: 6,
      title: 'Movie Marathon',
      organizer: 'Cinema Club',
      date: '2024-05-17',
      time: '10:00 AM',
      venue: 'Cinepolis',
      price: '₹1,500',
      image: 'https://images.unsplash.com/photo-1489599803001-0b1a4b4b4b4b?w=500&h=300&fit=crop',
      link: '/moviepage6',
      rating: 4.8,
      category: 'Marathon'
    }
  ];

  const filteredEvents = movieEvents.filter(event =>
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
            <FaFilm className="page-icon" />
            <h1>Movie Events</h1>
            <p>Experience the magic of cinema</p>
          </div>
          <div className="search-section">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search movies, genres, or theaters..."
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
            <FaFilm className="no-results-icon" />
            <h3>No movie events found</h3>
            <p>Try searching with different keywords</p>
          </div>
        )}
      </div>

      <div className="featured-section">
        <h2>Why Choose PLANIT for Movie Events?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <FaTicketAlt className="feature-icon" />
            <h3>Best Prices</h3>
            <p>Get the best deals on movie tickets with our exclusive partnerships</p>
          </div>
          <div className="feature-item">
            <FaMapMarkerAlt className="feature-icon" />
            <h3>Premium Theaters</h3>
            <p>Access to the most prestigious theaters and cinema halls</p>
          </div>
          <div className="feature-item">
            <FaStar className="feature-icon" />
            <h3>Top Movies</h3>
            <p>Watch the latest blockbusters and critically acclaimed films</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie_Page