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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaWwfWy8E0MffKXqrk0RdL9-l8nbwEd_GWCQ&s"
            className="musicimageaadhi"
            alt="Food Festival Poster"
          />
        </div>

        {/* Right Side - Details */}
        <div className='details_event1hip'>
          <h2 className='headhiphop'>🌍🍴 Global Grub Carnival</h2>
          <div className='content_hiphop'>
            <h3>👨‍🍳 Chef Madhampatty Rangaraj</h3>
            <br />
            <h3>🥘 Types of Dishes</h3>
            <br />
            <h3>• 🥖 French Gourmet & Breads</h3>
            <h3>• 🥘 Mediterranean Flavors</h3>
            <h3>• 🥟 Chinese Dim Sum Specials</h3>
            <h3>• 🍦 Exotic Ice Cream & Desserts</h3>
            <br />
            <h3>📍Venue: Bandra Kurla Complex Grounds, Mumbai</h3>
            <br />
            <h3>📅 Date: 2nd December 2026</h3>
            <br />
            <h3>⏰ Time: 3:00 PM – 11:00 PM</h3>
            <br />
            <h3>👥 Expected Crowd: 60,000+ food explorers</h3>
            <br />
            <img
              src="https://static.asianetnews.com/images/w-1280,h-720,format-jpg,imgid-01k3v2qhmb5n50j4e0vzw0ph1a,imgname-madhampatty-rangaraj-cooku-with-comali-1756476720777.jpg"
              alt="Chef Madhampatty Rangaraj"
              className='Chef_Madhampatty'
            />
          </div>
          <Link to="/conformationPageFoodfest3" className='bookEventBtnFoodFest'>
            🎟️ BOOK EVENT
          </Link>
        </div>
      </div>
    </>
  )
}

export default FoodFest1
