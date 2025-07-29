import React from 'react';
import './css/Locations.css';

export default function Locations() {
  return (
    <div className="locations-container">
      {/* Hero Section */}
      <div
        className="locations-hero"
        style={{
          backgroundImage: "linear-gradient(rgba(163, 0, 0, 0.1), rgba(221, 39, 1, 0.1)), url('/images/4-3_Rutgers_Fall_2024_EVERYONE.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Our Locations</h1>
          <p className="hero-subtitle">
            Find the A4A chapter nearest to you and discover how we're making a difference in communities across the region
          </p>
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

        {/* Service Area Section */}
        <section className="service-area-section">
          <div className="container">
            <h2>Our Service Area</h2>
            <div className="service-grid">
              <div className="service-card">
                <div className="service-icon">🏠</div>
                <h3>Primary Coverage</h3>
                <p>We primarily serve families in the New Jersey area, particularly around Rutgers University and surrounding communities.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🌍</div>
                <h3>Expanding Reach</h3>
                <p>We're actively working to expand our reach and help more families in need across the region.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🚀</div>
                <h3>New Chapters</h3>
                <p>We're establishing new chapters at other universities and in other communities to serve more families.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="contact-section">
          <div className="container">
            <h2>Get In Touch</h2>
            <div className="contact-grid">
              <div className="contact-card">
                <div className="contact-icon">📧</div>
                <h3>Email Us</h3>
                <p>Send us a message to learn more about our services or to get involved with our mission.</p>
                <a href="mailto:info@a4all.org" className="contact-link">info@a4all.org</a>
              </div>
              <div className="contact-card">
                <div className="contact-icon">📱</div>
                <h3>Social Media</h3>
                <p>Follow us on Instagram to stay updated with our latest projects and community events.</p>
                <a href="https://www.instagram.com/rutgersa4a/" className="contact-link">@rutgersa4a</a>
              </div>
              <div className="contact-card">
                <div className="contact-icon">🎓</div>
                <h3>University Partnership</h3>
                <p>Interested in starting an A4A chapter at your university? We'd love to help you get started.</p>
                <a href="/get-involved" className="contact-link">Learn More</a>
              </div>
            </div>
          </div>
        </section>

        {/* Expansion Section */}
        <section className="expansion-section">
          <div className="container">
            <div className="expansion-content">
              <div className="expansion-text">
                <h2>Expanding Our Mission</h2>
                <p>
                  We're working to establish new chapters at other universities and in other 
                  communities. Our goal is to make adaptive equipment and support accessible 
                  to families everywhere.
                </p>
                <ul className="expansion-list">
                  <li>University partnerships and student organizations</li>
                  <li>Community outreach and family support</li>
                  <li>Engineering education and hands-on learning</li>
                  <li>Adaptive equipment development and distribution</li>
                </ul>
                <div className="expansion-actions">
                  <a href="/get-involved" className="expansion-button primary">Start a Chapter</a>
                  <a href="/donate" className="expansion-button secondary">Support Expansion</a>
                </div>
              </div>
              <div className="expansion-image">
                <img src="/images/4-3_C119_Last_Minute.jpg" alt="A4A Students Working" />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Ready to Make a Difference?</h2>
            <p>
              Whether you're a family looking for support, a student wanting to get involved, 
              or a community member interested in our mission, we'd love to hear from you.
            </p>
            <div className="cta-buttons">
              <a href="/get-involved" className="cta-button primary">Get Involved</a>
              <a href="/donate" className="cta-button secondary">Support Our Work</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 