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
           <Link to="/food_fest4" className="hiphopPage">
            <img  src="https://i.pinimg.com/736x/51/aa/1b/51aa1bde4650c83ad8f6adb96f845ff6.jpg"  className="musicimage4" alt="Music Event"/>
          </Link>
                
                
        </div>
    
        <div className='music_container5'>
           <Link to="/food_fest5" className="hiphopPage">
                    <img  src="https://i.pinimg.com/1200x/19/b7/78/19b77895cc44b82ec3526f9f9af9a9a7.jpg"  className="musicimage5" alt="Music Event"/>
          </Link>
                
                
        </div>
        <div className='music_container6'>
           <Link to="/food_fest6" className="hiphopPage">
                    <img  src="https://i.pinimg.com/1200x/1c/a5/40/1ca540c262364bb4eb54a837e7f79d1b.jpg"  className="musicimage6" alt="Music Event"/>
                     </Link>
                
                
        </div>
          
        </div>
        </>
   
  )
}

export default FoodPage
