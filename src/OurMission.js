import React from 'react';
import './OurMission.css';

export default function OurMission() {
  return (
    <div className="mission-container">
      {/* Hero Section */}
      <div className="mission-hero" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/4-3_Rutgers_Spring_2025_Everyone.JPG')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Our Mission</h1>
            <p className="hero-subtitle">
              Empowering children with disabilities through innovative engineering solutions that make play accessible for all
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement Section */}
      <div className="mission-statement">
        <div className="container">
          <div className="statement-content">
            <h2>Making Dreams Accessible</h2>
            <p>
              At Accessible 4 All, we believe every child deserves the opportunity to play, learn, and explore 
              their world independently. Our mission is to bridge the gap between engineering innovation and 
              compassionate care, creating custom solutions that empower children with disabilities to experience 
              the joy of childhood activities that many take for granted.
            </p>
          </div>
          <div className="statement-image">
            <img src="/images/1-1_Zoras_Car.JPG" alt="Custom ride-on car for child with disabilities" />
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="core-values">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Innovation</h3>
              <p>We push the boundaries of engineering to create solutions that meet unique needs</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Compassion</h3>
              <p>Every project is driven by empathy and understanding of family needs</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>We work closely with families, healthcare providers, and communities</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>Inclusion</h3>
              <p>We believe in creating opportunities for all children to participate fully</p>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="what-we-do">
        <div className="container">
          <div className="section-header">
            <h2>What We Do</h2>
            <p>Transforming engineering education into real-world impact</p>
          </div>
          
          <div className="services-grid">
            <div className="service-item">
              <div className="service-image">
                <img src="/images/2-3_Isaiah_Car_and_Mom.JPG" alt="Child and mother with custom car" />
              </div>
              <div className="service-content">
                <h3>Custom Ride-On Cars</h3>
                <p>
                  We design and build personalized ride-on vehicles that adapt to each child's specific 
                  mobility needs, allowing them to experience the freedom and joy of independent movement.
                </p>
              </div>
            </div>

            <div className="service-item reverse">
              <div className="service-image">
                <img src="/images/3-2_Zora_and_Group.JPG" alt="Child with group support" />
              </div>
              <div className="service-content">
                <h3>Educational Tools</h3>
                <p>
                  From giant Montessori boards to interactive learning devices, we create educational 
                  tools that make learning accessible and engaging for children with various abilities.
                </p>
              </div>
            </div>

            <div className="service-item">
              <div className="service-image">
                <img src="/images/4-3_Ciaran_Family.JPG" alt="Family with A4A project" />
              </div>
              <div className="service-content">
                <h3>Family Support</h3>
                <p>
                  We provide comprehensive support to families, ensuring they have the resources and 
                  guidance needed to help their children thrive and reach their full potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="impact-section">
        <div className="container">
          <div className="impact-content">
            <h2>Our Impact</h2>
            <p>
              Through our work, we've helped countless children experience the joy of independent play, 
              built confidence in families, and created a community of student engineers who understand 
              the power of compassionate innovation.
            </p>
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
          <div className="impact-image">
            <img src="/images/4-3_Isaiah_Car_and_Family.JPG" alt="Family celebrating with custom car" />
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <div className="container">
          <h2>Join Our Mission</h2>
          <p>
            Whether you're a student engineer looking to make a difference, a family seeking support, 
            or a partner organization wanting to collaborate, we invite you to be part of our mission 
            to make the world more accessible for all children.
          </p>
          <div className="cta-buttons">
            <button className="cta-button primary">Get Involved</button>
            <button className="cta-button secondary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
} 