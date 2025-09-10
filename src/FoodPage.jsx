import React from 'react'
import { Link } from 'react-router-dom'

function FoodPage() {
  return (
    <>
         <h1>FOOD FESTIVAL</h1>
        <div className='music_page_main_div'>
         
          <div className='music_container1'>
              <Link to="/food_fest1" className="hiphopPage">
                    <img  src="https://i.pinimg.com/1200x/c9/bb/46/c9bb465e77ff65fc1f0dfbf6aef6714c.jpg"  className="musicimage1" alt="FOOD FEST"/>
                     </Link>
    
            
          </div>
           <div className='music_container2'>
             <Link to="/food_fest2" className="hiphopPage">
                <img  src="https://marketplace.canva.com/EAF0yHZXwm4/1/0/1131w/canva-green-retro-food-festival-poster-RMzIHWTEhl4.jpg"  className="musicimage2" alt="FOOD FEST"/>
              </Link>
            
            
          </div>
           <div className='music_container3'>
             <Link to="/food_fest3" className="hiphopPage">
                    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaWwfWy8E0MffKXqrk0RdL9-l8nbwEd_GWCQ&s"  className="musicimage3" alt="Music Event"/>
            </Link>
            
            
          </div>
    
        <div className='music_container4'>
           <Link to="/pradeep_concert" className="hiphopPage">
            <img  src="https://i.pinimg.com/1200x/b4/1e/00/b41e008f477c1eb12117197eabce0168.jpg"  className="musicimage4" alt="Music Event"/>
          </Link>
                
                
        </div>
    
        <div className='music_container5'>
           <Link to="/billie_concert" className="hiphopPage">
                    <img  src="https://i.pinimg.com/736x/61/6b/a3/616ba36c2d60d526bc7303a9587d9043.jpg"  className="musicimage5" alt="Music Event"/>
          </Link>
                
                
        </div>
        <div className='music_container6'>
           <Link to="/cold_concert" className="hiphopPage">
                    <img  src="https://i.pinimg.com/1200x/58/18/a1/5818a1379893a2ef60ae220619462a46.jpg"  className="musicimage6" alt="Music Event"/>
                     </Link>
                
                
        </div>
          
        </div>
        </>
   
  )
}

export default FoodPage
