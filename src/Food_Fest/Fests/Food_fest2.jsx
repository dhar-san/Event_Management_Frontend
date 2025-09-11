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
            src="https://marketplace.canva.com/EAF0yHZXwm4/1/0/1131w/canva-green-retro-food-festival-poster-RMzIHWTEhl4.jpg"
            className="musicimageaadhi"
            alt="Food Festival Poster"
          />
        </div>

        {/* Right Side - Details */}
        <div className='details_event1hip'>
          <h2 className='headhiphop'>🦁🍴 Snack Safari</h2>
          <div className='content_hiphop'>
            <h3>👨‍🍳 Chief Guest: MadChef Kowshik</h3>
            <br />
            <h3>🥘 Types of Dishes</h3>
            <br />
            <h3>• 🌮 Mexican Street Food</h3>
            <h3>• 🥟 Korean & Japanese Delights</h3>
            <h3>• 🍛 Indian Fusion Cuisine</h3>
            <h3>• 🧁 Global Desserts</h3>
            <br />
            <h3>📍 Venue: Marina Bay Grounds, Chennai</h3>
            <br />
            <h3>📅 Date: 27th April 2026</h3>
            <br />
            <h3>⏰ Time: 4:00 PM – 12:00 Midnight</h3>
            <br />
            <h3>👥 Expected Crowd: 35,000+ food lovers</h3>
            <br />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVhlQ8xygKr0ufvMCdwApPrgkLm20HJFuazw&s"
              alt="MadChef Kowshik"
              className='Chef'
            />
          </div>
          <Link to="/conformationPageFoodfest2" className='bookEventBtnFoodFest'>
            🎟️ BOOK EVENT
          </Link>
        </div>
      </div>
    </>
  )
}

export default FoodFest1
