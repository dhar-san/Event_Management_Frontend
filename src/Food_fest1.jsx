import React from 'react'
import { Link } from 'react-router-dom'


function food_fest1() {
  return (
  
      <>
      <h1>ANIRUDTH RAVICHANDER</h1>
      <br></br>
    <div className='hiphop_details'>
   
     <div className='image_containerhiphop'>
     <img  src="https://i.pinimg.com/1200x/c9/bb/46/c9bb465e77ff65fc1f0dfbf6aef6714c.jpg"  className="musicimageaadhi" alt="Music Event"/>
     </div>
     <div className='details_event1hip'>
      <h2 className='headhiphop'>YUM YUM YATRA</h2>
      <div className='content_hiphop'>
      <h3>CHIEF GUEST: CHEF DHAMU</h3>
      <br />
      <h3>TYPES OF DISHES</h3> 
      <br /> 
      <h3>• ITALIAN CUISINE</h3>
      <br />
      <h3>• ASIAN CUSINE</h3>
      <br />
      <h3>• AMERICAN &LATIN CUISINE</h3>
      <br />
      <h3>• AFRICAN CUSINE</h3>
      <br />
      <h3>FHOENIX MARKET CITY</h3>
      <br />
      <h3>Date: 11rd March 2026</h3>
      <br />
      <h3>Time: 6:30 PM – 11:00 PM</h3>
      <br />
      <h3>Expected Crowd: 20,000+ people</h3>
      <br />
    </div>
     <Link to="/conformationPageFoodfest1" className='bookEventBtnAnirudth' >BOOK EVENT</Link>
     </div>
    </div>
    </>

  )
}
export default food_fest1
