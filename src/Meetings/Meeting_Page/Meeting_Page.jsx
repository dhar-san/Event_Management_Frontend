import React from 'react'
import { Link } from 'react-router-dom'
function Events_Page() {
  return (
     <>
     <h1>UPCOMING MEETINGS</h1>
    <div className='music_page_main_div'>
     
      <div className='music_container1'>
          <Link to="/Meetingpage1" className="hiphopPage">
                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToDMYlriiF0wTQJNk3VcRG-YKwDCFM4henkQ&s"  className="musicimage1" alt="MusicEvent"/>
                 </Link>

        
      </div>
       <div className='music_container2'>
         <Link to="/Meetingpage2" className="hiphopPage">
            <img  src="https://media.istockphoto.com/id/2159704830/vector/technology-conference-event-invitation-template-creative-geometric-abstract-futuristic.jpg?s=612x612&w=0&k=20&c=dXyftVYhpg92eyTaY0o1dTTZdMU0NKYAXXKZS8I9Ncw="  className="musicimage2" alt="Music Event"/>
          </Link>
        
        
      </div>
       <div className='music_container3'>
         <Link to="/Meetingpage3" className="hiphopPage">
                <img  src="https://i.pinimg.com/236x/8c/3c/71/8c3c71aa519b6f3e1a371751830428df.jpg"  className="musicimage3" alt="Music Event"/>
        </Link>
        
        
      </div>

    <div className='music_container4'>
       <Link to="/Meetingpage4" className="hiphopPage">
        <img  src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-meeting-invitation-template-design-3e69fe291adc5d28cc6d170026d6cb79.jpg?ts=1734165612"  className="musicimage4" alt="Music Event"/>
      </Link>
            
            
    </div>

    <div className='music_container5'>
       <Link to="/Meetingpage5" className="hiphopPage">
                <img  src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/white-modern-%26-minimal-business-networking-ev-design-template-b30318cda7335df0a472ff2962adec91.jpg?ts=1742306632"  className="musicimage5" alt="Music Event"/>
      </Link>
            
            
    </div>
    <div className='music_container6'>
       <Link to="/Meetingpage6" className="hiphopPage">
                <img  src="https://marketplace.canva.com/EAFttR0lcWI/1/0/1131w/canva-teal-and-orange-gradient-abstract-tech-conference-poster-HB92yHY7UXs.jpg"  className="musicimage6" alt="Music Event"/>
                 </Link>
            
            
    </div>
      
    </div>
    </>
  )
}

export default Events_Page
  