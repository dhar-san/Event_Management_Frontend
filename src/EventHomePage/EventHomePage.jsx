import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaMusic, FaUtensils, FaCode, FaHeart, FaGavel, FaFilm, FaBusinessTime, FaBars, FaTimes, FaBell, FaSearch, FaUser, FaHome, FaCalendar } from 'react-icons/fa'

function EventHomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const eventCategories = [
    {
      id: 1,
      title: 'Music Concerts',
      icon: FaMusic,
      link: '/music_page',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHOuKndCfpoz9iu1wt_wca_BfqkUA60qOS87iwXapLf2PPWf0Dpd7wGTrHdG-ttAr293w&usqp=CAU',
      description: 'Live performances and concerts'
    },
    {
      id: 2,
      title: 'Food Festivals',
      icon: FaUtensils,
      link: '/food_page',
      image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-fest-festival-flyer-template-design-2b72a799f123222eb6a17780cd7d299f_screen.jpg?ts=1699707670',
      description: 'Culinary experiences and food events'
    },
    {
      id: 3,
      title: 'Hackathons',
      icon: FaCode,
      link: '/hackathon_page',
      image: 'https://imgs.search.brave.com/t6DuuVKKwNU9wgh9hHGTSdIPkWQU0saFRWQjlNBNuog/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA0/NjE2NTgwNi9waG90/by9oYWNrYXRob24t/dGVjaG5vbG9neS10/aHJlYXQtb25saW5l/LWNvZGluZy0yZC1p/bGx1c3RyYXRpb24u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXBfSzhYdmtwYlds/UEVJWUVTdnVkQ29u/MFA2YlN6bDNnOU1E/eHE0TFlyM0k9',
      description: 'Coding competitions and tech events'
    },
    {
      id: 4,
      title: 'Charity Events',
      icon: FaHeart,
      link: '/Donation_page',
      image: 'https://imgs.search.brave.com/leC_m6B2sk5KTvZ4jiJEOjjhhWgeDtTQy0U0wx1j2tI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFGdXJI/VFFBcjAvMS8wLzEx/MzF3L2NhbnZhLWJs/dXNoLXdoaXRlLW1v/ZGVybi1kb29kbGUt/aGFuZHMtY2hhcml0/eS1kb25hdGlvbnMt/Zmx5ZXItTXZKVnNu/WTl3T1EuanBn',
      description: 'Fundraising and charitable causes'
    },
    {
      id: 5,
      title: 'Auctions',
      icon: FaGavel,
      link: '/Auction_page',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3fPApCe3SF9tpaM9knEQ9ULl4JHA5UKHI_w&s',
      description: 'Bidding events and collectibles'
    },
    {
      id: 6,
      title: 'Special Events',
      icon: FaCalendar,
      link: '/Events_page',
      image: 'https://i.pinimg.com/736x/7b/bd/0b/7bbd0bbe2a6746e10c2f0500b1420d41.jpg',
      description: 'Birthdays, parties, and celebrations'
    },
    {
      id: 7,
      title: 'Business Meetings',
      icon: FaBusinessTime,
      link: '/buisness_page',
      image: 'https://imgs.search.brave.com/KlqTMzBIqByR0R_muz3bMZQXPldz7iPQshgD3l83LZ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNiL2I0/L2EwLzNiYjRhMGFh/NDAxNTZiODI2YjZj/MDgyNmY2NjlhZDE1/LmpwZw',
      description: 'Corporate events and meetings'
    },
    {
      id: 8,
      title: 'Movie Screenings',
      icon: FaFilm,
      link: '/movie_page',
      image: 'https://imgs.search.brave.com/ZK4Rv_hOH03rQQ_wLgybHNpvYXdM1cgSI0mmfNo8LdU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvY2luZW1hLXRp/Y2tldC1jYXJkLW11/c2ljLW1vdmllLWZl/c3RpdmFsLXZlY3Rv/ci1pbGx1c3RyYXRp/b25fMTIzNDQ3LTQz/NjEuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MA',
      description: 'Film premieres and screenings'
    }
  ];

  const filteredEvents = eventCategories.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="event-home-page">
      {/* Modern Navigation */}
      <nav className="modern-navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <img src='logo2.png' className='navbar-logo' alt="PLANIT Logo"/>
            <span className="brand-name">PLANIT</span>
          </div>

          <div className="navbar-search">
            <div className="search-container">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          <div className="navbar-menu">
            <Link to="/" className="nav-link">
              <FaHome className="nav-icon" />
              <span>Home</span>
            </Link>
            <Link to="/event_home_page" className="nav-link active">
              <FaCalendar className="nav-icon" />
              <span>Events</span>
            </Link>
            <button className="notification-btn">
              <FaBell className="nav-icon" />
              <span className="notification-badge">3</span>
            </button>
            <div className="profile-dropdown">
              <img 
                src='https://imgs.search.brave.com/rU-fYLiSZS9vC9mWWlOHXpgcezLs1OJyEIotT8CVuR4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE0LzMyLzcxLzg3/LzM2MF9GXzE0MzI3/MTg3MjFfTmNBZEE4/cDNvQ2Y5Sk9UT0dh/MGpIdUs4dk91OEZo/dmcuanBn' 
                className='profile-avatar' 
                alt="Profile"
              />
            </div>
          </div>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-search">
              <div className="search-container">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
              </div>
            </div>
            <div className="mobile-nav-links">
              <Link to="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                <FaHome className="nav-icon" />
                <span>Home</span>
              </Link>
              <Link to="/event_home_page" className="mobile-nav-link active" onClick={() => setIsMobileMenuOpen(false)}>
                <FaCalendar className="nav-icon" />
                <span>Events</span>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-header">
          <h1 className="page-title">Discover Amazing Events</h1>
          <p className="page-subtitle">Find and join events that match your interests</p>
        </div>

        <div className="events-grid">
          {filteredEvents.map((event) => {
            const IconComponent = event.icon;
            return (
              <Link 
                key={event.id} 
                to={event.link} 
                className="event-card"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="event-image-container">
                  <img src={event.image} className="event-image" alt={event.title} />
                  <div className="event-overlay">
                    <IconComponent className="event-icon" />
                  </div>
                </div>
                <div className="event-content">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                  <div className="event-footer">
                    <span className="event-cta">Explore Events</span>
                    <IconComponent className="cta-icon" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {filteredEvents.length === 0 && searchQuery && (
          <div className="no-results">
            <FaSearch className="no-results-icon" />
            <h3>No events found</h3>
            <p>Try searching with different keywords</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default EventHomePage