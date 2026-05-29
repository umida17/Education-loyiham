import React from 'react';
import './Hero.css';
import heroBg from '../../assets/win.png';

 const heroTranslations = {
  uz: {
    title: "Onlayn Mustaqil Ta'lim Kurslari",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam elementum. Urna, posuere nisi sit gravida massa.",
    btnText: "Kursni boshlash",
    courseLabel: "Onlayn Kurslar",
    instructorLabel: "Tajribali Mentorlar",
    storyLabel: "Muvaffaqiyatlar"
  },
  ru: {
    title: "Онлайн-курсы для самостоятельного обучения",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam elementum. Urna, posuere nisi sit gravida massa.",
    btnText: "Начать курс",
    courseLabel: "Онлайн-курсы",
    instructorLabel: "Эксперты-инструкторы",
    storyLabel: "Истории успеха"
  },
  en: {
    title: "Self-Paced Learning Courses Online",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam elementum. Urna, posuere nisi sit gravida massa.",
    btnText: "Start a course",
    courseLabel: "Online Courses",
    instructorLabel: "Expert Instructors",
    storyLabel: "Success Stories"
  }
};

 const Hero = ({ lang }) => {
  const t = heroTranslations[lang]; 

  return (
    <section className="hero-section" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${heroBg})` }}>
      <div className="container hero-container">
        
        <div className="hero-content">
          <h1 className="hero-title">{t.title}</h1>
          <p className="hero-desc">{t.desc}</p>
          <button className="hero-btn">{t.btnText}</button>
        </div>

        <div className="stats-badge-container">
           <div className="stat-card">
            <div className="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 16h10v2H4zm0-4h16v2H4zm0-4h16v2H4zm0-4h16v2H4z"/></svg>
            </div>
            <div className="stat-info">
              <h3>1400+</h3>
              <p>{t.courseLabel}</p>
            </div>
          </div>

           <div className="stat-card">
            <div className="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </div>
            <div className="stat-info">
              <h3>1100+</h3>
              <p>{t.instructorLabel}</p>
            </div>
          </div>

           <div className="stat-card">
            <div className="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
            </div>
            <div className="stat-info">
              <h3>800+</h3>
              <p>{t.storyLabel}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;