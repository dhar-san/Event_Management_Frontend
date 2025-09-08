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
      </Routes>
    </BrowserRouter>
 </>
)
