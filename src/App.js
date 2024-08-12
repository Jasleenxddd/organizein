import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/AdminLogin";
import Register from './components/Register';
import Home from './pages/home/Home';
import SEO from './pages/home/kpiNav/SEO';
import SEM from './pages/home/kpiNav/SEM';
import Social from './pages/home/kpiNav/Social';
import Web from './pages/home/kpiNav/Web';
import Mail from './pages/home/kpiNav/Mail';
import More from './pages/home/kpiNav/More';


const App = () => {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/SEO" element={<SEO />} />
          <Route path="/SEM" element={<SEM />} />
          <Route path="/Social" element={<Social />} />
          <Route path="/Web" element={<Web />} />
          <Route path="/Mail" element={<Mail />} />
          <Route path="/More" element={<More />} />

          <Route path="/" element={<Register />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
