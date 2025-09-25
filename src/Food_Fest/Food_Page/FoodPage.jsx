import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUtensils, FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaTicketAlt, FaStar } from 'react-icons/fa'

function FoodPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const foodEvents = [
    {
      id: 1,
      title: 'Chennai Food Festival 2026',
      organizer: 'Tamil Nadu Tourism',
      date: '2024-03-01',
      time: '10:00 AM',
      venue: 'Marina Beach, Chennai',
      price: '₹500',
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop',
      link: '/food_fest1',
      rating: 4.8,
      category: 'Food Festival'
    },
    {
      id: 2,
      title: 'Street Food Carnival',
      organizer: 'Foodie Community',
      date: '2024-03-08',
      time: '6:00 PM',
      venue: 'T. Nagar, Chennai',
      price: '₹300',
      image: 'https://images.unsplash.com/photo-1533777324565-a040eb52fac1?q=80&w=1200&auto=format&fit=crop',
      link: '/food_fest2',
      rating: 4.6,
      category: 'Street Food'
    },
    {
      id: 3,
      title: 'Fine Dining Experience',
      organizer: 'Luxury Hotels Association',
      date: '2024-03-15',
      time: '7:30 PM',
      venue: 'ITC Grand Chola, Chennai',
      price: '₹2,500',
      image: 'https://images.unsplash.com/photo-1516685018646-549198525c1b?q=80&w=1200&auto=format&fit=crop',
      link: '/food_fest3',
      rating: 4.9,
      category: 'Fine Dining'
    },
    {
      id: 4,
      title: 'Traditional Cuisine Showcase',
      organizer: 'Heritage Food Society',
      date: '2024-03-22',
      time: '11:00 AM',
      venue: 'Kanchipuram, Tamil Nadu',
      price: '₹800',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
      link: '/food_fest4',
      rating: 4.7,
      category: 'Traditional'
    },
    {
      id: 5,
      title: 'International Food Expo',
      organizer: 'Global Cuisine Network',
      date: '2024-03-29',
      time: '12:00 PM',
      venue: 'Chennai Trade Centre',
      price: '₹1,200',
      image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1200&auto=format&fit=crop',
      link: '/food_fest5',
      rating: 4.8,
      category: 'International'
    },
    {
      id: 6,
      title: 'Dessert & Bakery Festival',
      organizer: 'Sweet Treats Association',
      date: '2024-04-05',
      time: '2:00 PM',
      venue: 'Phoenix MarketCity, Chennai',
      price: '₹600',
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1200&auto=format&fit=crop',
      link: '/food_fest6',
      rating: 4.5,
      category: 'Desserts'
    }
  ];

  const filteredEvents = foodEvents.filter(event =>
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
            <FaUtensils className="page-icon" />
            <h1>Food Festivals</h1>
            <p>Discover the flavors of authentic cuisine</p>
          </div>
          <div className="search-section">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search food festivals, cuisines, or venues..."
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
            <FaUtensils className="no-results-icon" />
            <h3>No food festivals found</h3>
            <p>Try searching with different keywords</p>
          </div>
        )}
      </div>

      {/* Featured Section */}
      <div className="featured-section">
        <h2>Why Choose PLANIT for Food Events?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <FaTicketAlt className="feature-icon" />
            <h3>Best Prices</h3>
            <p>Get the best deals on food festival tickets with our exclusive partnerships</p>
          </div>
          <div className="feature-item">
            <FaMapMarkerAlt className="feature-icon" />
            <h3>Premium Venues</h3>
            <p>Access to the most prestigious venues and food courts</p>
          </div>
          <div className="feature-item">
            <FaStar className="feature-icon" />
            <h3>Top Chefs</h3>
            <p>Experience culinary masterpieces by renowned chefs and restaurants</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodPage