import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom' 
import Home from './pages/Home'
import About from './pages/About_CDPC.jsx'
import Cchome from './pages/cc_home'
import Placement from './pages/placement_stats'
// import Recruit from './pages/recruit_us'
import Our_Team from './pages/our_team.jsx'
import Past_Recruiters from './pages/past_Recruiters.jsx'
import Resources from './pages/resources.jsx'
import Student_Programs from './pages/student_programs.jsx'
import Library_Resources from './pages/library_resources.jsx'
import Video_Resources from './pages/video_resources.jsx'
import Recruiters_Guide from './pages/recruiters_guide.jsx'
import Why_Recruit from './pages/why_recruit.jsx'
import Recruiter_Portal from './pages/recruiter_portal.jsx'
import Contact_Us from './pages/contact_us.jsx'

import Navbar from "./components/Navbar.jsx"
import Footer from './components/Footer1.jsx'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        {/* <Route path='/recruit-us' element={<Recruit />} /> */}
        <Route path='/placement-stats' element={<Placement />} />
        <Route path='/corporate-connect-home' element={<Cchome />} />
        <Route path='/our-team' element={<Our_Team />} />
        <Route path='/past-recruiters' element={<Past_Recruiters />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/student-programs' element={<Student_Programs />} />
        <Route path='/library-resources' element={<Library_Resources />} />
        <Route path='/video-resources' element={<Video_Resources />} />
        <Route path='/recruiters-guide' element={<Recruiters_Guide />} />
        <Route path='/why-recruit' element={<Why_Recruit />} />
        <Route path='/recruiters-portal' element={<Recruiter_Portal />} />
        <Route path='/contact-us' element={<Contact_Us />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App