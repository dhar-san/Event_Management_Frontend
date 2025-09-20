import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaMusic, FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaTicketAlt, FaStar } from 'react-icons/fa'

function MusicPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const musicEvents = [
    {
      id: 1,
      title: 'Hip Hop Revolution',
      artist: 'Aadhi & Friends',
      date: '2024-02-15',
      time: '8:00 PM',
      venue: 'Madras Central',
      price: '₹1,500',
      image: 'https://imgs.search.brave.com/CXrl6oYUVJWSfXkaI1_WLkAHfwVaRbbAoaAZfVnqRKA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI4L2Q5/L2Q3LzI4ZDlkN2Yx/NTI0ZjMzNTIxNjI4/MTNjMWQwODdjMGQx/LmpwZw',
      link: '/hiphop_concert',
      rating: 4.8,
      category: 'Hip Hop'
    },
    {
      id: 2,
      title: 'Anirudh Live Concert',
      artist: 'Anirudh Ravichander',
      date: '2024-02-20',
      time: '7:30 PM',
      venue: 'Chennai Trade Centre',
      price: '₹2,500',
      image: 'https://i.pinimg.com/736x/e9/22/b0/e922b0216d32439c5dd15418b5a0094e.jpg',
      link: '/anirudth_concert',
      rating: 4.9,
      category: 'Tamil Pop'
    },
    {
      id: 3,
      title: 'Carnatic Melodies',
      artist: 'Sakthisree Gopalan',
      date: '2024-02-25',
      time: '6:00 PM',
      venue: 'Music Academy',
      price: '₹800',
      image: 'https://i.pinimg.com/1200x/8e/ce/b8/8eceb83c1f166b02a8bbfd9baa79f56e.jpg',
      link: '/sakthishre_concert',
      rating: 4.7,
      category: 'Carnatic'
    },
    {
      id: 4,
      title: 'Folk Fusion',
      artist: 'Pradeep Kumar',
      date: '2024-03-01',
      time: '7:00 PM',
      venue: 'Nehru Indoor Stadium',
      price: '₹1,200',
      image: 'https://i.pinimg.com/1200x/b4/1e/00/b41e008f477c1eb12117197eabce0168.jpg',
      link: '/pradeep_concert',
      rating: 4.6,
      category: 'Folk'
    },
    {
      id: 5,
      title: 'Billie Eilish World Tour',
      artist: 'Billie Eilish',
      date: '2024-03-10',
      time: '8:30 PM',
      venue: 'Jawaharlal Nehru Stadium',
      price: '₹4,500',
      image: 'https://i.pinimg.com/736x/61/6b/a3/616ba36c2d60d526bc7303a9587d9043.jpg',
      link: '/billie_concert',
      rating: 4.9,
      category: 'Pop'
    },
    {
      id: 6,
      title: 'Coldplay Live in Chennai',
      artist: 'Coldplay',
      date: '2024-03-15',
      time: '9:00 PM',
      venue: 'YMCA Grounds',
      price: '₹6,000',
      image: 'https://i.pinimg.com/1200x/58/18/a1/5818a1379893a2ef60ae220619462a46.jpg',
      link: '/cold_concert',
      rating: 4.9,
      category: 'Alternative Rock'
    }
  ];

  const filteredEvents = musicEvents.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
            <FaMusic className="page-icon" />
            <h1>Music Concerts</h1>
            <p>Experience the magic of live music</p>
          </div>
          <div className="search-section">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search concerts, artists, or genres..."
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
                  <p className="event-artist">{event.artist}</p>
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
            <FaMusic className="no-results-icon" />
            <h3>No concerts found</h3>
            <p>Try searching with different keywords</p>
          </div>
        )}
      </div>

      {/* Featured Section */}
      <div className="featured-section">
        <h2>Why Choose PLANIT for Music Events?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <FaTicketAlt className="feature-icon" />
            <h3>Best Prices</h3>
            <p>Get the best deals on concert tickets with our exclusive partnerships</p>
          </div>
          <div className="feature-item">
            <FaMapMarkerAlt className="feature-icon" />
            <h3>Premium Venues</h3>
            <p>Access to the most prestigious venues and concert halls</p>
          </div>
          <div className="feature-item">
            <FaStar className="feature-icon" />
            <h3>Top Artists</h3>
            <p>Experience performances by renowned national and international artists</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MusicPage