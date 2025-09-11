import React from 'react'
import { Link } from 'react-router-dom'

function HackathanPage() {
  return (
     <>
     <h1>HACKATHON  EVENTS</h1>
    <div className='music_page_main_div'>
     
      <div className='music_container1'>
          <Link to="/hackathonpage1" className="hiphopPage">
                <img  src="https://i.pinimg.com/1200x/c1/f9/42/c1f94250264c7c3f4f898f92a9b87e92.jpg"  className="musicimage1" alt="Music Event"/>
                 </Link>

        
      </div>
       <div className='music_container2'>
         <Link to="/hackathonpage2" className="hiphopPage">
            <img  src="https://i.pinimg.com/736x/95/04/ea/9504ea9721e01951bb73ddb781399abc.jpg"  className="musicimage2" alt="Music Event"/>
          </Link>
        
        
      </div>
       <div className='music_container3'>
         <Link to="/hackathonpage3" className="hiphopPage">
                <img  src="https://i.pinimg.com/736x/1f/d8/ab/1fd8ab4a3b823b6fc02984142a0a1779.jpg"  className="musicimage3" alt="Music Event"/>
        </Link>
        
        
      </div>

    <div className='music_container4'>
       <Link to="/hackathonpage4" className="hiphopPage">
        <img  src="https://i.pinimg.com/1200x/a6/07/35/a60735f39ac3becbceae4df80c036b27.jpg"  className="musicimage4" alt="Music Event"/>
      </Link>
            
            
    </div>

    <div className='music_container5'>
       <Link to="/hackathonpage5" className="hiphopPage">
                <img  src="https://i.pinimg.com/736x/5e/e5/24/5ee5248fe49db285c2665d9ec9608b42.jpg"  className="musicimage5" alt="Music Event"/>
      </Link>
            
            
    </div>
    <div className='music_container6'>
       <Link to="/hackathonpage6" className="hiphopPage">
                <img  src="https://i.pinimg.com/736x/25/2c/b8/252cb8ca9ac86553efb5f617a749a1d6.jpg"  className="musicimage6" alt="Music Event"/>
                 </Link>
            
            
    </div>
      
    </div>
    </>
  )
}

export default HackathanPage
