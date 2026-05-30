import React from 'react';
import './Footer.css'
// Soddalashtirilgan tarjimalar obyekti (Muammo chiqmasligi uchun shu yerning o'zida)
const footerTranslations = {
  uz: {
    eduDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam the elementum. Urna, posuere nisi sit gravid.",
    followUs: "Bizni kuzating",
    featLinks: "Foydali Linklar",
    support: "Qo'llab-quvvatlash",
    contactUs: "Kontaktlar",
    links: {
      about: "Biz haqimizda",
      grad: "Bitirish",
      schol: "Stipendiya",
      admis: "Qabul",
      inter: "Xalqaro",
      events: "Tadbirlar",
      lang: "Til",
      wp: "WordPress",
      priv: "Maxfiylik",
      faqs: "Ko'p beriladigan savollar",
      supp: "Yordam"
    }
  },
  en: {
    eduDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam the elementum. Urna, posuere nisi sit gravid.",
    followUs: "Follow Us",
    featLinks: "Feature Links",
    support: "Support",
    contactUs: "Contact Us",
    links: {
      about: "About Us",
      grad: "Graduation",
      schol: "Scholarship",
      admis: "Admissions",
      inter: "International",
      events: "Events",
      lang: "Language",
      wp: "WordPress",
      priv: "Privacy",
      faqs: "FAQs",
      supp: "Support"
    }
  },
  ru: {
    eduDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam the elementum. Urna, posuere nisi sit gravid.",
    followUs: "Подписывайтесь",
    featLinks: "Полезные ссылки",
    support: "Поддержка",
    contactUs: "Контакты",
    links: {
      about: "О нас",
      grad: "Выпускной",
      schol: "Стипендия",
      admis: "Поступление",
      inter: "Международный",
      events: "События",
      lang: "Язык",
      wp: "WordPress",
      priv: "Конфиденциальность",
      faqs: "Часто задаваемые вопросы",
      supp: "Помощь"
    }
  }
};

const Footer = ({ lang }) => {
  // Tanlangan tilga mos tarjimani olish (agar xato bo'lsa, 'uz' standart bo'ladi)
  const currentData = footerTranslations[lang] || footerTranslations['uz'];

  return (
    <footer className="main-footer">
      <div className="container footer-container">
        
        {/* Kolonka 1: Brend va tavsif */}
        <div className="footer-col footer-about-col">
          <h3 className="footer-logo-title">Education</h3>
          <p className="footer-desc-text">{currentData.eduDesc}</p>
          <div className="footer-social-wrapper">
            <h4 className="social-title">{currentData.followUs}</h4>
            <div className="social-links-grid">
              <a href="#facebook" className="social-btn fb" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"/></svg>
              </a>
              <a href="#twitter" className="social-btn tw" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.95 4.57a10 10 0 01-2.82.78 4.96 4.96 0 002.16-2.72 10.15 10.15 0 01-3.13 1.2 4.93 4.93 0 00-8.4 4.48A14 14 0 011.64 3.16a4.93 4.93 0 001.52 6.57 4.9 4.9 0 01-2.23-.61v.06a4.93 4.93 0 003.95 4.83 4.9 4.9 0 01-2.22.08 4.93 4.93 0 004.6 3.42A9.9 9.9 0 010 19.54a13.94 13.94 0 007.55 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.01-.63A10.05 10.05 0 0024 4.58z"/></svg>
              </a>
              <a href="#instagram" className="social-btn ig" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#linkedin" className="social-btn ln" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Kolonka 2: Feature Links */}
        <div className="footer-col">
          <h3 className="footer-col-title">{currentData.featLinks}</h3>
          <ul className="footer-links-list">
            <li><a href="#about"><span className="arrow-icon">➔</span> {currentData.links.about}</a></li>
            <li><a href="#graduation"><span className="arrow-icon">➔</span> {currentData.links.grad}</a></li>
            <li><a href="#scholarship"><span className="arrow-icon">➔</span> {currentData.links.schol}</a></li>
            <li><a href="#admissions"><span className="arrow-icon">➔</span> {currentData.links.admis}</a></li>
            <li><a href="#international"><span className="arrow-icon">➔</span> {currentData.links.inter}</a></li>
            <li><a href="#events"><span className="arrow-icon">➔</span> {currentData.links.events}</a></li>
          </ul>
        </div>

        {/* Kolonka 3: Support */}
        <div className="footer-col">
          <h3 className="footer-col-title">{currentData.support}</h3>
          <ul className="footer-links-list">
            <li><a href="#language"><span className="arrow-icon">➔</span> {currentData.links.lang}</a></li>
            <li><a href="#wordpress"><span className="arrow-icon">➔</span> {currentData.links.wp}</a></li>
            <li><a href="#privacy"><span className="arrow-icon">➔</span> {currentData.links.priv}</a></li>
            <li><a href="#faqs"><span className="arrow-icon">➔</span> {currentData.links.faqs}</a></li>
            <li><a href="#support-center"><span className="arrow-icon">➔</span> {currentData.links.supp}</a></li>
          </ul>
        </div>

        {/* Kolonka 4: Contact Us */}
        <div className="footer-col footer-contact-col">
          <h3 className="footer-col-title">{currentData.contactUs}</h3>
          <div className="footer-contact-block">
            <div className="contact-item-row">
              <div className="contact-icon-nocircle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <span className="contact-text">230, Mirpur Area, Mirpur 10, Dhaka, Bangladesh</span>
            </div>
            <div className="contact-item-row">
              <div className="contact-icon-nocircle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <a href="tel:+01748457269" className="contact-text link-style">+017 4845 7269</a>
            </div>
            <div className="contact-item-row">
              <div className="contact-icon-nocircle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <a href="mailto:info@gmail.com" className="contact-text link-style">info@gmail.com</a>
            </div>
            <div className="contact-item-row">
              <div className="contact-icon-nocircle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <a href="https://www.yourdomain.com" target="_blank" rel="noreferrer" className="contact-text link-style">www.yourdomain.com</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;