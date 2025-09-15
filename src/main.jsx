import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route,Link}from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Main_Page from "./Main_Page/Main_Page.jsx";
import Login from "./Login/Login.jsx";
import EventHomePage from './EventHomePage/EventHomePage.jsx'
import MusicPage from './Music_Concert/MusicPage/MusicPage.jsx'
import Hiphop_concert from './Music_Concert/Artists/Hiphop_concert.jsx'
import ConfomationHiphop from './Music_Concert/conformation_Page/ConfomationHiphop.jsx'
import Anirudh_concert from './Music_Concert/Artists/Anirudh_concert.jsx'
import ConformationAnirudth from './Music_Concert/conformation_Page/ConformationAnirudth.jsx'
import Sakthisree_concert from './Music_Concert/Artists/Sakthisree_concert.jsx'
import ConformationSakthisree from './Music_Concert/conformation_Page/ConformationSakthisree.jsx'
import PradeepKumar_concert from './Music_Concert/Artists/PradeepKumar_concert.jsx'
import ConformationPradeepkumar from './Music_Concert/conformation_Page/ConformationPradeepkumar.jsx'
import Billie_concert from './Music_Concert/Artists/Billie_concert.jsx'
import ConformationBillie from './Music_Concert/conformation_Page/ConformationBillie.jsx'
import Coldplay_concert from './Music_Concert/Artists/Coldplay_concert.jsx'
import ConformationColdPlay from './Music_Concert/conformation_Page/ConformationColdPlay.jsx'
import Register from './Register_Page/Register_Page.jsx'      
import FoodPage from './Food_Fest/Food_Page/FoodPage.jsx'
import Food_fest1 from './Food_Fest/Fests/Food_fest1.jsx'
import ConformationFoodFest from './Food_Fest/Conformation_FoodFest/ConformationFoodFest1.jsx'
import Food_fest2 from './Food_Fest/Fests/Food_fest2.jsx' 
import ConformationFoodFest2 from './Food_Fest/Conformation_FoodFest/ConformationFoodFest2.jsx'
import Food_fest3 from './Food_Fest/Fests/Food_fest3.jsx'
import ConformationFoodFest3 from './Food_Fest/Conformation_FoodFest/ConformationFoodFest3.jsx'   
import Food_fest4 from './Food_Fest/Fests/Food_fest4.jsx'  
import ConformationFoodFest4 from './Food_Fest/Conformation_FoodFest/ConformationFoodFest4.jsx'
import Food_fest5 from './Food_Fest/Fests/Food_fest5.jsx'
import ConformationFoodFest5 from './Food_Fest/Conformation_FoodFest/ConformationFoodFest5.jsx'
import Food_fest6 from './Food_Fest/Fests/Food_fest6.jsx'
import ConformationFoodFest6 from './Food_Fest/Conformation_FoodFest/ConformationFoodFest6.jsx'
import HackathanPage from './Hackathon/Hackathon_Page/HackathanPage.jsx'
import Hackathon_fest1 from './Hackathon/Hackathon_Fest/Hackathon_fest1.jsx'
import ConformationHackathon1 from './Hackathon/Conformation_Hackathon/ConformationHackathon1.jsx'
import Hackathon_fest2 from './Hackathon/Hackathon_Fest/Hackathon_fest2.jsx'
import ConformationHackathon2 from './Hackathon/Conformation_Hackathon/ConformationHackathon2.jsx'
import Hackathon_fest3 from './Hackathon/Hackathon_Fest/Hackathon_fest3.jsx'
import ConformationHackathon3 from './Hackathon/Conformation_Hackathon/ConformationHackathon3.jsx'
import Hackathon_fest4 from './Hackathon/Hackathon_Fest/Hackathon_fest4.jsx'
import ConformationHackathon4 from './Hackathon/Conformation_Hackathon/ConformationHackathon4.jsx' 
import Hackathon_fest5 from './Hackathon/Hackathon_Fest/Hackathon_fest5.jsx'
import ConformationHackathon5 from './Hackathon/Conformation_Hackathon/ConformationHackathon5.jsx'
import Hackathon_fest6 from './Hackathon/Hackathon_Fest/Hackathon_fest6.jsx'
import ConformationHackathon6 from './Hackathon/Conformation_Hackathon/ConformationHackathon6.jsx'
import Donation_Page from './Donations/Donation_Page/Donation_Page.jsx'
import Donation1 from './Donations/Donations _1-6/Donation1.jsx'
import Donation2 from './Donations/Donations _1-6/Donation2.jsx'
import Donation3 from './Donations/Donations _1-6/Donation3.jsx'
import Donation4 from './Donations/Donations _1-6/Donation4.jsx'
import Donation5 from './Donations/Donations _1-6/Donation5.jsx'
import Donation6 from './Donations/Donations _1-6/Donation6.jsx' 
import ConformationDonation1 from './Donations/Conformation_Donation/ConformationDonation1.jsx'
import ConformationDonation2 from './Donations/Conformation_Donation/ConformationDonation2.jsx'
import ConformationDonation3 from './Donations/Conformation_Donation/ConformationDonation3.jsx'
import ConformationDonation4 from './Donations/Conformation_Donation/ConformationDonation4.jsx'
import ConformationDonation5 from './Donations/Conformation_Donation/ConformationDonation5.jsx'
import ConformationDonation6 from './Donations/Conformation_Donation/ConformationDonation6.jsx'
import Auction_Page from './Auction/Auction_page/Auction_Page.jsx'
import Auction1 from './Auction/Auction _1-6/Auction1.jsx'

createRoot(document.getElementById('root')).render(
  <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main_Page />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/event_home_page" element={<EventHomePage/>}/>
        <Route path="/music_page" element={<MusicPage/>}/>
        <Route path="/hiphop_concert" element={<Hiphop_concert/>}/>
        <Route path="/conformationPageHiphop" element={<ConfomationHiphop/>}/>
        <Route path="/anirudth_concert" element={< Anirudh_concert />}/>
        <Route path="/conformationPageAnirudth" element={<ConformationAnirudth/>}/>
        <Route path="/sakthishre_concert" element={<Sakthisree_concert/>}/>
         <Route path="/conformationPageSakthisree" element={<ConformationSakthisree/>}/>
        <Route path="/pradeep_concert" element={<PradeepKumar_concert/>}/>
        <Route path="/conformationPagePradeepkumar" element={<ConformationPradeepkumar/>}/>
        <Route path="/billie_concert" element={<Billie_concert/>}/>
        <Route path="/conformationPageBillie" element={<ConformationBillie/>}/>
        <Route path="/cold_concert" element={<Coldplay_concert/>}/>
        <Route path="/conformationPageColdPlay" element={<ConformationColdPlay/>}/>
        <Route path="/Register" element={<Register />} />
        <Route path="/food_page" element={<FoodPage/>}/>
        <Route path="/food_fest1" element={<Food_fest1/>}/>
        <Route path="/conformationPageFoodfest1" element={<ConformationFoodFest/>}/>
        <Route path="/food_fest2" element={<Food_fest2/>}/>
        <Route path="/conformationPageFoodfest2" element={<ConformationFoodFest2/>}/>
        <Route path="/food_fest3" element={<Food_fest3/>}/>
        <Route path="/conformationPageFoodfest3" element={<ConformationFoodFest3/>}/>
        <Route path='/food_fest4' element={<Food_fest4/>}/>
        <Route path='/conformationPageFoodfest4' element={<ConformationFoodFest4/>}/>
        <Route path='/food_fest5' element={<Food_fest5/>}/>
        <Route path='/conformationPageFoodfest5' element={<ConformationFoodFest5/>}/>
        <Route path='/food_fest6' element={<Food_fest6/>}/>
        <Route path='/conformationPageFoodfest6' element={<ConformationFoodFest6/>}/>
        <Route path='/hackathon_page' element={<HackathanPage/>}/>
        <Route path='/hackathonpage1' element={<Hackathon_fest1/>}/>
        <Route path='/conformationPageHackathonfest1' element={<ConformationHackathon1/>}/>
        <Route path='/hackathonpage2' element={<Hackathon_fest2/>}/>
        <Route path='/conformationPageHackathonfest2' element={<ConformationHackathon2/>}/>
        <Route path='/hackathonpage3' element={<Hackathon_fest3/>}/>
        <Route path='/conformationPageHackathonfest3' element={<ConformationHackathon3/>}/>
        <Route path='/hackathonpage4' element={<Hackathon_fest4/>}/>
        <Route path='/conformationPageHackathonfest4' element={<ConformationHackathon4/>}/>
        <Route path='/hackathonpage5' element={<Hackathon_fest5/>}/>
        <Route path='/conformationPageHackathonfest5' element={<ConformationHackathon5/>}/>
        <Route path='/hackathonpage6' element={<Hackathon_fest6/>}/>
        <Route path='/conformationPageHackathonfest6' element={<ConformationHackathon6/>}/>
        <Route path='/donation_page' element={<Donation_Page/>}/>
        <Route path='/donationpage1' element={<Donation1/>}/>
        <Route path='/donationpage2' element={<Donation2/>}/>
        <Route path='/donationpage3' element={<Donation3/>}/>
        <Route path='/donationpage4' element={<Donation4/>}/>
        <Route path='/donationpage5' element={<Donation5/>}/>
        <Route path='/Donationpage6' element={<Donation6/>}/>
        <Route path='/conformationDonation1' element={<ConformationDonation1/>}/>
        <Route path='/conformationDonation2' element={<ConformationDonation2/>}/>
        <Route path='/conformationDonation3' element={<ConformationDonation3/>}/>
        <Route path='/conformationDonation4' element={<ConformationDonation4/>}/>
        <Route path='/conformationDonation5' element={<ConformationDonation5/>}/>
        <Route path='/conformationDonation6' element={<ConformationDonation6/>}/>
        <Route path='/auction_page' element={<Auction_Page/>}/>
        <Route path='/auctionpage1' element={<Auction1/>}/>
      </Routes>
    </BrowserRouter>
 </>
)