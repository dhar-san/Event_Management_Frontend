import React from 'react'
import { Link } from 'react-router-dom'
function Events_Page() {
  return (
     <>
     <h1>VARIOUS EVENTS</h1>
    <div className='music_page_main_div'>
     
      <div className='music_container1'>
          <Link to="/Eventpage1" className="hiphopPage">
                <img  src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/kids-birthday-party-square-flyer-design-template-1d3c875c19b088fc7f620302fb004f80_screen.jpg?ts=1738003986"  className="musicimage1" alt="MusicEvent"/>
                 </Link>

        
      </div>
       <div className='music_container2'>
         <Link to="/Eventpage2" className="hiphopPage">
            <img  src="https://static.vecteezy.com/system/resources/previews/040/812/815/non_2x/cocktail-party-banner-or-poster-template-for-networking-or-business-reception-with-aperitif-and-alcohol-drinks-invitation-leaflet-or-flyer-with-glasses-full-of-various-beverage-with-bubbles-vector.jpg"  className="musicimage2" alt="Music Event"/>
          </Link>
        
        
      </div>
       <div className='music_container3'>
         <Link to="/Eventpage3" className="hiphopPage">
                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyr-2Pg39wyhTUJk-LXJFCVGocmRWhjn9_tA&s"  className="musicimage3" alt="Music Event"/>
        </Link>
        
        
      </div>

    <div className='music_container4'>
       <Link to="/Eventpage4" className="hiphopPage">
        <img  src="https://files.codegrape.com/199891.jpg"  className="musicimage4" alt="Music Event"/>
      </Link>
            
            
    </div>

    <div className='music_container5'>
       <Link to="/Eventpage5" className="hiphopPage">
                <img  src="https://www.shutterstock.com/image-vector/christmas-party-poster-template-shining-260nw-1198234690.jpg"  className="musicimage5" alt="Music Event"/>
      </Link>
            
            
    </div>
    <div className='music_container6'>
       <Link to="/Eventpage6" className="hiphopPage">
                <img  src="https://www.shutterstock.com/shutterstock/photos/676250194/display_1500/stock-vector-rock-night-party-poster-flyer-vintage-styled-vector-illustration-676250194.jpg"  className="musicimage6" alt="Music Event"/>
                 </Link>
            
            
    </div>
      
    </div>
    </>
  )
}

export default Events_Page
  