import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGavel, FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaTicketAlt, FaStar } from 'react-icons/fa'

function Auction_Page() {
  const [searchQuery, setSearchQuery] = useState('');

  const auctionEvents = [
    {
      id: 1,
      title: 'Art & Collectibles Auction',
      organizer: 'Prestige Auction House',
      date: '2024-03-28',
      time: '7:00 PM',
      venue: 'ITC Grand Chola',
      price: '₹1,500',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=300&fit=crop',
      link: '/auctionpage1',
      rating: 4.8,
      category: 'Art & Collectibles'
    },
    {
      id: 2,
      title: 'Jewelry & Luxury Auction',
      organizer: 'Prestige Auction House',
      date: '2024-03-28',
      time: '7:00 PM',
      venue: 'ITC Grand Chola',
      price: '₹1,500',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=300&fit=crop',
      link: '/auctionpage2',
      rating: 4.7,
      category: 'Jewelry'
    },
    {
      id: 3,
      title: 'Vintage Cars & Automobiles',
      organizer: 'Classic Motors Auction',
      date: '2024-04-05',
      time: '6:00 PM',
      venue: 'Chennai Trade Centre',
      price: '₹2,000',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&h=300&fit=crop',
      link: '/auctionpage3',
      rating: 4.9,
      category: 'Automobiles'
    },
    {
      id: 4,
      title: 'Rare Books & Manuscripts',
      organizer: 'Literary Heritage Auction',
      date: '2024-04-12',
      time: '2:00 PM',
      venue: 'Connemara Library',
      price: '₹1,200',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop',
      link: '/auctionpage4',
      rating: 4.6,
      category: 'Books'
    },
    {
      id: 5,
      title: 'Watches & Timepieces',
      organizer: 'Luxury Time Auction House',
      date: '2024-04-19',
      time: '7:30 PM',
      venue: 'Park Hyatt',
      price: '₹1,800',
      image: 'https://images.unsplash.com/photo-1523170335258-f5c6c6f7ffa1?w=500&h=300&fit=crop',
      link: '/auctionpage5',
      rating: 4.8,
      category: 'Watches'
    },
    {
      id: 6,
      title: 'Electronics & Gadgets',
      organizer: 'Tech Auction House',
      date: '2024-04-26',
      time: '6:00 PM',
      venue: 'Chennai Convention Centre',
      price: '₹1,000',
      image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=500&h=300&fit=crop',
      link: '/auctionpage6',
      rating: 4.5,
      category: 'Electronics'
    }
  ];

  const filteredEvents = auctionEvents.filter(event =>
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
            <FaGavel className="page-icon" />
            <h1>Auction Events</h1>
            <p>Experience the thrill of bidding and winning</p>
          </div>
          <div className="search-section">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search auctions, items, or categories..."
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
            <FaGavel className="no-results-icon" />
            <h3>No auctions found</h3>
            <p>Try searching with different keywords</p>
          </div>
        )}
      </div>

      <div className="featured-section">
        <h2>Why Choose PLANIT for Auction Events?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <FaTicketAlt className="feature-icon" />
            <h3>Best Prices</h3>
            <p>Get the best deals on auction registrations with our exclusive partnerships</p>
          </div>
          <div className="feature-item">
            <FaMapMarkerAlt className="feature-icon" />
            <h3>Premium Venues</h3>
            <p>Access to the most prestigious venues and auction houses</p>
          </div>
          <div className="feature-item">
            <FaStar className="feature-icon" />
            <h3>Top Items</h3>
            <p>Bid on rare and valuable items from renowned collectors and dealers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auction_Page
     
    //   <div className='music_container1'>
    //       <Link to="/Auctionpage1" className="hiphopPage">
    //             <img  src="https://thumbs.dreamstime.com/b/auction-banner-poster-template-auctioneer-flat-vector-illustration-public-sales-promotion-card-design-offering-up-goods-232378143.jpg" className="musicimage2" alt="Music Event" />
    //       </Link>


    //     </div><div className='music_container3'>
    //         <Link to="/Auctionpage3" className="hiphopPage">
    //           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIGzFilRgJvOcICGo-pFPAN8l0lRpSVVAgwQ&s" className="musicimage3" alt="Music Event" />
    //         </Link>


    //       </div><div className='music_container4'>
    //         <Link to="/Auctionpage4" className="hiphopPage">
    //           <img src="https://resource.designwiz.com/designwiz/compressed/exciting-auto-auction-event-flyer-template-pib5mka6e41bac.png" className="musicimage4" alt="Music Event" />
    //         </Link>


    //       </div><div className='music_container5'>
    //         <Link to="/Auctionpage5" className="hiphopPage">
    //           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUkvNT_D3pOuFaz92Nm6GuUpX3-6Vl9Ru0IA&s" className="musicimage5" alt="Music Event" />
    //         </Link>


    //       </div><div className='music_container6'>
    //         <Link to="/Auctionpage6" className="hiphopPage">
    //           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG3dvHOedMScrTNyOlNwpRbEupy_VFL7UCkg&s" className="musicimage6" alt="Music Event" />
    //         </Link>


    //       </div></>
      
    // </div>
    // </>
  


  