import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Add this line
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import ParticleBackground from './components/background/ParticleBackground';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <ParticleBackground className='particles' />
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
