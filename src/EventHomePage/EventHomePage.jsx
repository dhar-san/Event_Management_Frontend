import React from 'react'
import { Link } from 'react-router-dom'



function EventHomePage() {
  return (
    <div >
      <div className='navigation_bar'>
        <img src='logo2.png' className='navigation_logo'/>
        <p>For you</p>
        <p>Sports</p>
        <p>Concerts</p>
        <p>Movies</p>
        <div className='image_div'>
        <img src='https://imgs.search.brave.com/rU-fYLiSZS9vC9mWWlOHXpgcezLs1OJyEIotT8CVuR4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE0LzMyLzcxLzg3/LzM2MF9GXzE0MzI3/MTg3MjFfTmNBZEE4/cDNvQ2Y5Sk9UT0dh/MGpIdUs4dk91OEZo/dmcuanBn' className='profile_logo'/>
        </div>
      </div>
      <br></br>
      <div className='content'>
        
        <h4 className='h4'>UPCOMING EVENTS</h4>
        <div className='onetofourcontainerholder'>
        <div className='container1'>
          
          {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHOuKndCfpoz9iu1wt_wca_BfqkUA60qOS87iwXapLf2PPWf0Dpd7wGTrHdG-ttAr293w&usqp=CAU' className='image1' /> */}
          <Link to="/music_page" className="musicPage">
        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHOuKndCfpoz9iu1wt_wca_BfqkUA60qOS87iwXapLf2PPWf0Dpd7wGTrHdG-ttAr293w&usqp=CAU"  className="image1" alt="Music Event"/>
         </Link>

        </div>
       
        
         <div className='container2'>
          <Link to="/food_page" className='foodPage'>
          <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-fest-festival-flyer-template-design-2b72a799f123222eb6a17780cd7d299f_screen.jpg?ts=1699707670' className='image2' alt='Food Event'/>
          </Link>
        </div>
         <div className='container3'>
          <Link to="/hackathon_page"className="hackathon_page">
          <img src='https://imgs.search.brave.com/t6DuuVKKwNU9wgh9hHGTSdIPkWQU0saFRWQjlNBNuog/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA0/NjE2NTgwNi9waG90/by9oYWNrYXRob24t/dGVjaG5vbG9neS10/aHJlYXQtb25saW5l/LWNvZGluZy0yZC1p/bGx1c3RyYXRpb24u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXBfSzhYdmtwYlds/UEVJWUVTdnVkQ29u/MFA2YlN6bDNnOU1E/eHE0TFlyM0k9' className='image3'alt='Sports Event'/>
          </Link>
        </div>
         <div className='container4'>
            <Link to="/Donation_page"className="Donation_page">
          <img src='https://imgs.search.brave.com/leC_m6B2sk5KTvZ4jiJEOjjhhWgeDtTQy0U0wx1j2tI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFGdXJI/VFFBcjAvMS8wLzEx/MzF3L2NhbnZhLWJs/dXNoLXdoaXRlLW1v/ZGVybi1kb29kbGUt/aGFuZHMtY2hhcml0/eS1kb25hdGlvbnMt/Zmx5ZXItTXZKVnNu/WTl3T1EuanBn' className='image4' alt=''/>
          </Link>
        </div>
        </div>
        <div className='nextfourcontainer'>
        <div className='container5'>
           <Link to="/Auction_page"className="Auction_page">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3fPApCe3SF9tpaM9knEQ9ULl4JHA5UKHI_w&s'className='image5'/>
          </Link>
        </div>
         <div className='container6'>
       <Link to="/Events_page"className="Events_page">
          <img src='https://i.pinimg.com/736x/7b/bd/0b/7bbd0bbe2a6746e10c2f0500b1420d41.jpg' className='image6'/>
          </Link>
        </div>
         <div className='container7'>
           <Link to="/buisness_page"className="buisness_page">
          <img src='https://imgs.search.brave.com/KlqTMzBIqByR0R_muz3bMZQXPldz7iPQshgD3l83LZ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNiL2I0/L2EwLzNiYjRhMGFh/NDAxNTZiODI2YjZj/MDgyNmY2NjlhZDE1/LmpwZw' className='image7'/>
          </Link>
        </div>
        <div className='container8'>
          <Link to="/movie_page"className="movie_page">
          <img src='https://imgs.search.brave.com/ZK4Rv_hOH03rQQ_wLgybHNpvYXdM1cgSI0mmfNo8LdU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvY2luZW1hLXRp/Y2tldC1jYXJkLW11/c2ljLW1vdmllLWZl/c3RpdmFsLXZlY3Rv/ci1pbGx1c3RyYXRp/b25fMTIzNDQ3LTQz/NjEuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MA' className='image8'/>
          </Link>
        </div>
        </div>

        

        <div></div>
      </div>
      
    </div>
  )
}

export default EventHomePage
