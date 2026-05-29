import React from 'react';
import './Hero.css';
import heroBg from '../../assets/win.png'; 


// Tillarni qo'shish oson bo'lishi uchun matnlarni obyektga oldik
const heroData = {
  title: "Self-Paced Learning Courses Online",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam elementum. Urna, posuere nisi sit gravida massa. Ultrices bibendum sagittis pellentesque vitae sit.",
  btnText: "Start a course",
  stats: [
    {
      id: 1,
      number: "1400+",
      label: "Online Courses",
      // Oddiy ko'rinishi uchun inline SVG ikonka ishlatdik (istasangiz rasmga almashtiring)
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 16h10v2H4zm0-4h16v2H4zm0-4h16v2H4zm0-4h16v2H4z"/>
        </svg>
      )
    },
    {
      id: 2,
      number: "1100+",
      label: "Expert Instructors",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      )
    },
    {
      id: 3,
      number: "800+",
      label: "Success Stories",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
        </svg>
      )
    }
  ]
};

const Hero = () => {
  return (
    <section className="hero-section" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${heroBg})` }}>
      <div className="container hero-container">
        
        {/* Asosiy matnlar qismi */}
        <div className="hero-content">
          <h1 className="hero-title">{heroData.title}</h1>
          <p className="hero-desc">{heroData.desc}</p>
          <button className="hero-btn">{heroData.btnText}</button>
        </div>

        {/* Pastdagi Oq Statistika Bloki */}
        <div className="stats-badge-container">
          {heroData.stats.map((stat) => (
            <div className="stat-card" key={stat.id}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-info">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;