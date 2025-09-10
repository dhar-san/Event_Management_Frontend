import React from 'react'
import { Link } from 'react-router-dom'

function Food_fest5() {
  return (
      <>
         <br />
         <div className='hiphop_details'>
           {/* Left Side - Image */}
           <div className='image_containerhiphop'>
             <img
               src="https://i.pinimg.com/1200x/19/b7/78/19b77895cc44b82ec3526f9f9af9a9a7.jpg"
               className="musicimageaadhi"
               alt="Food Festival Poster"
             />
           </div>
   
           {/* Right Side - Details */}
           <div className='details_event1hip'>
             <h2 className='headhiphop'>🍴 CULINARY CARNIVAL</h2>
             <div className='content_hiphop'>
               <h3>👨‍🍳 Chief Guest: Chef Venkatesh Bhat</h3>
               <br />
               <h3>🥘 Special Highlights </h3>
               <br />
               <h3>• 🍛 Authentic South Indian Flavors</h3>
             
               <h3>• 🍲 Signature Chettinad Specials</h3>
               <h3>• 🍜 Asian Fusion Treats</h3>
               <h3>• 🍨 Royal Desserts Collection</h3>
               <br />
               <h3>📍 Venue: Chennai Trade Centre, Nandambakkam</h3>
               <br />
               <h3>📅 Date: 18th May 2026</h3>
               <br />
               <h3>⏰ Time: 6:00 PM – 11:00 PM</h3>
               <br />
               <h3>👥 Expected Crowd: 18,000+ food explorers</h3>
               <br />
               <img
                 src="https://i.pinimg.com/736x/43/e8/6b/43e86b5ba8d31889babb10a0199ceef4.jpg"
                 alt="Chef Madhampatty Rangaraj"
                 className='Chef_Madhampatty'
               />
             </div>
             <Link to="/conformationPageFoodfest5" className='bookEventBtnFoodFest'>
               🎟️ BOOK EVENT
             </Link>
           </div>
         </div>
       </>
  )
}

export default Food_fest5
