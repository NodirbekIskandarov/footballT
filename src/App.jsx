
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AboutPlayer, Home, MainLayout, PastedGames, PlanedGames, Players, Tounament } from './pages'
import './App.css'
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
