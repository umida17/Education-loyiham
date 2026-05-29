import React, { useState } from 'react'
import educarion from '../../assets/Edu.png'
import './Header.css'  



 const translations = {
  uz: {
    home: "Bosh sahifa",
    courses: "Kurslar",
    pages: "Sahifalar",
    blog: "Blog",
    contact: "Aloqa",
    signin: "Kirish",
    signup: "Ro'yxatdan o'tish"
  },
  ru: {
    home: "Главная",
    courses: "Курсы",
    pages: "Страницы",
    blog: "Блог",
    contact: "Контакты",
    signin: "Войти",
    signup: "Регистрация"
  },
  en: {
    home: "Home",
    courses: "Courses",
    pages: "Pages",
    blog: "Blog",
    contact: "Contact",
    signin: "Sign In",
    signup: "Sign Up"
  }
}

const Header = () => {
   const [lang, setLang] = useState('uz')
  const t = translations[lang]

  return (
    <header className="header-section">
      <div className="container">
        <div className="header-container">
           <div className="logo-box">
            <img src={educarion} alt="Education Logo" className="logo-img" />
          </div>

          <div className="education">
              <nav className="nav-menu">
            <div className="select-wrapper">
              <select className="nav-select">
                <option value="Home">{t.home}</option>
                <option value="Courses">{t.courses}</option>
                <option value="Page">{t.pages}</option>
              </select>
            </div>

            <div className="select-wrapper">
              <select className="nav-select">
                <option value="Courses">{t.courses}</option>
                <option value="About">{t.pages}</option>
              </select>
            </div>

            <div className="select-wrapper">
              <select className="nav-select">
                <option value="Page">{t.pages}</option>
                <option value="Home">{t.home}</option>
              </select>
            </div>

            <div className="select-wrapper">
              <select className="nav-select">
                <option value="Blog">{t.blog}</option>
                <option value="Page">{t.pages}</option>
              </select>
            </div>

            <a href="#" className="nav-link">{t.contact}</a>
          </nav>

           <div className="header-actions">
             <div className="lang-switcher">
              <select value={lang} onChange={(e) => setLang(e.target.value)} className="lang-select">
                <option value="uz">UZ 🇺🇿</option>
                <option value="ru">RU 🇷🇺</option>
                <option value="en">EN 🇬🇧</option>
              </select>
            </div>

            <a href="#" className="signin-link">{t.signin}</a>
            <button className="signup-btn">
              <a href="#">{t.signup}</a>
            </button>
          </div>
          
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header