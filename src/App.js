import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/AdminLogin";
import Register from './components/Register';
import Home from './pages/home/Home';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Register />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
