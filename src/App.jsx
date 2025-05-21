import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Router} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom' 
import Home from './pages/Home'
import About from './pages/About_CDPC.jsx'
import Cchome from './pages/cc_home'
import Placement from './pages/placement_stats'
import Recruit from './pages/Recruit_us'
import Our_Team from './pages/our_team.jsx'
// import OurTeam from './pages/our_team'

import Navbar from "./components/Navbar.jsx"
// import "./components/Navbar.css"

import Footer from './components/Footer1.jsx'
<componen></componen>

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<><Home /></>} />
        <Route path='/about-us' element={<><About /></>} />
        <Route path='/recruit-us' element={<><Recruit /></>} />
        <Route path='/placement-stats' element={<><Placement /></>} />
        <Route path='/corporate-connect-home' element={<><Cchome /></>} />
        <Route path='/our-team' element={<><Our_Team /></>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
