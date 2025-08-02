import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Aboutme from "./compontents/Aboutme";
import Home from "./compontents/Home";
import Contact from "./compontents/Contact";
import Projects from "./compontents/Projects";
import Experience from './compontents/Experience';
import resumePDF from './assets/reseme.pdf';  // Import your resume here
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(prev => !prev);
  const handleClose = () => setMenuOpen(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Vishnu_Vardhan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="nav-left"></div>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><Link to="/" onClick={handleClose}>Home</Link></li>
            <li><Link to="/aboutme" onClick={handleClose}>About Me</Link></li>
            <li><Link to="/projects" onClick={handleClose}>Projects</Link></li>
            <li><Link to="/experience" onClick={handleClose}>Experience</Link></li>
            <li><Link to="/contact" onClick={handleClose}>Contact</Link></li>
            <li>
              <button onClick={() => { handleClose(); handleDownload(); }}>
                Download Resume
              </button>
            </li>
          </ul>
          <div className="hamburger" onClick={handleToggle}>
            {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </div>
        </nav>

        <div className="page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<Aboutme />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
