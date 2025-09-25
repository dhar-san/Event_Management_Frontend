import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCode, FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaTicketAlt, FaStar } from 'react-icons/fa'

function HackathanPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const hackathonEvents = [
    {
      id: 1,
      title: 'INNOVATE 2026 – Tech Revolution',
      organizer: 'Tech Innovation Hub',
      date: '2024-04-01',
      time: '9:00 AM',
      venue: 'IIT Madras, Chennai',
      price: '₹2,000',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
      link: '/hackathon_fest1',
      rating: 4.8,
      category: 'Tech Innovation'
    },
    {
      id: 2,
      title: 'BRAINWAVE 2026 – AI Challenge',
      organizer: 'AI Research Center',
      date: '2024-04-08',
      time: '10:00 AM',
      venue: 'Anna University, Chennai',
      price: '₹1,500',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981d?q=80&w=1200&auto=format&fit=crop',
      link: '/hackathon_fest2',
      rating: 4.9,
      category: 'AI/ML'
    },
    {
      id: 3,
      title: 'FUTURETECH 2026 – Blockchain',
      organizer: 'Blockchain Society',
      date: '2024-04-15',
      time: '8:00 AM',
      venue: 'VIT University, Chennai',
      price: '₹2,500',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1200&auto=format&fit=crop',
      link: '/hackathon_fest3',
      rating: 4.7,
      category: 'Blockchain'
    },
    {
      id: 4,
      title: 'CODESTORM 2026 – Ultimate Hack',
      organizer: 'Tech Innovation Hub',
      date: '2024-04-22',
      time: '9:00 AM',
      venue: 'Infosys Convention Center, Bangalore',
      price: '₹3,000',
      image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
      link: '/hackathon_fest4',
      rating: 4.8,
      category: 'Full Stack'
    },
    {
      id: 5,
      title: 'NEXTGEN HACK 2026 – Code Create',
      organizer: 'NextGen Tech Solutions',
      date: '2024-04-29',
      time: '10:00 AM',
      venue: 'NASSCOM Startup Warehouse, Bengaluru',
      price: '₹3,500',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
      link: '/hackathon_fest5',
      rating: 4.9,
      category: 'Startup Tech'
    },
    {
      id: 6,
      title: 'GAMEJAM 2026 – Code Play Innovate',
      organizer: 'Gaming Innovation Lab',
      date: '2024-05-06',
      time: '11:00 AM',
      venue: 'Hyderabad Gaming Arena, HITEC City',
      price: '₹4,000',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
      link: '/hackathon_fest6',
      rating: 4.6,
      category: 'Game Development'
    }
  ];

  const filteredEvents = hackathonEvents.filter(event =>
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
            <FaCode className="page-icon" />
            <h1>Hackathons</h1>
            <p>Code, create, and innovate with the best</p>
          </div>
          <div className="search-section">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search hackathons, technologies, or venues..."
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

      {/* Featured Section */}
      <div className="featured-section">
        <h2>Why Choose PLANIT for Hackathons?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <FaTicketAlt className="feature-icon" />
            <h3>Best Prices</h3>
            <p>Get the best deals on hackathon registrations with our exclusive partnerships</p>
          </div>
          <div className="feature-item">
            <FaMapMarkerAlt className="feature-icon" />
            <h3>Premium Venues</h3>
            <p>Access to the most prestigious tech venues and innovation centers</p>
          </div>
          <div className="feature-item">
            <FaStar className="feature-icon" />
            <h3>Top Mentors</h3>
            <p>Learn from industry experts and successful entrepreneurs</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HackathanPage