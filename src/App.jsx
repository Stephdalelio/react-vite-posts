import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './index.css'
import Home from './pages/Home'
import Posts from './pages/Posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
   <>
   <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path=":id" element={<Posts />}></Route>

   </Routes>
   
   
   </>
   </Router>
  )
}

export default App
