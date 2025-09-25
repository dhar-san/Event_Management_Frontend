import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFilm, FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaTicketAlt, FaStar } from 'react-icons/fa'

function Movie_Page() {
  const [searchQuery, setSearchQuery] = useState('');

  const movieEvents = [
    {
      id: 1,
      title: 'Movie Premiere Night 2026',
      organizer: 'Cinema Society',
      date: '2024-09-01',
      time: '7:00 PM',
      venue: 'PVR Cinemas, Chennai',
      price: '₹500',
      image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop',
      link: '/movie1',
      rating: 4.8,
      category: 'Premiere'
    },
    {
      id: 2,
      title: 'Film Festival 2026',
      organizer: 'Film Society of India',
      date: '2024-09-08',
      time: '6:30 PM',
      venue: 'Sathyam Cinemas, Chennai',
      price: '₹800',
      image: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&w=1200&auto=format&fit=crop',
      link: '/movie2',
      rating: 4.9,
      category: 'Festival'
    },
    {
      id: 3,
      title: 'Classic Movie Night',
      organizer: 'Retro Cinema Club',
      date: '2024-09-15',
      time: '8:00 PM',
      venue: 'Inox Cinemas, Chennai',
      price: '₹300',
      image: 'https://images.unsplash.com/photo-1512427691650-5fed1be6d98c?q=80&w=1200&auto=format&fit=crop',
      link: '/movie3',
      rating: 4.7,
      category: 'Classic'
    },
    {
      id: 4,
      title: 'Documentary Screening',
      organizer: 'Documentary Society',
      date: '2024-09-22',
      time: '7:30 PM',
      venue: 'Cinepolis, Chennai',
      price: '₹400',
      image: 'https://images.unsplash.com/photo-1511715288588-6bfe10ce785f?q=80&w=1200&auto=format&fit=crop',
      link: '/movie4',
      rating: 4.6,
      category: 'Documentary'
    },
    {
      id: 5,
      title: 'International Film Week',
      organizer: 'Global Cinema Network',
      date: '2024-09-29',
      time: '6:00 PM',
      venue: 'Luxe Cinemas, Chennai',
      price: '₹1,200',
      image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1200&auto=format&fit=crop',
      link: '/movie5',
      rating: 4.8,
      category: 'International'
    },
    {
      id: 6,
      title: 'Short Film Competition',
      organizer: 'Independent Filmmakers',
      date: '2024-10-06',
      time: '5:00 PM',
      venue: 'Escape Cinemas, Chennai',
      price: '₹600',
      image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1200&auto=format&fit=crop',
      link: '/movie6',
      rating: 4.5,
      category: 'Competition'
    }
  ];

  const filteredEvents = movieEvents.filter(event =>
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
            <FaFilm className="page-icon" />
            <h1>Movies</h1>
            <p>Experience the magic of cinema</p>
          </div>
          <div className="search-section">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search movies, genres, or cinemas..."
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
            <FaFilm className="no-results-icon" />
            <h3>No movies found</h3>
            <p>Try searching with different keywords</p>
          </div>
        )}
      </div>

      {/* Featured Section */}
      <div className="featured-section">
        <h2>Why Choose PLANIT for Movies?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <FaTicketAlt className="feature-icon" />
            <h3>Best Prices</h3>
            <p>Get the best deals on movie tickets with our exclusive partnerships</p>
          </div>
          <div className="feature-item">
            <FaMapMarkerAlt className="feature-icon" />
            <h3>Premium Cinemas</h3>
            <p>Access to the most prestigious cinemas and theaters</p>
          </div>
          <div className="feature-item">
            <FaStar className="feature-icon" />
            <h3>Quality Films</h3>
            <p>Carefully curated selection of the best movies and film events</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie_Page