import React from 'react'
import { Link } from 'react-router-dom'
function Movie_Page() {
  return (
     <>
     <h1>MOVIES FOR YOU</h1>
    <div className='music_page_main_div'>
     
      <div className='music_container1'>
          <Link to="/Moviepage1" className="hiphopPage">
                <img  src="https://m.media-amazon.com/images/M/MV5BMjEwMGQ2YTMtOTIwNy00MDdjLTkyZjQtMmQ3M2Y5M2NjMzY2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"  className="musicimage1" alt="MusicEvent"/>
                 </Link>

        
      </div>
       <div className='music_container2'>
         <Link to="/Moviepage2" className="hiphopPage">
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyQ_xCNLfK61Skpi1kLRFtn0gafFs9Az_Vg&s"  className="musicimage2" alt="Music Event"/>
          </Link>
        
        
      </div>
       <div className='music_container3'>
         <Link to="/Moviepage3" className="hiphopPage">
                <img  src="https://static.toiimg.com/photo/106048361.cms"  className="musicimage3" alt="Music Event"/>
        </Link>
        
        
      </div>

    <div className='music_container4'>
       <Link to="/Moviepage4" className="hiphopPage">
        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxoTPOVJDQ9kFt3IeEP1_ke4eR-tiX5EJLA&s"  className="musicimage4" alt="Music Event"/>
      </Link>
            
            
    </div>

    <div className='music_container5'>
       <Link to="/Moviepage5" className="hiphopPage">
                <img  src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/white-modern-%26-minimal-business-networking-ev-design-template-b30318cda7335df0a472ff2962adec91.jpg?ts=1742306632"  className="musicimage5" alt="Music Event"/>
      </Link>
            
            
    </div>
    <div className='music_container6'>
       <Link to="/Moviepage6" className="hiphopPage">
                <img  src="https://marketplace.canva.com/EAFttR0lcWI/1/0/1131w/canva-teal-and-orange-gradient-abstract-tech-conference-poster-HB92yHY7UXs.jpg"  className="musicimage6" alt="Music Event"/>
                 </Link>
            
            
    </div>
      
    </div>
    </>
  )
}

export default Movie_Page
  