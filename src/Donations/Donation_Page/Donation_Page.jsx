import React from 'react'
import { Link } from 'react-router-dom'
function Donation_Page() {
  return (
     <>
     <h1>DONATION EVENTS</h1>
    <div className='music_page_main_div'>
     
      <div className='music_container1'>
          <Link to="/Donationpage1" className="hiphopPage">
                <img  src="https://i.pinimg.com/1200x/c4/35/2c/c4352ccad9814575ff5df83aff2c0cc5.jpg"  className="musicimage1" alt="Music Event"/>
                 </Link>

        
      </div>
       <div className='music_container2'>
         <Link to="/Donationpage2" className="hiphopPage">
            <img  src="https://i.pinimg.com/736x/ef/c7/c2/efc7c23485e18929243c71ec39e63fbe.jpg"  className="musicimage2" alt="Music Event"/>
          </Link>
        
        
      </div>
       <div className='music_container3'>
         <Link to="/Donationpage3" className="hiphopPage">
                <img  src="https://i.pinimg.com/1200x/56/76/04/567604a8fabfd9650237a052ac26c3e6.jpg"  className="musicimage3" alt="Music Event"/>
        </Link>
        
        
      </div>

    <div className='music_container4'>
       <Link to="/Donationpage4" className="hiphopPage">
        <img  src="https://i.pinimg.com/736x/43/68/ab/4368ab0da8b03b1bb7401b192222d590.jpg"  className="musicimage4" alt="Music Event"/>
      </Link>
            
            
    </div>

    <div className='music_container5'>
       <Link to="/Donationpage5" className="hiphopPage">
                <img  src="https://i.pinimg.com/736x/eb/37/8e/eb378e0b0070dcfc0532bc1326c79cf8.jpg"  className="musicimage5" alt="Music Event"/>
      </Link>
            
            
    </div>
    <div className='music_container6'>
       <Link to="/Donationpage6" className="hiphopPage">
                <img  src="https://i.pinimg.com/1200x/ea/15/2a/ea152afb65fcc9bd4ba92c5ec35addb6.jpg"  className="musicimage6" alt="Music Event"/>
                 </Link>
            
            
    </div>
      
    </div>
    </>
  )
}

export default Donation_Page
