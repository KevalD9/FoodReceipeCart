import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import Navbar from './components/Navbar'
import Cart from './pages/Cart'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      
      <Route exact path='/cart' element={<Cart/>}/>

      </Routes>
    </>
  )
}

export default App
