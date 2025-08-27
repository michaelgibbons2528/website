import React from 'react';
import '../../styles/Locations.css';

export default function Locations() {
  return (
    <div className="locations-container">
      {/* Hero Section */}
      <div
        className="locations-hero"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_Playing_Game.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Our Locations</h1>
        </div>
      </div>

      <div className="locations-main">
        {/* Introduction Section */}
        <section className="intro-section">
          <div className="container">
            <h2>Where We Serve</h2>
            <p>
              Accessible 4 All operates from multiple locations, serving families in different 
              communities. Each chapter brings together students, faculty, and community members 
              to create adaptive equipment and provide support to children with disabilities.
            </p>
          </div>
        </section>

        {/* Main Location Section */}
        <section className="main-location-section">
          <div className="container">
            <div className="location-card featured">
              <div className="location-image">
                <img src="/images/4-3_Rutgers_Spring_2025_Everyone.JPG" alt="Rutgers University A4A Chapter" />
              </div>
              <div className="location-content">
                <div className="location-badge">Main Chapter</div>
                <h3>Rutgers University</h3>
                <p className="location-description">
                  Our flagship chapter at Rutgers University brings together engineering students, 
                  faculty, and community members to create adaptive equipment for children in 
                  the local community. This is where our mission began and continues to thrive.
                </p>
                <div className="location-details">
                  <div className="detail-item">
                    <span className="detail-icon">📍</span>
                    <span>New Brunswick, NJ</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">👥</span>
                    <span>Student-led organization</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">🔧</span>
                    <span>Engineering collaboration</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">🤝</span>
                    <span>Community partnerships</span>
                  </div>
                </div>
                <div className="location-actions">
                  <a href="/get-involved" className="action-button primary">Get Involved</a>
                  <a href="/contact" className="action-button secondary">Contact Chapter</a>
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>
    </div>
  );
} 