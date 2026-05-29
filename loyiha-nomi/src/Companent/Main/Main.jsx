import React from 'react';
import './Main.css';
import aboutImg from '../../assets/mons.png'; // rasm_c71a7b.jpg uchun rasmingiz nomi verbatim saqlandi

// Ikkala qismning (Section 1 va Section 2) barcha tillardagi matnlari
const mainTranslations = {
  uz: {
    // Section 1: About
    title: "Yorqin Kelajakni Ta'minlaydigan Kursingizni Toping",
    desc1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at diam magnis faucibus et faucibus gravida. Malesuada fauci bus iaculis eu. Fusce est, consectetur tempor penatibus sed. Ut dolor, vulputate quam nec aliquam aliquam nisl.",
    desc2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit euismod fusce sit.",
    btnText: "Batafsil ma'lumot",
    
    // Section 2: How it works (rasm_c63cc6.png)
    sectionTitle: "Biz Qanday Ishlaymiz",
    sectionDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit euismod fusce sit.",
    cards: [
      { id: 1, title: "Onlayn Ko'proq O'rganing", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit eui smod fusce sit." },
      { id: 2, title: "Qaydlar Yozib Borish", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit eui smod fusce sit." },
      { id: 3, title: "Interaktiv Darslar", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit eui smod fusce sit." },
      { id: 4, title: "Umrbod Qo'llab-quvvatlash", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit eui smod fusce sit." }
    ]
  },
  ru: {
    title: "Найдите курс, который сделает ваше будущее ярким",
    desc1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at diam magnis faucibus et faucibus gravida. Malesuada fauci bus iaculis eu. Fusce est, consectetur tempor penatibus sed. Ut dolor, vulputate quam nec aliquam aliquam nisl.",
    desc2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit euismod fusce sit.",
    btnText: "Подробнее",
    
    sectionTitle: "Как это работает",
    sectionDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit euismod fusce sit.",
    cards: [
      { id: 1, title: "Учитесь онлайн больше", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit eui smod fusce sit." },
      { id: 2, title: "Ведение записей", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit eui smod fusce sit." },
      { id: 3, title: "Интерактивные занятия", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit eui smod fusce sit." },
      { id: 4, title: "Пожизненная поддержка", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit eui smod fusce sit." }
    ]
  },
  en: {
    title: "Find Your Course That Makes Bright Future",
    desc1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at diam magnis faucibus et faucibus gravida. Malesuada fauci bus iaculis eu. Fusce est, consectetur tempor penatibus sed. Ut dolor, vulputate quam nec aliquam aliquam nisl.",
    desc2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit euismod fusce sit.",
    btnText: "Learn More",
    
    sectionTitle: "How It Work",
    sectionDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit euismod fusce sit.",
    cards: [
      { id: 1, title: "Learn More Online", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit eui smod fusce sit." },
      { id: 2, title: "Writing Notes", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit eui smod fusce sit." },
      { id: 3, title: "Interactive Sessions", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit eui smod fusce sit." },
      { id: 4, title: "Life Time Support", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit eui smod fusce sit." }
    ]
  }
};

 const icons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" key="1"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4M12 11a2 2 0 100-4 2 2 0 000 4zM6 14c0-2 3-3 6-3s6 1 6 3"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" key="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" key="3"><path d="M9 11l3 3L22 4M20 12v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h9"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" key="4"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 006 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 6a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
];

const Main = ({ lang }) => {
  const t = mainTranslations[lang || 'uz'];  

  const handlePlayVideo = () => {
    alert("Video pleyer ochilmoqda..."); 
  };

  return (
    <> {/* Fragment xatolikni oldini oladi */}
      
      {/* SECTION 1: ABOUT (rasm_c71a7b.jpg) */}
      <section className="about-section">
        <div className="container about-container">
          
          <div className="about-content">
            <h2 className="about-title">{t.title}</h2>
            <p className="about-text">{t.desc1}</p>
            <p className="about-text highlight">{t.desc2}</p>
            <button className="about-btn">{t.btnText}</button>
          </div>

          <div className="about-image-wrapper">
            <img src={aboutImg} alt="Students learning" className="about-img" />
            <div className="video-play-btn" onClick={handlePlayVideo}>
              <svg className="play-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: HOW IT WORKS (rasm_c63cc6.png) */}
      <section className="works-section">
        <div className="container">
          
          <div className="works-header">
            <h2 className="works-main-title">{t.sectionTitle}</h2>
            <p className="works-sub-desc">{t.sectionDesc}</p>
          </div>

          <div className="works-grid">
            {t.cards.map((card, index) => (
              <div className="works-card" key={card.id}>
                <div className="works-icon-box">
                  {icons[index]}
                </div>
                <h3 className="works-card-title">{card.title}</h3>
                <p className="works-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </>
  );
};

export default Main;