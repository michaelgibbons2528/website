import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import WhoAreWe from './components/WhoAreWe/WhoAreWe';
import OurMission from './components/WhoAreWe/OurMission';
import OurStories from './components/WhoAreWe/OurStories';
import Media from './components/WhoAreWe/Media';
import FAQ from './components/WhoAreWe/FAQ';
import GetInvolved from './components/GetInvolved/GetInvolved';
import Projects from './components/Projects/Projects';
import Locations from './components/Locations/Locations';
import Donate from './components/GetInvolved/Donate';
import Cars from './components/Projects/Cars';
import MontessoriBoard from './components/Projects/MontessoriBoard';
import DogTreat from './components/Projects/DogTreat';
import GoodieBag from './components/Projects/GoodieBag';
import BathSeat from './components/Projects/BathSeat';

import EnrollYourChild from './components/ParentsFamilies/EnrollYourChild';
import ParentsFamilies from './components/ParentsFamilies/ParentsFamilies';
import Students from './components/Students/Students';

import InterestForm from './components/Students/InterestForm';
import PartnersSupporters from './components/PartnersSupporters/Partners-Supporters';
import SchoolsEducational from './components/PartnersSupporters/Schools-Educational';
import Hospitals from './components/PartnersSupporters/Hospitals-Healthcare';
import Contact from './components/Contact/Contact';

import Login from './components/Login/Login';
import StudentDashboard from './components/StudentDashboard/StudentDashboard';
import './styles/style.css';
import './styles/navbar.css';
import './styles/slideshow.css';
import './styles/4_As.css';
import './styles/involved.css';
import './styles/footer.css';
import './styles/SchoolsEducational.css';
import './styles/Hospitals.css';
import './styles/Students.css';
import './styles/InterestForm.css';

import './styles/Login.css';
import './styles/StudentDashboard.css';

// ScrollToTop component to scroll to top and update title on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Dynamic page titles based on current route
    const getPageTitle = (path) => {
      const titles = {
        '/': 'Accessible 4 All',
        '/who-are-we': 'Who Are We? - Accessible 4 All',
        '/our-mission': 'Our Mission - Accessible 4 All',
        '/our-stories': 'Our Stories - Accessible 4 All',
        '/media': 'Media & News - Accessible 4 All',
        '/faq': 'FAQs - Accessible 4 All',
        '/get-involved': 'Get Involved - Accessible 4 All',
        '/projects': 'Our Projects - Accessible 4 All',
        '/cars': 'Ride-On Cars - Accessible 4 All',
        '/montessori-board': 'Giant Montessori Board - Accessible 4 All',
        '/bath-seat': 'Bath Seat Project - Accessible 4 All',
        '/dog-treat': 'Dog Treat Project - Accessible 4 All',
        '/goodie-bag': 'Goodie Bag Project - Accessible 4 All',
        '/locations': 'Locations - Accessible 4 All',
        '/donate': 'Donate - Accessible 4 All',
    
        '/enroll-your-child': 'Enroll Your Child - Accessible 4 All',
        '/parents-families': 'Parents & Families - Accessible 4 All',
        '/students': 'Students - Accessible 4 All',

        '/interest-form': 'Student Interest Form - Accessible 4 All',
        '/partners-supporters': 'Partners & Supporters - Accessible 4 All',
        '/schools-educational-programs': 'Schools & Educational Programs - Accessible 4 All',
        '/hospitals-healthcare-providers': 'Hospitals & Healthcare Providers - Accessible 4 All',
        '/contact': 'Contact Us - Accessible 4 All',
        '/training': 'Training - Accessible 4 All',
        '/login': 'Student Login - Accessible 4 All',
        '/student-dashboard': 'Student Dashboard - Accessible 4 All'
      };
      
      return titles[path] || 'Accessible 4 All';
    };
    
    document.title = getPageTitle(pathname);
  }, [pathname]);

  return null;
};

// Mobile Navigation Component
const MobileNavigation = ({ isOpen, onClose, currentSection, currentPage }) => {
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    navigate(path);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="mobile-nav active">
      <button className="mobile-nav-close" onClick={onClose}>
        ×
      </button>
      <div className="mobile-nav-content">
        <div className="mobile-nav-header">
          <img 
            src="/images/2-1_Large Logo.png" 
            alt="A4A Logo" 
            onClick={() => handleNavClick('/')}
            style={{ cursor: 'pointer' }}
          />
          <h2 style={{ color: '#333', margin: 0 }}>Navigation Menu</h2>
        </div>
        
        <div className="mobile-nav-section">
          <button 
            className={`mobile-nav-section-header ${currentSection === 'who-are-we' ? 'active-section' : ''}`}
            onClick={() => handleNavClick('/who-are-we')}
          >
            Who Are We?
          </button>
          <ul className="mobile-nav-links">
            <li><button onClick={() => handleNavClick('/our-mission')} className={currentPage === '/our-mission' ? 'active-page' : ''}>Our Mission</button></li>
            <li><button onClick={() => handleNavClick('/our-stories')} className={currentPage === '/our-stories' ? 'active-page' : ''}>Our Stories</button></li>
            <li><button onClick={() => handleNavClick('/media')} className={currentPage === '/media' ? 'active-page' : ''}>Media & News</button></li>
            <li><button onClick={() => handleNavClick('/faq')} className={currentPage === '/faq' ? 'active-page' : ''}>FAQs</button></li>
          </ul>
        </div>

        <div className="mobile-nav-section">
          <button 
            className={`mobile-nav-section-header ${currentSection === 'projects' ? 'active-section' : ''}`}
            onClick={() => handleNavClick('/projects')}
          >
            Our Projects
          </button>
          <ul className="mobile-nav-links">
            <li><button onClick={() => handleNavClick('/cars')} className={currentPage === '/cars' ? 'active-page' : ''}>Ride-On Cars</button></li>
            <li><button onClick={() => handleNavClick('/bath-seat')} className={currentPage === '/bath-seat' ? 'active-page' : ''}>Bath Seat Project</button></li>
            <li><button onClick={() => handleNavClick('/dog-treat')} className={currentPage === '/dog-treat' ? 'active-page' : ''}>Dog Treat Project</button></li>
            <li><button onClick={() => handleNavClick('/goodie-bag')} className={currentPage === '/goodie-bag' ? 'active-page' : ''}>Goodie Bag Project</button></li>
            <li><button onClick={() => handleNavClick('/montessori-board')} className={currentPage === '/montessori-board' ? 'active-page' : ''}>Giant Montessori Board</button></li>
          </ul>
        </div>

        <div className="mobile-nav-section">
          <button 
            className={`mobile-nav-section-header ${currentSection === 'parents-families' ? 'active-section' : ''}`}
            onClick={() => handleNavClick('/parents-families')}
          >
            Parents & Families
          </button>
          <ul className="mobile-nav-links">
            <li><button onClick={() => handleNavClick('/enroll-your-child')} className={currentPage === '/enroll-your-child' ? 'active-page' : ''}>Enroll My Child</button></li>
          </ul>
        </div>

        <div className="mobile-nav-section">
          <button 
            className={`mobile-nav-section-header ${currentSection === 'students' ? 'active-section' : ''}`}
            onClick={() => handleNavClick('/students')}
          >
            Students
          </button>
          <ul className="mobile-nav-links">
            <li><button onClick={() => handleNavClick('/interest-form')} className={currentPage === '/interest-form' ? 'active-page' : ''}>Interest Form</button></li>
          </ul>
        </div>

        <div className="mobile-nav-section">
          <button 
            className={`mobile-nav-section-header ${currentSection === 'partners-supporters' ? 'active-section' : ''}`}
            onClick={() => handleNavClick('/partners-supporters')}
          >
            Partners & Supporters
          </button>
          <ul className="mobile-nav-links">
            <li><button onClick={() => handleNavClick('/partners-supporters')} className={currentPage === '/partners-supporters' ? 'active-page' : ''}>Partners & Supporters</button></li>
            <li><button onClick={() => handleNavClick('/schools-educational-programs')} className={currentPage === '/schools-educational-programs' ? 'active-page' : ''}>Schools & Educational Programs</button></li>
            <li><button onClick={() => handleNavClick('/hospitals-healthcare-providers')} className={currentPage === '/hospitals-healthcare-providers' ? 'active-page' : ''}>Hospitals & Healthcare Providers</button></li>
          </ul>
        </div>

        <div className="mobile-nav-section">
          <button 
            className={`mobile-nav-section-header ${currentSection === 'locations' ? 'active-section' : ''}`}
            onClick={() => handleNavClick('/locations')}
          >
            Locations
          </button>
          <ul className="mobile-nav-links">
            <li><button onClick={() => handleNavClick('/locations')} className={currentPage === '/locations' ? 'active-page' : ''}>Rutgers University</button></li>
          </ul>
        </div>

        <div className="mobile-nav-section">
          <button 
            className={`mobile-nav-section-header ${currentSection === 'contact' ? 'active-section' : ''}`}
            onClick={() => handleNavClick('/contact')}
          >
            Contact Us
          </button>
        </div>

        <div className="mobile-nav-section">
          <button 
            className={`mobile-nav-section-header ${currentSection === 'donate' ? 'active-section' : ''}`}
            onClick={() => handleNavClick('/donate')}
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

const HomePage = ({ isMobileMenuOpen }) => {
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
      alt: 'Meet Wilhelm!',
      h2: 'WIL at the HELM!',
      h1: 'Rutgers A4A',
      p: 'Wilhelm is a 2-year-old boy who\'s got a lot of energy! With the additions of bright, contrasting colored lights, custom buttons, and a comfortable seat for him, he can now RIDE IN STYLE!',
    },
    {
      childName: 'Zora',
      img: '/images/4-3_Zora_and_Group.JPG',
      alt: 'Meet Zora',
      h2: 'Zoomin\' Zora!',
      h1: 'Rutgers A4A',
      p: 'Zora is a 2-year-old girl who loves to get out there and PLAY! With the additions of her own custom seat with a five-point harness & headrest, Zora now OWNS THE ROAD!',
    },
    {
      childName: 'Isaiah',
      img: '/images/4-3_Isaiah_and_Everyone.JPG',
      alt: 'Isaiah and Everyone',
      h2: 'The QUACKMOBILE!',
      h1: 'Rutgers A4A',
      p: 'Isaiah is a 4 year-old boy who\'s now driving his AWESOME NEW CAR! With the additions of back and head supports, on top of his custom seat cushions, he\'s now the COOLEST KID ON THE BLOCK!',
    },
    {
      childName: 'LUCA',
      img: '/images/4-3_Luca_and_Group.JPG',
      alt: 'Luca and Everyone',
      h2: 'LUCATRON',
      h1: 'Rutgers A4A',
      p: 'Luca is a 3 year-old boy who loves playing sports and the outdoors! With the additions of a five point harness, custom accerlation button, and HIS VERY OWN BASKETBALL HOOP on the back, Luca will be the MVP of his neighborhood!',
    },
  ];

  // Function to handle learn more button click
  const handleLearnMoreClick = (e, childName) => {
    e.stopPropagation(); // Prevent slide navigation
    navigate('/cars', { state: { scrollToChild: childName } });
  };

  // Function to handle slide area click (for navigation)
  const handleSlideAreaClick = (e, direction) => {
    e.stopPropagation(); // Prevent slide navigation
    changeSlide(direction);
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
              style={{ display: i === slideIndex ? 'block' : 'none' }}
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
              
              {/* Mobile Learn More Button */}
              <button 
                className="mobile-learn-more"
                onClick={(e) => handleLearnMoreClick(e, slide.childName)}
              >
                Learn More
              </button>
              
              {/* Mobile Arrow Buttons */}
              <button 
                className={`mobile-arrow-left ${isMobileMenuOpen ? 'hidden' : ''}`}
                onClick={(e) => handleSlideAreaClick(e, -1)}
              >
                ❮
              </button>
              <button 
                className={`mobile-arrow-right ${isMobileMenuOpen ? 'hidden' : ''}`}
                onClick={(e) => handleSlideAreaClick(e, 1)}
              >
                ❯
              </button>
            </div>
          ))}
          {/* Arrows */}
          <button className="prev" onClick={() => changeSlide(-1)} style={{ cursor: 'pointer' }}>❮</button>
          <button className="next" onClick={() => changeSlide(1)} style={{ cursor: 'pointer' }}>❯</button>
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
        <p className="section-subtext">
          Accessible 4 All (A4A) is dedicated to modifying toys and mobility devices to meet 
          the needs of children with physical and developmental disabilities. 
          In partnership with local families, we have developed personalized, 
          accessible ride-on vehicles that provide children with a fun and 
          engaging way to participate in play while supporting their 
          mobility needs.
        </p>
        <h2 className="section-heading">Our 4 A's:</h2>
      </section>

      <section className="panel-section">
        <div className="panel-1">
          <div className="panel-content">
            <h3>Accessible</h3>
            <img src="/images/1-1_Wilhelm_and_Family.JPG" alt="Project-Ciaran" />
            <p>We provide children with non-discriminatory access to toys and devices they were 
              previously unable to use!</p>
          </div>
          <NavLink to="/projects" className="learn-more red">LEARN MORE: PROJECTS</NavLink>
        </div>
        <div className="panel-2">
          <div className="panel-content">
            <h3>Accommodating</h3>
            <img src="/images/1-1_Giuseppe_meets_Fiona_Family.JPG" alt="Fiona and Family" />
            <p>We work alongside loving families, creating and delivering toys and devices 
              that are customized specifically for their own kid!</p>
          </div>
          <a href="/parents-families" className="learn-more pink">LEARN MORE: PARENTS & FAMILIES</a>
        </div>
        <div className="panel-3">
          <div className="panel-content">
            <h3>Adaptive</h3>
            <img src="/images/1-1_Project_Braylon.jpg" alt="Project Ciaran" />
            <p>We teach engineering basics—from tools to the design process—while 
              encouraging creativity and hands-on learning not often found in classrooms!</p>
          </div>
          <a href="students" className="learn-more blue">LEARN MORE: STUDENTS</a>
        </div>
        <div className="panel-4">
          <div className="panel-content">
            <h3>Adventurous</h3>
            <img src="/images/1-1_Zora_Outside.jpg" alt="Living" />
            <p>We design these toys and devices to launch children into a world of 
              independence, exploration, and limitless possibility!</p>
          </div>
          <a href="/locations" className="learn-more purple">LEARN MORE: LOCATIONS</a>
        </div>
      </section>

      <section className="get-involved-section-wrapper">
        <h2 className="get-involved-title">4 Ways to Get Invovled!</h2>
        <div className="get-involved-section">
                          <Link to="/schools-educational-programs" className="involvement-option" style={{backgroundImage: "url('/images/1-1_Engineer_Kickoff.jpg')"}}>
            Start a Chapter at your School!
          </Link>
          <Link to="/parents-families" className="involvement-option" style={{backgroundImage: "url('/images/1-1_Project_Robert.jpg')"}}>
            Enroll your Child in our Program!
          </Link>
          <Link to="/partners-supporters" className="involvement-option" style={{backgroundImage: "url('/images/1-1_Dean_Cadena_and_Membs.JPG')"}}>
            Help US Help YOU!
          </Link>
          <Link to="/donate" className="involvement-option" style={{backgroundImage: "url('/images/1-1_Donations.jpg')"}}>
            Donate Today!
          </Link>
        </div>
      </section>
    </>
  );
}

// Helper function to determine current section and page
const getNavigationState = (pathname) => {
  const sections = {
    'who-are-we': {
      name: 'Who Are We?',
      pages: ['/who-are-we', '/our-mission', '/our-stories', '/media', '/faq']
    },
    'projects': {
      name: 'Our Projects',
      pages: ['/projects', '/cars', '/montessori-board', '/bath-seat', '/dog-treat', '/goodie-bag']
    },
    'parents-families': {
      name: 'Parents & Families',
              pages: ['/parents-families']
    },
    'students': {
      name: 'Students',
      pages: ['/students', '/interest-form']
    },
    'partners-supporters': {
      name: 'Partners & Supporters',
      pages: ['/partners-supporters', '/schools-educational-programs', '/hospitals-healthcare-providers']
    },
    'locations': {
      name: 'Locations',
      pages: ['/locations']
    },
    'donate': {
      name: 'Donate',
      pages: ['/donate']
    }
  };

  // Find current section
  let currentSection = null;
  let currentPage = pathname;

  for (const [sectionKey, section] of Object.entries(sections)) {
    if (section.pages.includes(pathname)) {
      currentSection = sectionKey;
      break;
    }
  }

  return { currentSection, currentPage };
};

// Navigation component that can use useLocation
const Navigation = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentSection, currentPage } = getNavigationState(location.pathname);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, setIsMobileMenuOpen]);

  // Handle scroll detection for logo switching
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>

      {/* TOP NAVBAR (scrolls away) */}
      <div className={`top-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <Link to="/">
          <img className="spanning-logo" src="/images/2-1_Large Logo.png" alt="A4A Logo" />
        </Link>
        <ul className="top-links">
          <li className={`top-dropdown ${currentSection === 'parents-families' ? 'active-section' : ''}`}>
            <NavLink to="/parents-families" className={currentSection === 'parents-families' ? 'section-active' : ''}>
              Parents & Families
            </NavLink>
            <ul className="top-dropdown-content">
              <li><NavLink to="/enroll-your-child" className={currentPage === '/enroll-your-child' ? "active-page" : ""}>Enroll Your Child</NavLink></li>
              
            </ul>
          </li>
          <li className={`top-dropdown ${currentSection === 'students' ? 'active-section' : ''}`}>
            <NavLink to="/students" className={currentSection === 'students' ? 'section-active' : ''}>
              Students
            </NavLink>
            <ul className="top-dropdown-content">

              <li><NavLink to="/interest-form" className={currentPage === '/interest-form' ? "active-page" : ""}>Interest Form</NavLink></li>
 
            </ul>
          </li>
          <li className={`top-dropdown ${currentSection === 'partners-supporters' ? 'active-section' : ''}`}>
            <NavLink to="/partners-supporters" className={currentSection === 'partners-supporters' ? 'section-active' : ''}>
              Partners & Supporters
            </NavLink>
            <ul className="top-dropdown-content">
              <li><NavLink to="/schools-educational-programs" className={currentPage === '/schools-educational-programs' ? "active-page" : ""}>Schools & Educational Programs</NavLink></li>
              <li><NavLink to="/hospitals-healthcare-providers" className={currentPage === '/hospitals-healthcare-providers' ? "active-page" : ""}>Hospitals & Healthcare Providers</NavLink></li>
            </ul>
          </li>
        </ul>
      </div>

      {/* STICKY MAIN NAVBAR */}
      <div className="dropdown-container">
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
          <Link to="/">
            <img id="nav-logo" src="/images/2-1_Large Logo.png" alt="A4A Logo" />
            <img id="nav-logo-scrolled" src="/images/3-1_Narrow-Logo.png" alt="A4A Logo" />
          </Link>
          <ul className="nav-links">
            <li className={`dropdown ${currentSection === 'who-are-we' ? 'active-section' : ''}`}>
              <NavLink to="/who-are-we" className={currentSection === 'who-are-we' ? 'section-active' : ''}>
                Who Are We?
              </NavLink>
              <ul className="dropdown-content">
                <li><NavLink to="/our-mission" className={currentPage === '/our-mission' ? "active-page" : ""}>Our Mission</NavLink></li>
                <li><NavLink to="/our-stories" className={currentPage === '/our-stories' ? "active-page" : ""}>Our Stories</NavLink></li>
                <li><NavLink to="/media" className={currentPage === '/media' ? "active-page" : ""}>Media & News</NavLink></li>
                <li><NavLink to="/faq" className={currentPage === '/faq' ? "active-page" : ""}>FAQs</NavLink></li>
              </ul>
            </li>
            <li className={`dropdown ${currentSection === 'projects' ? 'active-section' : ''}`}>
              <NavLink to="/projects" className={currentSection === 'projects' ? 'section-active' : ''}>
                Our Projects
              </NavLink>
              <ul className="dropdown-content">
                <li><NavLink to="/cars" className={currentPage === '/cars' ? "active-page" : ""}>Ride-On Cars</NavLink></li>
                <li><NavLink to="/bath-seat" className={currentPage === '/bath-seat' ? "active-page" : ""}>Bath Seat Project</NavLink></li>
                <li><NavLink to="/dog-treat" className={currentPage === '/dog-treat' ? "active-page" : ""}>Dog Treat Project</NavLink></li>
                <li><NavLink to="/goodie-bag" className={currentPage === '/goodie-bag' ? "active-page" : ""}>Goodie Bag Project</NavLink></li>
                <li><NavLink to="/montessori-board" className={currentPage === '/montessori-board' ? "active-page" : ""}>Giant Montessori Board</NavLink></li>
              </ul>
            </li>
            <li className={currentSection === 'contact' ? 'active-section' : ''}>
              <NavLink to="/contact" className={currentSection === 'contact' ? 'section-active' : ''}>Contact Us</NavLink>
            </li>
            <li className={currentSection === 'donate' ? 'active-section' : ''}>
              <NavLink to="/donate" className={currentSection === 'donate' ? 'section-active' : ''}>Donate</NavLink>
            </li>
          </ul>
          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
      <MobileNavigation 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        currentSection={currentSection}
        currentPage={currentPage}
      />
    </>
  );
};

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Scroll logo logic - moved from HomePage to work on all pages
  useEffect(() => {
    const handleScroll = () => {
      const floatingLogo = document.getElementById('floating-logo');
      const stickyLogo = document.getElementById('nav-logo');
      
      // Simple threshold for logo switching
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
      <Navigation isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
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
        <Route path="/bath-seat" element={<BathSeat />} />
        <Route path="/dog-treat" element={<DogTreat />} />
        <Route path="/goodie-bag" element={<GoodieBag />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/donate" element={<Donate />} />
  
        <Route path="/enroll-your-child" element={<EnrollYourChild />} />
        <Route path="/parents-families" element={<ParentsFamilies />} />
        <Route path="/students" element={<Students />} />

        <Route path="/interest-form" element={<InterestForm />} />
        <Route path="/partners-supporters" element={<PartnersSupporters />} />
        <Route path="/schools-educational-programs" element={<SchoolsEducational />} />
        <Route path="/hospitals-healthcare-providers" element={<Hospitals />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/" element={<HomePage isMobileMenuOpen={isMobileMenuOpen} />} />
      </Routes>
      {/* Footer is now outside <Routes> so it appears on all pages */}
      <footer className="site-footer">
          <div className="footer-columns">
            <div className="footer-col">
              <h4><NavLink to="/parents-families">Parents & Families</NavLink></h4>
              <ul>
                <li><NavLink to="/enroll-your-child">Enroll Your Child</NavLink></li>
  
              </ul>
            </div>
            <div className="footer-col">
              <h4><NavLink to="/students">Students</NavLink></h4>
              <ul>

                <li><NavLink to="/interest-form">Interest Form</NavLink></li>
 
              </ul>
            </div>
            <div className="footer-col">
              <h4><NavLink to="/partners-supporters">Partners & Supporters</NavLink></h4>
              <ul>
                <li><NavLink to="/partners-supporters">Partners & Supporters</NavLink></li>
                <li><NavLink to="/schools-educational-programs">Schools & Educational Programs</NavLink></li>
                <li><NavLink to="/hospitals-healthcare-providers">Hospitals & Healthcare Providers</NavLink></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4><NavLink to="/who-are-we">Who Are We?</NavLink></h4>
              <ul>
                <li><NavLink to="/our-mission">Our Mission</NavLink></li>
                <li><NavLink to="/our-stories">Our Stories</NavLink></li>
                <li><NavLink to="/media">Media & News</NavLink></li>
                <li><NavLink to="/faq">FAQs</NavLink></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4><NavLink to="/projects">Our Projects</NavLink></h4>
              <ul>
                <li><NavLink to="/cars">Ride-On Cars</NavLink></li>
                <li><NavLink to="/montessori-board">Giant Montessori Board</NavLink></li>
                <li><NavLink to="/bath-seat">Bath Seat Project</NavLink></li>
                <li><NavLink to="/dog-treat">Dog Treat Project</NavLink></li>
                <li><NavLink to="/goodie-bag">Goodie Bag Project</NavLink></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4><NavLink to="/locations">Locations</NavLink></h4>
              <ul>
                <li><NavLink to="/locations">Rutgers University</NavLink></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4><NavLink to="/contact" style={{color: '#a30000'}}>Contact Us</NavLink></h4>
            </div>
            <div className="footer-col">
              <h4><NavLink to="/donate" style={{color: '#a30000'}}>Donate</NavLink></h4>
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
            <button className="footer-legal-link">Privacy & Accessibility Statement</button>
          </div>
                      <div className="footer-bottom-center">
              <p className="photo-credits">Photo Credits: <a href="https://www.instagram.com/guipotography/" target="_blank" rel="noopener noreferrer">Matthew Andrei Guipo</a></p>
            </div>
          <div className="footer-bottom-right">
            ©2025 Accessible 4 All — A 501(c)(3) Organization
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
