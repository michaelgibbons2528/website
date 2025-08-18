import React from 'react';
import '../../styles/Media.css';

export default function Media() {
  return (
    <div className="media-container">
      {/* Hero Section */}
      <div className="media-hero" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/4-3_Rutgers_Spring_2025_Everyone.JPG')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content">
          <h1>Media & News</h1>
        </div>
      </div>

      {/* Featured News Section */}
      <div className="media-section">
        <div className="container">
          <div className="media-intro">
            <h2>Featured Coverage</h2>
            <p>
              Our work has been featured in local and university media outlets, highlighting 
              the impact we're making in the community and the stories of the children we serve.
            </p>
          </div>

          <div className="news-grid">
            {/* Rutgers University News */}
            <a 
              href="https://www.rutgers.edu/news/senior-engineering-students-launch-club-adapt-toys-disabled-children" 
              target="_blank" 
              rel="noopener noreferrer"
              className="news-card featured clickable"
            >
              <div className="news-image">
                <img src="/images/16-9_Rutgers_Article.jpg" alt="A4A team members at Rutgers" />
                <div className="news-badge">
                  <span>Featured</span>
                </div>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span className="source">Rutgers University</span>
                  <span className="date">April 22, 2025</span>
                </div>
                <h3>Senior Engineering Students Launch Club to Adapt Toys for Disabled Children</h3>
                <p className="news-excerpt">
                  Graduating seniors Michael Gibbons and Aaron Clarion, founders of A4A (Accessible, 
                  Accommodating, Adaptive and Adventurous for All), design and modify toys and devices 
                  for children with physical and developmental disabilities.
                </p>
                <div className="news-highlights">
                  <h4>Key Highlights:</h4>
                  <ul>
                    <li>50 active members in just one year</li>
                    <li>5 families served with custom ride-on cars</li>
                    <li>Plans to expand to other universities</li>
                    <li>Non-profit status in development</li>
                  </ul>
                </div>
              </div>
            </a>

            {/* Verona News */}
            <a 
              href="https://myveronanj.com/2024/07/07/vhs-21-grad-helps-children-with-disabilities/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="news-card clickable"
            >
              <div className="news-image">
                <img src="/images/16-9_Verona_Article.jpg" alt="Engineering students working on projects" />
                <div className="news-badge">
                  <span>Local News</span>
                </div>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span className="source">MyVeronaNJ.com</span>
                  <span className="date">July 7, 2024</span>
                </div>
                <h3>VHS '21 Grad Helps Children with Disabilities</h3>
                <p className="news-excerpt">
                  A local graduate from Verona High School Class of 2021 is making a difference 
                  in the lives of children with disabilities through innovative engineering solutions 
                  and adaptive technology.
                </p>
                <div className="news-highlights">
                  <h4>Key Highlights:</h4>
                  <ul>
                    <li>Local graduate making community impact</li>
                    <li>Innovative engineering solutions</li>
                    <li>Adaptive technology development</li>
                    <li>Community service recognition</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>



          {/* Social Media Section */}
          <div className="social-media-section">
            <h2>Stay Connected</h2>
            <p>
              Follow us on social media for regular updates, behind-the-scenes content, 
              and stories from the families we work with.
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/rutgersa4a/" className="social-link instagram">
                <img src="/images/1-1_Instagram_icon.png" alt="Instagram" />
                <span>@rutgersa4a</span>
              </a>
              <div className="social-link coming-soon">
                <span>📘 Facebook</span>
                <small>Coming Soon</small>
              </div>
              <div className="social-link coming-soon">
                <span>🐦 Twitter</span>
                <small>Coming Soon</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 