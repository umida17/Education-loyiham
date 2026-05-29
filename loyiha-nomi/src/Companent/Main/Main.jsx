import React from 'react';
import './Main.css';
import aboutImg from '../../assets/mons.png';  
 


const aboutTranslations = {
  uz: {
    title: "Yorqin Kelajakni Ta'minlaydigan Kursingizni Toping",
    desc1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at diam magnis faucibus et faucibus gravida. Malesuada fauci bus iaculis eu. Fusce est, consectetur tempor penatibus sed. Ut dolor, vulputate quam nec aliquam aliquam nisl.",
    desc2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit euismod fusce sit.",
    btnText: "Batafsil ma'lumot"
  },
  ru: {
    title: "Найдите курс, который сделает ваше будущее ярким",
    desc1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at diam magnis faucibus et faucibus gravida. Malesuada fauci bus iaculis eu. Fusce est, consectetur tempor penatibus sed. Ut dolor, vulputate quam nec aliquam aliquam nisl.",
    desc2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit euismod fusce sit.",
    btnText: "Подробнее"
  },
  en: {
    title: "Find Your Course That Makes Bright Future",
    desc1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at diam magnis faucibus et faucibus gravida. Malesuada fauci bus iaculis eu. Fusce est, consectetur tempor penatibus sed. Ut dolor, vulputate quam nec aliquam aliquam nisl.",
    desc2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit euismod fusce sit.",
    btnText: "Learn More"
  }
};

const AboutSection = ({ lang }) => {
  const t = aboutTranslations[lang || 'uz'];  

  const handlePlayVideo = () => {
    alert("Video pleyer ochilmoqda..."); 
  };

  return (
   <main>
        <section className="about-section">
      <div className="container about-container">
        
         <div className="about-content">
          <h2 className="about-title">{t.title}</h2>
          <p className="about-text">{t.desc1}</p>
          <p className="about-text highlight">{t.desc2}</p>
          
           <button className="about-btn">
            {t.btnText}
          </button>
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

    <section className="works-section">
      <div className="container">
        
        {/* Yuqori Sarlavha Qismi */}
        <div className="works-header">
          <h2 className="works-main-title">{t.sectionTitle}</h2>
          <p className="works-sub-desc">{t.sectionDesc}</p>
        </div>

        {/* Grid Kartalar Qismi */}
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
     </main>



  );
};




export default AboutSection;