import React from 'react'
import { Link } from 'react-router-dom'

function Hackathon_fest3() {
  return (
    <div>
                   <>
                    <h1>🌐 FutureTech 2026 – Global Hack Jam</h1>
                    <br></br>
                    <div className='hiphop_details'>
                     <div className='image_containerhiphop'>
                     <img  src="https://i.pinimg.com/736x/1f/d8/ab/1fd8ab4a3b823b6fc02984142a0a1779.jpg"  className="musicimageaadhi" alt="Music Event"/>
                     </div>
                     <div className='details_event1hip'>
                      <h2 className='headhiphop'>📝 Innovation Tracks </h2>
                      <div className='content_hiphop'>
                      <h2>1️⃣ Space-Tech Communication Systems</h2>
                      <br />
                      <h2>2️⃣ AI for Disaster Management</h2>
                      <br />
                      <h2>3️⃣ Green Energy Automation</h2>
                      <br />
                      <h2>4️⃣ Cybersecurity & Ethical Hacking</h2>
                      <br />
                      <h3>🥇 1st Prize – ₹2,00,000 + Sponsored Trip to Silicon Valley</h3>
                      <br />
                      <h3>🥈 2nd Prize – ₹1,00,000 + Laptops & Gadgets</h3>
                      <br />
                      <h3>🥉 3rd Prize – ₹50,000 + Exclusive Mentorship Program</h3>
                      <br />
                      <h3>📍 Venue: Hyderabad International Convention Centre</h3>
                      <br />
                      <h3>📅 Date: 5th – 6th October 2026</h3>
                      <br />
                      <h3>⏰ Duration: 30-Hour Overnight Hack</h3>
                      <br />
                      <h3>👥 Team Size: 2–6 members</h3>
                    </div>
                     <Link to="/conformationPageHackathonfest3" className='bookEventBtnhackathon'>BOOK EVENT</Link>
                     </div>
                    </div>
                    </>
    </div>
  )
}

export default Hackathon_fest3
