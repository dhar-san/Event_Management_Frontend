import React from 'react'
import { Link } from 'react-router-dom'

function Food_fest6() {
  return (
     <>
         <br />
         <div className='hiphop_details'>
           {/* Left Side - Image */}
           <div className='image_containerhiphop'>
             <img
               src="https://i.pinimg.com/1200x/1c/a5/40/1ca540c262364bb4eb54a837e7f79d1b.jpg"
               className="musicimageaadhi"
               alt="Food Festival Poster"
             />
           </div>
   
           {/* Right Side - Details */}
           <div className='details_event1hip'>
             <h2 className='headhiphop'>🍴 GOURMET GRANDEUR</h2>
             <div className='content_hiphop'>
               <h3>👨‍🍳 Chief Guest: Chef Sanjeev Kapoor</h3>
               <br />
               <h3>🥘 Culinary Experiences</h3>
               <br />
               <h3>• 🍛 Innovative Indian Fusion </h3>
             
               <h3>• 🍝 Italian Classics with a Twist  </h3>
               <h3>• 🍷 Wine & Food Pairing Masterclass</h3>
               <h3>• 🥂 Sparkling Wines & Champagne </h3>
               <br />
               <h3>📍 Venue: ITC Grand Chola, Chennai</h3>
               <br />
               <h3>📅 Date: 28th May 2026</h3>
               <br />
               <h3>⏰ Time: 7:00 PM – 11:00 PM</h3>
               <br />
               <h3>👥 Expected Crowd: 10,000+ food explorers</h3>
               <br />
               <img
                 src="https://i.pinimg.com/736x/1d/26/07/1d260742b3a8df3ad833535e1e992a96.jpg"
                 alt="Chef Madhampatty Rangaraj"
                 className='Chef_Madhampatty'
               />
             </div>
             <Link to="/conformationPageFoodfest6" className='bookEventBtnFoodFest'>
               🎟️ BOOK EVENT
             </Link>
           </div>
         </div>
       </>
  )
}

export default Food_fest6
