import React, { useState, useEffect } from "react";
import '../../styles/WhoAreWe.css';

const WhoAreWe = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const words = ['Abilities', 'Students', 'Kids', 'Families'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      // Change the word after a brief fade out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsTransitioning(false);
      }, 150);
      
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="who-are-we-container">
      {/* Hero Section */}
      <div className="mission-hero" style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_Rutgers_Spring_2025_Everyone.JPG')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content">
          <h1>Who Are We?</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Column - Text Content */}
        <div className="content-left">
          <div className="content-section">
            <h2>Our Mission</h2>
            <p>
              Accessible 4 All is a student-led organization dedicated to creating innovative engineering solutions 
              that empower children with disabilities. We believe every child deserves the opportunity to play, 
              learn, and grow in an inclusive environment. Through our projects, we bridge the gap between 
              engineering education and real-world impact, making a difference in the lives of families and 
              communities.
            </p>
          </div>

          <div className="content-section">
            <h2>Who We Serve</h2>
            <p>
              We serve children with various disabilities and their families, including those with mobility 
              challenges, developmental delays, and other special needs. Our projects are designed to be 
              adaptable and inclusive, ensuring that every child can participate and benefit from our 
              engineering solutions. We work closely with families, healthcare providers, and educational 
              institutions to create meaningful impact.
            </p>
          </div>

          <div className="content-section">
            <h2>Our Programs</h2>
            <p>
              Our organization offers a comprehensive range of programs that combine engineering innovation 
              with compassionate service. We create solutions that address real needs. Our programs not 
              only benefit children with disabilities but also provide valuable learning experiences for 
              students passionate about engineering and helping others, fostering a community of empathy, 
              innovation, and inclusion.
            </p>
          </div>
        </div>

        {/* Right Column - Visual Elements */}
        <div className="content-right">
          <div className="mission-pillars">
            <h2>Our Four A's</h2>
            <div className="pillars-container">
              <div className="pillar">
                <div className="pillar-bar pillar-1"></div>
                <h3>
                  Accessible 4 All{' '}
                  <span className={`rotating-word ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
                    {words[currentIndex]}
                  </span>
                </h3>
              </div>
              <div className="pillar">
                <div className="pillar-bar pillar-2"></div>
                <h3>
                  Accommodating 4 All{' '}
                  <span className={`rotating-word ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
                    {words[(currentIndex + 1) % words.length]}
                  </span>
                </h3>
              </div>
              <div className="pillar">
                <div className="pillar-bar pillar-3"></div>
                <h3>
                  Adaptive 4 All{' '}
                  <span className={`rotating-word ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
                    {words[(currentIndex + 2) % words.length]}
                  </span>
                </h3>
              </div>
              <div className="pillar">
                <div className="pillar-bar pillar-4"></div>
                <h3>
                  Adventurous 4 All{' '}
                  <span className={`rotating-word ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
                    {words[(currentIndex + 3) % words.length]}
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe; 