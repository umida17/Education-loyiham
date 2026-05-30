import React from 'react';
import './Main.css';

// ESKI RASMLARINIGIZ
import aboutImg from '../../assets/mons.png'; 
import courseImg1 from '../../assets/win.png'; 
import courseImg2 from '../../assets/dars.png';
import courseImg3 from '../../assets/blue.png';
import courseImg4 from '../../assets/mr.png';
import courseImg5 from '../../assets/win.png';
import courseImg6 from '../../assets/fred.png';
import avatarImg from '../../assets/Ellipse 22.png'; 

// MENTORLAR VA TADBIR RASMLARI
import mentorImg1 from '../../assets/uns.png';
import mentorImg2 from '../../assets/reang.png';
import mentorImg3 from '../../assets/school.png';
import eventImg1 from '../../assets/Frame 106.png';
import eventImg2 from '../../assets/Frame 109.png';
import eventImg3 from '../../assets/Frame 111.png';

// BLOG RASMLARI (Ixtiyoriy rasmlarni o'z assetlaringizga almashtirishingiz mumkin)
import blogImg1 from '../../assets/frontend.png';
import blogImg2 from '../../assets/psixolik.png';
import blogImg3 from '../../assets/blue.png';

const mainTranslations = {
  uz: {
    title: "Yorqin Kelajakni Ta'minlaydigan Kursingizni Toping",
    desc1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at diam magnis faucibus et faucibus gravida. Malesuada fauci bus iaculis eu. Fusce est, consectetur tempor penatibus sed. Ut dolor, vulputate quam nec aliquam aliquam nisl.",
    desc2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit euismod fusce sit.",
    btnText: "Batafsil ma'lumot",
    
    sectionTitle: "Biz Qanday Ishlaymiz",
    sectionDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit euismod fusce sit.",
    cards: [
      { id: 1, title: "Onlayn Ko'proq O'rganing", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit eui smod fusce sit." },
      { id: 2, title: "Qaydlar Yozib Borish", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit eui smod fusce sit." },
      { id: 3, title: "Interaktiv Darslar", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit eui smod fusce sit." },
      { id: 4, title: "Umrbod Qo'llab-quvvatlash", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit eui smod fusce sit." }
    ],

    coursesTitle: "Bizning Barcha Onlayn Kurslarimiz",
    coursesDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    viewAllBtn: "Barcha Kurslarni Ko'rish",
    coursesList: [
      { id: 1, img: courseImg1, category: "Development", price: "$150", desc: "Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit." },
      { id: 2, img: courseImg2, category: "Android Developer", price: "$130", desc: "Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit." },
      { id: 3, img: courseImg3, category: "Java Script Course", price: "$140", desc: "Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit." },
      { id: 4, img: courseImg4, category: "Android Developer", price: "$120", desc: "Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit." },
      { id: 5, img: courseImg5, category: "Java Script Course", price: "$120", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit." },
      { id: 6, img: courseImg6, category: "Basic Marketing", price: "$100", desc: "Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit." }
    ],

    mentorsTitle: "Bizning Mentorlar Bilani Tanishing",
    mentorsDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Met, vestibulum euismod nullam elementum. Urna, posuere nisi sit gravida massa.",
    mentorList: [
      { id: 1, img: mentorImg1, name: "Mohammod Ali", role: "CEO, Developer", students: "8.2k", rating: "4.5", courses: "25+ Kurslar" },
      { id: 2, img: mentorImg2, name: "Braniya Lara", role: "Content Writter", students: "8.2k", rating: "4.5", courses: "25+ Kurslar" },
      { id: 3, img: mentorImg3, name: "Mohammod Ali", role: "Content Writter", students: "8.2k", rating: "4.5", courses: "25+ Kurslar" }
    ],

    eventsTitle: "Kutilayotgan Tadbirlar",
    eventsDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Met, vestibulum euismod nullam elementum.",
    eventList: [
      { id: 1, img: eventImg1, day: "10", month: "APR", title: "TED Talks at UCF College of Education", time: "4.00 pm - 8.00 pm", loc: "Dhaka Bangladesh" },
      { id: 2, img: eventImg2, day: "10", month: "APR", title: "Summer Course Starts From June", time: "4.00 pm - 8.00 pm", loc: "Dhaka Bangladesh" },
      { id: 3, img: eventImg3, day: "10", month: "APR", title: "Importance of Research Seminar", time: "4.00 pm - 8.00 pm", loc: "Dhaka Bangladesh" }
    ],

    blogTitle: "Bizning Oxirgi Bloglarimiz",
    blogDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam at entum.",
    readMore: "Batafsil...",
    blogList: [
      { id: 1, img: blogImg1, title: "Product Marketing Creative Camping Brand Image", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam at entum." },
      { id: 2, img: blogImg2, title: "Product Marketing Creative Camping Brand Image", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam at entum." },
      { id: 3, img: blogImg3, title: "Product Marketing Creative Camping Brand Image", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam at entum." }
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
    ],

    coursesTitle: "Все наши онлайн-курсы",
    coursesDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    viewAllBtn: "Посмотреть все курсы",
    coursesList: [
      { id: 1, img: courseImg1, category: "Development", price: "$150", desc: "Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit." },
      { id: 2, img: courseImg2, category: "Android Developer", price: "$130", desc: "Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit." },
      { id: 3, img: courseImg3, category: "Java Script Course", price: "$140", desc: "Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit." },
      { id: 4, img: courseImg4, category: "Android Developer", price: "$120", desc: "Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit." },
      { id: 5, img: courseImg5, category: "Java Script Course", price: "$120", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit." },
      { id: 6, img: courseImg6, category: "Basic Marketing", price: "$100", desc: "Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit." }
    ],

    mentorsTitle: "Встречайте наших менторов",
    mentorsDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Met, vestibulum euismod nullam elementum. Urna, posuere nisi sit gravida massa.",
    mentorList: [
      { id: 1, img: mentorImg1, name: "Mohammod Ali", role: "CEO, Developer", students: "8.2k", rating: "4.5", courses: "25+ Курсов" },
      { id: 2, img: mentorImg2, name: "Braniya Lara", role: "Content Writter", students: "8.2k", rating: "4.5", courses: "25+ Курсов" },
      { id: 3, img: mentorImg3, name: "Mohammod Ali", role: "Content Writter", students: "8.2k", rating: "4.5", courses: "25+ Курсов" }
    ],

    eventsTitle: "Предстоящие События",
    eventsDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Met, vestibulum euismod nullam elementum.",
    eventList: [
      { id: 1, img: eventImg1, day: "10", month: "АПР", title: "TED Talks at UCF College of Education", time: "4.00 pm - 8.00 pm", loc: "Дакка Бангладеш" },
      { id: 2, img: eventImg2, day: "10", month: "АПР", title: "Summer Course Starts From June", time: "4.00 pm - 8.00 pm", loc: "Дакка Бангладеш" },
      { id: 3, img: eventImg3, day: "10", month: "АПР", title: "Importance of Research Seminar", time: "4.00 pm - 8.00 pm", loc: "Дакка Бангладеш" }
    ],

    blogTitle: "Наши Последние Блоги",
    blogDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam at entum.",
    readMore: "Подробнее...",
    blogList: [
      { id: 1, img: blogImg1, title: "Product Marketing Creative Camping Brand Image", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam at entum." },
      { id: 2, img: blogImg2, title: "Product Marketing Creative Camping Brand Image", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam at entum." },
      { id: 3, img: blogImg3, title: "Product Marketing Creative Camping Brand Image", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam at entum." }
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
    ],

    coursesTitle: "Our All The Online Courses",
    coursesDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    viewAllBtn: "View All Course",
    coursesList: [
      { id: 1, img: courseImg1, category: "Development", price: "$150", desc: "Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit." },
      { id: 2, img: courseImg2, category: "Android Developer", price: "$130", desc: "Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit." },
      { id: 3, img: courseImg3, category: "Java Script Course", price: "$140", desc: "Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit." },
      { id: 4, img: courseImg4, category: "Android Developer", price: "$120", desc: "Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit." },
      { id: 5, img: courseImg5, category: "Java Script Course", price: "$120", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit." },
      { id: 6, img: courseImg6, category: "Basic Marketing", price: "$100", desc: "Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit." }
    ],

    mentorsTitle: "Meet with Our Mentor",
    mentorsDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Met, vestibulum euismod nullam elementum. Urna, posuere nisi sit gravida massa.",
    mentorList: [
      { id: 1, img: mentorImg1, name: "Mohammod Ali", role: "CEO, Developer", students: "8.2k", rating: "4.5", courses: "25+ Courses" },
      { id: 2, img: mentorImg2, name: "Braniya Lara", role: "Content Writter", students: "8.2k", rating: "4.5", courses: "25+ Courses" },
      { id: 3, img: mentorImg3, name: "Mohammod Ali", role: "Content Writter", students: "8.2k", rating: "4.5", courses: "25+ Courses" }
    ],

    eventsTitle: "Upcoming Event",
    eventsDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Met, vestibulum euismod nullam elementum.",
    eventList: [
      { id: 1, img: eventImg1, day: "10", month: "APR", title: "TED Talks at UCF College of Education", time: "4.00 pm - 8.00 pm", loc: "Dhaka Bangladesh" },
      { id: 2, img: eventImg2, day: "10", month: "APR", title: "Summer Course Starts From June", time: "4.00 pm - 8.00 pm", loc: "Dhaka Bangladesh" },
      { id: 3, img: eventImg3, day: "10", month: "APR", title: "Importance of Research Seminar", time: "4.00 pm - 8.00 pm", loc: "Dhaka Bangladesh" }
    ],

    blogTitle: "Our Latest Blog",
    blogDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam at entum.",
    readMore: "Read More...",
    blogList: [
      { id: 1, img: blogImg1, title: "Product Marketing Creative Camping Brand Image", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam at entum." },
      { id: 2, img: blogImg2, title: "Product Marketing Creative Camping Brand Image", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam at entum." },
      { id: 3, img: blogImg3, title: "Product Marketing Creative Camping Brand Image", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam at entum." }
    ]
  }
};

const section2Icons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" key="s2-1"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4M12 11a2 2 0 100-4 2 2 0 000 4zM6 14c0-2 3-3 6-3s6 1 6 3"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" key="s2-2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" key="s2-3"><path d="M9 11l3 3L22 4M20 12v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h9"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" key="s2-4"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 006 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 6a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
];

const Main = ({ lang }) => {
  const t = mainTranslations[lang || 'uz'];  

  return (
    <>
      {/* ================= SECTION 1: ABOUT ================= */}
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
            <div className="video-play-btn" onClick={() => alert("Video player...")}>
              <svg className="play-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NEW SECTION: STATS (STATISTIKA) ================= */}
      <section className="stats-section">
        <div className="container stats-container">
          <div className="stats-grid">
            <div className="stat-counter-item">
              <h2>85+</h2>
              <p>Teachers</p>
            </div>
            <div className="stat-counter-item">
              <h2>850+</h2>
              <p>Students</p>
            </div>
            <div className="stat-counter-item">
              <h2>55+</h2>
              <p>Courses</p>
            </div>
            <div className="stat-counter-item">
              <h2>25+</h2>
              <p>Country</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: HOW IT WORKS ================= */}
      <section className="works-section">
        <div className="container">
          <div className="works-header">
            <h2 className="works-main-title">{t.sectionTitle}</h2>
            <p className="works-sub-desc">{t.sectionDesc}</p>
          </div>
          <div className="works-grid">
            {t.cards.map((card, index) => (
              <div className="works-card" key={card.id}>
                <div className="works-icon-box">{section2Icons[index]}</div>
                <h3 className="works-card-title">{card.title}</h3>
                <p className="works-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: COURSES ================= */}
      <section className="courses-section">
        <div className="container">
          <div className="courses-header">
            <h2 className="courses-main-title">{t.coursesTitle}</h2>
            <p className="courses-sub-desc">{t.coursesDesc}</p>
          </div>

          <div className="courses-grid">
            {t.coursesList.map((course) => (
              <div className="course-card" key={course.id}>
                <div className="course-img-wrapper">
                  <img src={course.img} alt={course.category} className="course-card-img" />
                </div>
                
                <div className="course-stats-bar">
                  <div className="stat-item">
                    <svg className="stat-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    <span>5.8k</span>
                  </div>
                  <div className="stat-item">
                    <svg className="stat-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    <span>69k</span>
                  </div>
                  <div className="stat-item">
                    <svg className="stat-svg" viewBox="0 0 24 24" fill="currentColor" color="#ffb600"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <span>4.5</span>
                  </div>
                  <div className="stat-author">
                    <img src={avatarImg} alt="Author" className="author-avatar-img" />
                  </div>
                </div>

                <div className="course-info-box">
                  <div className="course-title-price">
                    <h3 className="course-cat-title">{course.category}</h3>
                    <span className="course-price-tag">{course.price}</span>
                  </div>
                  <p className="course-card-text">{course.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="courses-bottom-action">
            <button className="view-all-courses-btn">{t.viewAllBtn}</button>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: MENTORS ================= */}
      <section className="mentors-section">
        <div className="container">
          <div className="mentors-header">
            <h2 className="mentors-main-title">{t.mentorsTitle}</h2>
            <p className="mentors-sub-desc">{t.mentorsDesc}</p>
          </div>

          <div className="mentors-grid">
            {t.mentorList.map((mentor) => (
              <div className="mentor-card" key={mentor.id}>
                <div className="mentor-img-box">
                  <img src={mentor.img} alt={mentor.name} className="mentor-img" />
                </div>
                <div className="mentor-info">
                  <h3 className="mentor-name">{mentor.name}</h3>
                  <p className="mentor-role">{mentor.role}</p>
                  <div className="mentor-meta-bar">
                    <div className="meta-item">
                      <svg className="meta-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      <span>{mentor.students}</span>
                    </div>
                    <div className="meta-item">
                      <svg className="meta-svg star" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                      <span>{mentor.rating}</span>
                    </div>
                    <span className="mentor-courses-count">{mentor.courses}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: EVENTS ================= */}
      <section className="events-section">
        <div className="container">
          <div className="events-header">
            <h2 className="events-main-title">{t.eventsTitle}</h2>
            <p className="events-sub-desc">{t.eventsDesc}</p>
          </div>

          <div className="events-grid">
            {t.eventList.map((event) => (
              <div className="event-card" key={event.id}>
                <div className="event-img-box">
                  <img src={event.img} alt={event.title} className="event-img" />
                  <div className="event-date-badge">
                    <span className="badge-day">{event.day}</span>
                    <span className="badge-month">{event.month}</span>
                  </div>
                </div>
                <div className="event-content-box">
                  <h3 className="event-title">{event.title}</h3>
                  <div className="event-details-bar">
                    <div className="event-detail-item">
                      <svg className="detail-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      <span>{event.time}</span>
                    </div>
                    <div className="event-detail-item">
                      <svg className="detail-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      <span>{event.loc}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEW SECTION: LATEST BLOG ================= */}
      <section className="blog-section">
        <div className="container">
          <div className="blog-section-header">
            <h2 className="blog-main-title">{t.blogTitle}</h2>
            <p className="blog-sub-desc">{t.blogDesc}</p>
          </div>

          <div className="blog-grid">
            {t.blogList.map((blog) => (
              <div className="blog-card" key={blog.id}>
                <div className="blog-img-wrapper">
                  <img src={blog.img} alt={blog.title} className="blog-card-img" />
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-card-title">{blog.title}</h3>
                  <p className="blog-card-desc">{blog.desc}</p>
                  <a href="#readmore" className="blog-readmore-btn">{t.readMore}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;