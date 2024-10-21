
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, MainLayout, PastedGames, PlanedGames, Players, Tounament } from './pages'
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
