
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AboutPlayer, Home, MainLayout, Media, News, PastedGames, PlanedGames, Players, Preview, Tounament } from './pages'
import './App.css'
import { Photo, Video } from './components'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='tounament' element={<Tounament/>}>
              <Route index element={<PastedGames/>}/>
              <Route path='planed' element={<PlanedGames/>}/>
            </Route>
            <Route path='players' element={<Players/>}/>
            <Route path="about-player" element={<AboutPlayer/>}/>
            <Route path='media' element={<Media/>}>
                <Route index element={<Photo/>}/>
                <Route path='video' element={<Video/>}/>
            </Route>
            <Route path='news' element={<News/>}/>
            <Route path='preview' element={<Preview/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
