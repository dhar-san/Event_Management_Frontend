import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUtensils, FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaTicketAlt, FaStar } from 'react-icons/fa'

function FoodPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const foodEvents = [
    {
      id: 1,
      title: 'Yum Yum Yatra',
      chef: 'Chef Dhamu',
      date: '2024-03-11',
      time: '6:30 PM',
      venue: 'Phoenix Market City',
      price: '₹2,500',
      image: 'https://i.pinimg.com/1200x/c9/bb/46/c9bb465e77ff65fc1f0dfbf6aef6714c.jpg',
      link: '/food_fest1',
      rating: 4.7,
      category: 'Multi-Cuisine'
    },
    {
      id: 2,
      title: 'Street Food Festival',
      chef: 'Food Lovers Association',
      date: '2024-04-02',
      time: '12:00 PM',
      venue: 'T. Nagar Grounds',
      price: '₹2,000',
      image: 'https://marketplace.canva.com/EAF0yHZXwm4/1/0/1131w/canva-green-retro-food-festival-poster-RMzIHWTEhl4.jpg',
      link: '/food_fest2',
      rating: 4.6,
      category: 'Street Food'
    },
    {
      id: 3,
      title: 'International Cuisine Festival',
      chef: 'Global Food Society',
      date: '2024-04-09',
      time: '11:00 AM',
      venue: 'Phoenix Market City',
      price: '₹2,500',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaWwfWy8E0MffKXqrk0RdL9-l8nbwEd_GWCQ&s',
      link: '/food_fest3',
      rating: 4.8,
      category: 'International'
    },
    {
      id: 4,
      title: 'Dessert & Sweet Festival',
      chef: 'Sweet Treats Society',
      date: '2024-04-16',
      time: '2:00 PM',
      venue: 'Express Avenue Mall',
      price: '₹1,500',
      image: 'https://i.pinimg.com/736x/51/aa/1b/51aa1bde4650c83ad8f6adb96f845ff6.jpg',
      link: '/food_fest4',
      rating: 4.5,
      category: 'Desserts'
    },
    {
      id: 5,
      title: 'Wine & Dine Festival',
      chef: 'Culinary Arts Society',
      date: '2024-04-23',
      time: '7:00 PM',
      venue: 'Taj Coromandel',
      price: '₹3,500',
      image: 'https://i.pinimg.com/1200x/19/b7/78/19b77895cc44b82ec3526f9f9af9a9a7.jpg',
      link: '/food_fest5',
      rating: 4.9,
      category: 'Fine Dining'
    },
    {
      id: 6,
      title: 'Gourmet Chef\'s Table',
      chef: 'Master Chef Society',
      date: '2024-04-30',
      time: '7:30 PM',
      venue: 'ITC Grand Chola',
      price: '₹4,500',
      image: 'https://i.pinimg.com/1200x/1c/a5/40/1ca540c262364bb4eb54a837e7f79d1b.jpg',
      link: '/food_fest6',
      rating: 4.9,
      category: 'Gourmet'
    }
  ];

  const filteredEvents = foodEvents.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.chef.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
            <p>Experience the magic of culinary delights</p>
          </div>
          <div className="search-section">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search food festivals, chefs, or cuisines..."
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
                  <p className="event-artist">by {event.chef}</p>
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
            <p>Access to the most prestigious venues and culinary spaces</p>
          </div>
          <div className="feature-item">
            <FaStar className="feature-icon" />
            <h3>Top Chefs</h3>
            <p>Experience culinary masterpieces by renowned national and international chefs</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodPage
