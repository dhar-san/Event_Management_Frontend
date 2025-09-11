import React from 'react'
import { Link } from 'react-router-dom'

function FoodFest1() {
  return (
    <>
      <br />
      <div className='hiphop_details'>

        {/* Left Side - Image */}
        <div className='image_containerhiphop'>
          <img
            src="https://i.pinimg.com/1200x/c9/bb/46/c9bb465e77ff65fc1f0dfbf6aef6714c.jpg"
            className="musicimageaadhi"
            alt="Food Festival Poster"
          />
        </div>

        {/* Right Side - Details */}
        <div className='details_event1hip'>
          <h2 className='headhiphop'>🍴 YUM YUM YATRA</h2>
          <div className='content_hiphop'>
            <h3>👨‍🍳 Chief Guest: Chef Dhamu</h3>
            <br />
            <h3>🥘 Types of Dishes</h3>
            <br />
            <h3>• 🍝 Italian Cuisine</h3>
            <h3>• 🍜 Asian Cuisine</h3>
            <h3>• 🍔 American & Latin Cuisine</h3>
            <h3>• 🥗 African Cuisine</h3>
            <br />
            <h3>📍 Venue: Phoenix Market City</h3>
            <br />
            <h3>📅 Date: 11th March 2026</h3>
            <br />
            <h3>⏰ Time: 6:30 PM – 11:00 PM</h3>
            <br />
            <h3>👥 Expected Crowd: 20,000+ people</h3>
            <br />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9k5RRHMuzSn7MBgcGaHrUzYErL06o7jIC5g&s alt=media&token=1f5f0b1e-2f3e-4d0e-8f7d-1a5f3e6b3c8c"
              alt="Chef Dhamu"
              className='Chef'
            />
          </div>
          <Link to="/conformationPageFoodfest1" className='bookEventBtnFoodFest'>
            🎟️ BOOK EVENT
          </Link>
        </div>
      </div>
    </>
  )
}

export default FoodFest1
