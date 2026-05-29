import React, { useState } from 'react';
import educarion from '../../assets/Edu.png';
import './Header.css';

const Header = ({ lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header-section">
      <div className="container header-container">
        
        <div className="logo-box">
          <img src={educarion} alt="Logo" className="logo-img" />
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <select className="nav-select"><option>Home</option></select>
          <select className="nav-select"><option>Courses</option></select>
          <select className="nav-select"><option>Pages</option></select>
          <a href="#" className="nav-link">Contact</a>
          <a href="#" className="nav-link mobile-only">Sign In</a> 
          <a href="#" className="nav-link mobile-only">Sign Up</a>
        </nav>

        <div className="header-actions">
          <div className="lang-switcher">
            <select value={lang} onChange={(e) => setLang(e.target.value)} className="lang-select">
              <option value="uz">UZ 🇺🇿</option>
              <option value="ru">RU 🇷🇺</option>
              <option value="en">EN 🇬🇧</option>
            </select>
          </div>
          <a href="#" className="signin-link desktop-only">Kirish</a>
          <button className="signup-btn desktop-only"><a href="#">Ro'yxatdan o'tish</a></button>

          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;