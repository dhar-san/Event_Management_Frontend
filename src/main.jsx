import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route,Link}from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Main_Page from './Main_Page.jsx'
import Login from './Login.jsx'
import EventHomePage from './EventHomePage.jsx'
import MusicPage from './MusicPage.jsx'
import Hiphop_concert from './Hiphop_concert.jsx'
import ConfomationHiphop from './ConfomationHiphop.jsx'
import Anirudh_concert from './Anirudh_concert.jsx'
import ConformationAnirudth from './ConformationAnirudth.jsx'
import Sakthisree_concert from './Sakthisree_concert.jsx'
import ConformationSakthisree from './ConformationSakthisree.jsx'
import PradeepKumar_concert from './PradeepKumar_concert.jsx'
import ConformationPradeepkumar from './ConformationPradeepkumar.jsx'
import Billie_concert from './Billie_concert.jsx'
import ConformationBillie from './ConformationBillie.jsx'
import Coldplay_concert from './Coldplay_concert.jsx'
import ConformationColdPlay from './ConformationColdPlay.jsx'
import Register from './Register_Page.jsx'      
import FoodPage from './FoodPage.jsx'
import Food_fest1 from './Food_fest1.jsx'
import ConformationFoodFest from './ConformationFoodFest1.jsx'
import Food_fest2 from './Food_fest2.jsx' 
import ConformationFoodFest2 from './ConformationFoodFest2.jsx'
import Food_fest3 from './Food_fest3.jsx'
import ConformationFoodFest3 from './ConformationFoodFest3.jsx'   
import Food_fest4 from './Food_fest4.jsx'  
import ConformationFoodFest4 from './ConformationFoodFest4.jsx'
import Food_fest5 from './Food_fest5.jsx'
import ConformationFoodFest5 from './ConformationFoodFest5.jsx'
import Food_fest6 from './Food_fest6.jsx'
import ConformationFoodFest6 from './ConformationFoodFest6.jsx'

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
        <Route path='/conformationPageHackathonfest2' element={<ConformationHackFest2/>}/>
      </Routes>
    </BrowserRouter>
 </>
)
