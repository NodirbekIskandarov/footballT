
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, MainLayout } from './pages'
import Test from './pages/Test'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='test' element={<Test/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
