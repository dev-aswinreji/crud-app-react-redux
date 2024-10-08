import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'

function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
  <Routes>

  <Route path='/' element={<Home/>} />
  <Route path='/login' element={<Login/>} />
  <Route path='/signup' element={<Signup/>} />

  </Routes>
  </BrowserRouter>

  )
}

export default App
