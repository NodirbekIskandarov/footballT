
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, MainLayout } from './pages'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
