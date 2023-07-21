import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import ParticleBackground from './components/background/ParticleBackground';


function App() {
  return (
    <>
      <Router>
        <ParticleBackground className="particles"/>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
