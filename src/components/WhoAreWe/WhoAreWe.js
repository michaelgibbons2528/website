import React from "react";
import '../../styles/WhoAreWe.css';

const WhoAreWe = () => {
  return (
    <div className="who-are-we-container">
      {/* Hero Section */}
      <div className="mission-hero" style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_Rutgers_Spring_2025_Everyone.JPG')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Who Are We?</h1>
            <p className="hero-subtitle">
              Empowering children with disabilities through innovative engineering solutions and inclusive experiences
            </p>
          </div>
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
              with compassionate service. From custom ride-on cars to educational Montessori boards, we 
              create solutions that address real needs. Our programs not only benefit children with 
              disabilities but also provide valuable learning experiences for student engineers, fostering 
              a community of empathy, innovation, and inclusion.
            </p>
          </div>
        </div>

        {/* Right Column - Visual Elements */}
        <div className="content-right">
          <div className="mission-pillars">
            <h2>The A4A Core Four</h2>
            <div className="pillars-container">
              <div className="pillar">
                <div className="pillar-bar pillar-1"></div>
                <h3>Accessible</h3>
                <p></p>
              </div>
              <div className="pillar">
                <div className="pillar-bar pillar-2"></div>
                <h3>Accommodating</h3>
                <p>Accessible for all abilities</p>
              </div>
              <div className="pillar">
                <div className="pillar-bar pillar-3"></div>
                <h3>Adaptive</h3>
                <p>Students will learn to adapt to the needs of the child</p>
              </div>
              <div className="pillar">
                <div className="pillar-bar pillar-4"></div>
                <h3>Adventurous</h3>
                <p>Allow children to experience the freedom to be independent</p>
              </div>
              
            </div>
          </div>

          {/* Featured Images */}
          <div className="featured-images">
            <div className="image-grid">
              <div className="image-item">
                <img src="/images/1-1_Ciaran_Car_and_Group.JPG" alt="Child with custom ride-on car" />
                <p>Custom Ride-On Cars</p>
              </div>
              <div className="image-item">
                <img src="/images/4-3_Rutgers_Fall_2024_EVERYONE.JPG" alt="A4A team members" />
                <p>Our Dedicated Team</p>
              </div>
              <div className="image-item">
                <img src="/images/1-1_Fiona_and_Family.JPG" alt="Family with A4A project" />
                <p>Supporting Families</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="impact-section">
        <h2>Our Impact</h2>
        <div className="impact-stats">
          <div className="stat">
            <h3>50+</h3>
            <p>Children Helped</p>
          </div>
          <div className="stat">
            <h3>25+</h3>
            <p>Custom Projects</p>
          </div>
          <div className="stat">
            <h3>100+</h3>
            <p>Student Engineers</p>
          </div>
          <div className="stat">
            <h3>15+</h3>
            <p>Partner Organizations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe; 