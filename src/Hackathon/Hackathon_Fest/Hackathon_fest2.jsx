import React from 'react'
import { Link } from 'react-router-dom'

function Hackathon_fest2() {
  return (
    <div>
                   <>
                    <h1>🧠 BrainWave 2026</h1>
                    <br></br>
                    <div className='hiphop_details'>
                     <div className='image_containerhiphop'>
                     <img  src="https://i.pinimg.com/736x/95/04/ea/9504ea9721e01951bb73ddb781399abc.jpg"  className="musicimageaadhi" alt="Music Event"/>
                     </div>
                     <div className='details_event1hip'>
                      <h2 className='headhiphop'>📝 Project Titles </h2>
                      <div className='content_hiphop'>
                      <h2>1️⃣ Smart Health Tracker</h2>
                      <br />
                      <h2>2️⃣ AI-Powered Learning Assistant</h2>
                      <br />
                      <h2>3️⃣ Virtual Reality Shopping Experience</h2>
                      <br />
                      <h2>4️⃣ Blockchain-based Voting System</h2>
                      <br />
                      <h3>🥇 1st Prize – ₹1,00,000 + Internship Opportunity</h3>
                      <br />
                      <h3>🥈 2nd Prize – ₹50,000 + Tech Gadgets</h3>
                      <br />
                      <h3>🥉 3rd Prize – ₹25,000 + Certificates</h3>
                      <br />
                      <h3>📍 Venue: IIT Madras Research Park, Chennai</h3>
                      <br />
                      <h3>📅 Date: 10th – 11th August 2026</h3>
                      <br />
                      <h3>⏰ Duration: 36-Hour Coding Challenge</h3>
                      <br />
                      <h3>👥 Team Size: 2–4 members</h3>
                    </div>
                     <Link to="/conformationPageHackathonfest2" className='bookEventBtnhackathon'>BOOK EVENT</Link>
                     </div>
                    </div>
                    </>
    </div>
  )
}

export default Hackathon_fest2
