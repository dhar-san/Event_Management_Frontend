import React from 'react'
import { Link } from 'react-router-dom'

function Food_fest4() {
  return (
   <>
      <br />
      <div className='hiphop_details'>
        {/* Left Side - Image */}
        <div className='image_containerhiphop'>
          <img
            src="https://i.pinimg.com/736x/51/aa/1b/51aa1bde4650c83ad8f6adb96f845ff6.jpg"
            className="musicimageaadhi"
            alt="Food Festival Poster"
          />
        </div>

        {/* Right Side - Details */}
        <div className='details_event1hip'>
          <h2 className='headhiphop'>🍴 FLAVORS OF FEST</h2>
          <div className='content_hiphop'>
            <h3>👨‍🍳 Chief Guest: Chef Dheena</h3>
            <br />
            <h3>🥘 Signature Dishes</h3>
            <br />
            <h3>• 🍲 Traditional South Indian Cuisine</h3>
          
            <h3>• 🍛 Fusion Indian Delights</h3>
            <h3>• 🍣 Japanese Street Food</h3>
            <h3>• 🍰 Exotic Desserts</h3>
            <br />
            <h3>📍 Venue: Express Avenue Mall, Chennai</h3>
            <br />
            <h3>📅 Date: 2nd December 2026</h3>
            <br />
            <h3>⏰ Time: 5:00 PM – 11:00 PM</h3>
            <br />
            <h3>👥 Expected Crowd: 15,000+ food explorers</h3>
            <br />
            <img
              src="data:image/jpeg;base64,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"
              alt="Chef Madhampatty Rangaraj"
              className='Chef_Madhampatty'
            />
          </div>
          <Link to="/conformationPageFoodfest4" className='bookEventBtnFoodFest'>
            🎟️ BOOK EVENT
          </Link>
        </div>
      </div>
    </>
  )
}

export default Food_fest4
