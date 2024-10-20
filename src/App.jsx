
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, MainLayout, Tounament } from './pages'
import './App.css'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='/tounament' element={<Tounament/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
