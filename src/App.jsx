
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AboutPlayer, AboutUs, AllGames, BannerDetail, BestPlayers, Events, Home, Kids, MainLayout, Media, News, PastedGames, PlanedGames, Players, Preview, PreviewC } from './pages'
import './App.css'
import { Photo, Video } from './components'
import './i18n'
import Tournament from './pages/Tournament'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='tournament' element={<Tournament/>}>
              <Route index element={<PastedGames/>}/>
              <Route path='pasted/:id' element={<PastedGames/>}/>
              <Route path='planed/:id' element={<PlanedGames/>}/>
              <Route path='all/:id' element={<AllGames/>}/>
            </Route>
            <Route path='players/:id' element={<Players/>}/>
            <Route path="about-player/:id" element={<AboutPlayer/>}/>
            <Route path='media' element={<Media/>}>
                <Route index element={<Photo/>}/>
                <Route path='video' element={<Video/>}/>
            </Route>
            <Route path='news' element={<News/>}/>
            <Route path='preview/:id' element={<Preview/>}>
              {/* <Route index element={<PreviewC/>}/>  */}
              <Route path='previw' element={<PreviewC/>}/>
              <Route path='events' element={<Events/>}/>
            </Route>
            <Route path='best-players' element={<BestPlayers/>}/>
            <Route path='about-us' element={<AboutUs/>}/>
            <Route path='kids' element={<Kids/>}/>
            <Route path=':id' element={<BannerDetail/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
