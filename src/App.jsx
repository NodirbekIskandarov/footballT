
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AboutPlayer, AboutUs, BannerDetail, BestPlayers, Events, Home, Kids, Live, MainLayout, Media, News, PastedGames, PlanedGames, Players, Preview, PreviewC, Protocol } from './pages'
import './App.css'
import { Photo, Video } from './components'
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
            </Route>
            <Route path='players' element={<Players/>}/>
            <Route path="about-player/:id" element={<AboutPlayer/>}/>
            <Route path='media' element={<Media/>}>
                <Route index element={<Photo/>}/>
                <Route path='video' element={<Video/>}/>
            </Route>
            <Route path='news' element={<News/>}/>
            <Route path='preview' element={<Preview/>}>
              <Route index element={<PreviewC/>}/> 
              <Route path='previ/:id' element={<PreviewC/>}/>
              <Route path='protocol/:id' element={<Protocol/>}/>
              <Route path='events/:id' element={<Events/>}/>
              <Route path='live/:id' element={<Live/>}/>
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
