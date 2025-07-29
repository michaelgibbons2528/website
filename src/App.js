import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import WhoAreWe from './WhoAreWe';
import OurMission from './OurMission';
import OurStories from './OurStories';
import Media from './Media';
import FAQ from './FAQ';
import GetInvolved from './GetInvolved';
import Projects from './Projects';
import Locations from './Locations';
import Donate from './Donate';
import Cars from './Cars';
import MontessoriBoard from './MontessoriBoard';
import DogTreat from './DogTreat';
import GoodieBag from './GoodieBag';
import './css/style.css';
import './css/navbar.css';
import './css/slideshow.css';
import './css/4_As.css';
import './css/involved.css';
import './css/footer.css';

// ScrollToTop component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const HomePage = () => {
  const navigate = useNavigate();
  
  // Slideshow state
  const [slideIndex, setSlideIndex] = useState(0);
  const slideIntervalRef = useRef(null);
  const numSlides = 4; // Update if you add/remove slides

  // Pause/resume slideshow on hover
  const pauseSlideshow = () => {
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
      slideIntervalRef.current = null;
    }
  };
  const resumeSlideshow = () => {
    if (!slideIntervalRef.current) {
      slideIntervalRef.current = setInterval(() => {
        setSlideIndex((prev) => (prev + 1) % numSlides);
      }, 10000);
    }
  };

  // Next/prev slide
  const changeSlide = (n) => {
    pauseSlideshow();
    setSlideIndex((prev) => (prev + n + numSlides) % numSlides);
    resumeSlideshow();
  };

  // Go to specific slide
  const goToSlide = (n) => {
    pauseSlideshow();
    setSlideIndex(n);
    resumeSlideshow();
  };

  // Start slideshow interval on mount
  useEffect(() => {
    resumeSlideshow();
    return () => {
      pauseSlideshow();
    };
    // eslint-disable-next-line
  }, []);

  // Slides data for easier mapping
  const slides = [
    {
      childName: 'Wilhelm',
      img: '/images/4-3_Wilhelm_and_Group.JPG',
      alt: 'Meet Wilhelm',
      h2: 'Meet Wilhelm',
      h1: 'Rutgers A4A',
      p: 'WIL at the HELM',
    },
    {
      childName: 'Zora',
      img: '/images/4-3_Zora_and_Dad.JPG',
      alt: 'Meet Zora',
      h2: 'Meet Zora',
      h1: 'Rutgers A4A',
      p: 'Zoomin\' Zora!',
    },
    {
      childName: 'Isaiah',
      img: '/images/4-3_Isaiah_Car_and_Family.JPG',
      alt: 'Isaiah and Car',
      h2: 'Meet Isaiah',
      h1: 'Rutgers A4A',
      p: 'Isaiah now drives his custom car with a huge smile!',
    },
    {
      childName: 'Luca',
      img: '/images/4-3_Luca_and_Group.JPG',
      alt: 'Luca and Everyone',
      h2: 'Meet Luca',
      h1: 'Rutgers A4A',
      p: 'Luca is goated.',
    },
  ];

  // Function to handle slide click navigation
  const handleSlideClick = (childName) => {
    navigate('/cars', { state: { scrollToChild: childName } });
  };

  return (
    <>
      {/* SLIDESHOW */}
      <div
        className="slideshow-wrapper"
        onMouseEnter={pauseSlideshow}
        onMouseLeave={resumeSlideshow}
      >
        <div className="slideshow-container">
          {/* Dots Bar at the top */}
          <div className="dots-bar">
            <div className="dots-container">
              {slides.map((_, i) => (
                <span
                  key={i}
                  className={`dot${i === slideIndex ? ' active' : ''}`}
                  onClick={() => goToSlide(i)}
                  style={{ cursor: 'pointer' }}
                ></span>
              ))}
            </div>
          </div>
          {/* Slides */}
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`slide fade${i === slideIndex ? ' active' : ''}`}
              style={{ display: i === slideIndex ? 'block' : 'none', cursor: 'pointer' }}
              onClick={() => handleSlideClick(slide.childName)}
            >
              <div className="slide-content">
                <div className="slide-image">
                  <img src={slide.img} alt={slide.alt} />
                </div>
                <div className="text-container">
                  <h2>{slide.h2}</h2>
                  <h1>{slide.h1}</h1>
                  <p>{slide.p}</p>
                </div>
              </div>
            </div>
          ))}
          {/* Arrows */}
          <a className="prev" onClick={() => changeSlide(-1)} style={{ cursor: 'pointer' }}>❮</a>
          <a className="next" onClick={() => changeSlide(1)} style={{ cursor: 'pointer' }}>❯</a>
        </div>
      </div>

      {/* 4 A's Section */}
      <section
        className="values-intro"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/4-3_Rutgers_Fall_2024_EVERYONE.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="section-heading">Our 4 A's</h2>
        <p className="section-subtext">
          Accessible 4 All (A4A) is dedicated to modifying toys and mobility devices to meet 
          the needs of children with physical and devleopmental disabilities. 
          In partnership with local families, we have developed personalized, 
          accessible ride-on vehicles that provide children with a fun and 
          engaging way to participate in play while supporting their 
          mobility needs.
        </p>
      </section>

      <section className="panel-section">
        <div className="panel-1">
          <div className="panel-content">
            <h3>Accessible</h3>
            <img src="/images/1-1_Wilhelm_and_Family.JPG" alt="Project-Ciaran" />
            <p>We provide children with non-discriminatory access to toys and devices they were 
              previously unable to use!</p>
          </div>
          <NavLink to="/our-stories" className="learn-more red">LEARN MORE</NavLink>
        </div>
        <div className="panel-2">
          <div className="panel-content">
            <h3>Accommodating</h3>
            <img src="/images/1-1_Giuseppe_meets_Fiona_Family.JPG" alt="Fiona and Family" />
            <p>We work alongside loving families, creating and delivering toys and devices 
              that are customized specifically for their own kid!</p>
          </div>
          <a href="#" className="learn-more pink">LEARN MORE</a>
        </div>
        <div className="panel-3">
          <div className="panel-content">
            <h3>Adaptive</h3>
            <img src="/images/1-1_Project_Braylon.jpg" alt="Project Ciaran" />
            <p>We teach engineering basics—from tools to the design process—while 
              encouraging creativity and hands-on learning not often found in classrooms!</p>
          </div>
          <a href="#" className="learn-more blue">LEARN MORE</a>
        </div>
        <div className="panel-4">
          <div className="panel-content">
            <h3>Adventurous</h3>
            <img src="/images/1-1_Zora_Outside.JPEG" alt="Living" />
            <p>We design these toys and devices to launch children into a world of 
              independence, exploration, and limitless possibility!</p>
          </div>
          <a href="#" className="learn-more purple">LEARN MORE</a>
        </div>
      </section>

      <section className="get-involved-section-wrapper">
        <h2 className="get-involved-title">4 Ways to Get Invovled!</h2>
        <div className="get-involved-section">
          <div className="involvement-option" style={{backgroundImage: "url('/images/1-1_Engineer_Kickoff.jpg')"}}>
            Start a Chapter at your School!
          </div>
          <div className="involvement-option" style={{backgroundImage: "url('/images/1-1_Project_Robert.jpg')"}}>
            Volunteer your Time!
          </div>
          <div className="involvement-option" style={{backgroundImage: "url('/images/1-1_Dean_Cadena_and_Membs.JPG')"}}>
            Help US Help YOU!
          </div>
          <div className="involvement-option" style={{backgroundImage: "url('/images/1-1_Donations.jpg')"}}>
            Donate Today!
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  // Scroll logo logic - moved from HomePage to work on all pages
  useEffect(() => {
    const handleScroll = () => {
      const floatingLogo = document.getElementById('floating-logo');
      const stickyLogo = document.getElementById('nav-logo');
      const scrollThreshold = 100;
      if (window.scrollY > scrollThreshold) {
        if (floatingLogo) floatingLogo.classList.add('hidden');
        if (stickyLogo) stickyLogo.classList.remove('hidden');
      } else {
        if (floatingLogo) floatingLogo.classList.remove('hidden');
        if (stickyLogo) stickyLogo.classList.add('hidden');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="main-container">
        {/* FLOATING BIG LOGO OVER BOTH NAVS */}
        <div className="floating-logo-container">
          <Link to="/">
            <img id="floating-logo" src="/images/4-3_Temp_Logo.png" alt="A4A Full Logo" />
          </Link>
        </div>
        {/* TOP NAVBAR (scrolls away) */}
        <div className="top-navbar">
          <ul className="top-links">
            <li className="top-dropdown">
              <NavLink to="/who-are-we" className={({ isActive }) => isActive ? "active" : ""}>Parents & Families</NavLink>
              <ul className="top-dropdown-content">
                <li><NavLink to="/find-us" className={({ isActive }) => isActive ? "active" : ""}>Find Us</NavLink></li>
                <li><NavLink to="/toys-devices" className={({ isActive }) => isActive ? "active" : ""}>Toys & Devices</NavLink></li>
              </ul>
            </li>
            <li className="top-dropdown">
              <NavLink to="/get-involved" className={({ isActive }) => isActive ? "active" : ""}>Students</NavLink>
              <ul className="top-dropdown-content">
                <li><NavLink to="/volunteer-opportunities" className={({ isActive }) => isActive ? "active" : ""}>Volunteer Opportunities</NavLink></li>
                <li><NavLink to="/safety-guidelines" className={({ isActive }) => isActive ? "active" : ""}>Safety Guidelines</NavLink></li>
                <li><NavLink to="/resources-tutorials" className={({ isActive }) => isActive ? "active" : ""}>Training: Resources & Tutorials</NavLink></li>
              </ul>
            </li>
            <li className="top-dropdown">
              <NavLink to="/locations" className={({ isActive }) => isActive ? "active" : ""}>Partners & Supporters</NavLink>
              <ul className="top-dropdown-content">
                <li><NavLink to="/schools-educational-programs" className={({ isActive }) => isActive ? "active" : ""}>Schools & Educational Programs</NavLink></li>
                <li><NavLink to="/hospitals-healthcare-providers" className={({ isActive }) => isActive ? "active" : ""}>Hospitals & Healthcare Providers</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
        {/* STICKY MAIN NAVBAR */}
        <div className="dropdown-container">
          <nav className="navbar">
            <NavLink to="/" end>
              <img id="nav-logo" className="hidden" src="/images/Narrow_Logo.png" alt="A4A Narrow Logo" />
            </NavLink>
            <ul className="nav-links">
              <li className="dropdown">
                <NavLink to="/who-are-we" className={({ isActive }) => isActive ? "active" : undefined}>Who Are We?</NavLink>
                <ul className="dropdown-content">
                  <li><NavLink to="/our-mission" className={({ isActive }) => isActive ? "active" : ""}>Our Mission</NavLink></li>
                  <li><NavLink to="/our-stories" className={({ isActive }) => isActive ? "active" : ""}>Our Stories</NavLink></li>
                  <li><NavLink to="/media" className={({ isActive }) => isActive ? "active" : ""}>Media & News</NavLink></li>
                  <li><NavLink to="/faq" className={({ isActive }) => isActive ? "active" : ""}>FAQs</NavLink></li>
                </ul>
              </li>
              <li className="dropdown">
                <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : undefined}>Our Projects</NavLink>
                <ul className="dropdown-content">
                  <li><NavLink to="/cars" className={({ isActive }) => isActive ? "active" : ""}>Ride-On Cars</NavLink></li>
                  <li><NavLink to="/montessori-board" className={({ isActive }) => isActive ? "active" : ""}>Giant Montessori Board</NavLink></li>
                  <li><NavLink to="/dog-treat" className={({ isActive }) => isActive ? "active" : ""}>Dog Treat Project</NavLink></li>
                  <li><NavLink to="/goodie-bag" className={({ isActive }) => isActive ? "active" : ""}>Goodie Bag Project</NavLink></li>
                </ul>
              </li>
              <li className="dropdown">
                <NavLink to="/locations" className={({ isActive }) => isActive ? "active" : undefined}>Locations</NavLink>
                <ul className="dropdown-content">
                  <li><NavLink to="/locations" className={({ isActive }) => isActive ? "active" : ""}>Rutgers University</NavLink></li>
                </ul>
              </li>
              <li><NavLink to="/donate" className={({ isActive }) => isActive ? "active" : undefined}>Donate</NavLink></li>
            </ul>
          </nav>
        </div>
        {/* ROUTES */}
        <Routes>
          <Route path="/who-are-we" element={<WhoAreWe />} />
          <Route path="/our-mission" element={<OurMission />} />
          <Route path="/our-stories" element={<OurStories />} />
          <Route path="/media" element={<Media />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/montessori-board" element={<MontessoriBoard />} />
          <Route path="/dog-treat" element={<DogTreat />} />
          <Route path="/goodie-bag" element={<GoodieBag />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        {/* Footer is now outside <Routes> so it appears on all pages */}
        <footer className="site-footer">
          <div className="footer-columns">
            <div className="footer-col">
              <h4>Parents & Families</h4>
              <ul>
                <li><NavLink to="/find-us">Find Us</NavLink></li>
                <li><NavLink to="/toys-devices">Toys & Devices</NavLink></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Students</h4>
              <ul>
                <li><NavLink to="/volunteer-opportunities">Volunteer Opportunities</NavLink></li>
                <li><NavLink to="/safety-guidelines">Safety Guidelines</NavLink></li>
                <li><NavLink to="/resources-tutorials">Training: Resources & Tutorials</NavLink></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Partners & Supporters</h4>
              <ul>
                <li><NavLink to="/schools-educational-programs">Schools & Educational Programs</NavLink></li>
                <li><NavLink to="/hospitals-healthcare-providers">Hospitals & Healthcare Providers</NavLink></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Who Are We?</h4>
              <ul>
                <li><NavLink to="/our-mission">Our Mission</NavLink></li>
                <li><NavLink to="/our-stories">Our Stories</NavLink></li>
                <li><NavLink to="/media">Media & News</NavLink></li>
                <li><NavLink to="/faq">FAQs</NavLink></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Our Projects</h4>
              <ul>
                <li><NavLink to="/cars">Ride-On Cars</NavLink></li>
                <li><NavLink to="/montessori-board">Giant Montessori Board</NavLink></li>
                <li><NavLink to="/dog-treat">Dog Treat Project</NavLink></li>
                <li><NavLink to="/goodie-bag">Goodie Bag Project</NavLink></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Locations</h4>
              <ul>
                <li><NavLink to="/locations">Rutgers University</NavLink></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Donate</h4>
              <ul>
                <li><NavLink to="/donate">Donate</NavLink></li>
              </ul>
            </div>
            <div className="footer-col social-col">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="https://www.instagram.com/rutgersa4a/"><img src="/images/1-1_Instagram_icon.png" alt="Instagram" /></a>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-bottom-bar">
          <div className="footer-bottom-left">
            <a href="#" className="footer-legal-link">Privacy & Accessibility Statement</a>
          </div>
          <div className="footer-bottom-right">
            ©2025 Accessible 4 All — A 501(c)(3) Organization
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
