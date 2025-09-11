import React from 'react'
import { Link } from 'react-router-dom'

function Hackathon_fest1() {
  return (
     <div>
           <>
                <h1>💻 INNOVATE 2026 – Hackathon Challenge</h1>
                <br></br>
              <div className='hiphop_details'>
             
               <div className='image_containerhiphop'>
               <img  src="https://i.pinimg.com/1200x/c1/f9/42/c1f94250264c7c3f4f898f92a9b87e92.jpg"  className="musicimageaadhi" alt="Music Event"/>
               </div>
               <div className='details_event1hip'>
                <h2 className='headhiphop'>📝 Problem Statements </h2>
                <div className='content_hiphop'>
                <h2>1️⃣ AI for Social Good</h2>
                <br />
                <h3 className='hackathonproblemstatements'>Build an AI-powered solution to improve healthcare, education, or sustainability....</h3>
                <br /> 
                <h2>2️⃣ Smart City Solutions</h2>
                <br />
                <h3 className='hackathonproblemstatements'>Create innovative apps or IoT-based systems to make cities safer, greener, and more efficient.</h3>
                <br />
                <h3>REWARDS</h3>
                <br />
                <h3>🥇 1st Prize – ₹1,00,000 + Internship Opportunity</h3>
                <br />
                <h3>🥈 2nd Prize – ₹50,000 + Tech Gadgets</h3>
                <br />
                <h3>🥉 3rd Prize – ₹25,000 + Certificates</h3>
                <br />
                <h3>📍 Venue: Anna University, Chennai</h3>
                <br />
                <h3>📅 Date: 20th – 21st July 2026</h3>
                <br />
                <h3>⏰ Time: 24-Hour Coding Marathon  </h3>
                <h3>👥 Team Size: 2–4 members</h3>
              </div>
               <Link to="/conformationPageHackathonfest1" className='bookEventBtnhackathon'>BOOK EVENT</Link>
               </div>
              </div>
              </>
          
        </div>
  )
}

export default Hackathon_fest1
