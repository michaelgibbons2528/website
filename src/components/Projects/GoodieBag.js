import React from 'react';
import '../../styles/GoodieBag.css';

export default function GoodieBag() {
  return (
    <div className="goodie-bag-container">
      {/* Hero Section */}
      <div
        className="goodie-bag-hero"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_Halloween_Gifts.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Goodie Bag Project</h1>
          <p className="hero-subtitle">
            Empowering children to create, organize, and share through accessible packaging and assembly tools
          </p>
        </div>
      </div>

      <div className="goodie-bag-main">
        {/* Introduction Section */}
        <section className="intro-section">
          <div className="container">
            <h2>Creating Joy Through Organization</h2>
            <p>
              Our Goodie Bag Project transforms simple packaging into an engaging learning experience. 
              We design accessible tools and assembly processes that help children develop organizational 
              skills, fine motor control, and social awareness while creating something special to share with others.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="container">
            <h2>Project Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🎁</div>
                <h3>Accessible Packaging</h3>
                <p>Specially designed containers and packaging tools that make assembly accessible to children with various physical abilities.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔧</div>
                <h3>Adaptive Tools</h3>
                <p>Custom scoops, funnels, and assembly tools that accommodate different coordination levels and motor skills.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📦</div>
                <h3>Organizational Systems</h3>
                <p>Structured assembly processes that teach planning, sequencing, and organizational skills in an engaging way.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🤝</div>
                <h3>Social Learning</h3>
                <p>Activities designed to promote sharing, cooperation, and social interaction while building confidence.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section">
          <div className="container">
            <h2>Developmental Benefits</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>Fine Motor Skills</h3>
                <p>Precise movements required for scooping, sorting, and packaging help develop hand-eye coordination and dexterity.</p>
              </div>
              <div className="benefit-card">
                <h3>Organizational Thinking</h3>
                <p>Children learn to plan, sequence, and organize items systematically, building important cognitive skills.</p>
              </div>
              <div className="benefit-card">
                <h3>Social Development</h3>
                <p>Creating items to share with others fosters empathy, generosity, and social connection.</p>
              </div>
              <div className="benefit-card">
                <h3>Confidence Building</h3>
                <p>Successfully completing projects and sharing them with others builds self-esteem and pride in accomplishments.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section">
          <div className="container">
            <h2>How It Works</h2>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Assessment</h3>
                <p>We evaluate each child's abilities and preferences to customize the assembly process and tools.</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Tool Selection</h3>
                <p>Adaptive tools are chosen based on individual needs, ensuring accessibility and success.</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Guided Assembly</h3>
                <p>Children work through structured steps with support, learning organization and planning skills.</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Sharing & Celebration</h3>
                <p>Completed goodie bags are shared with others, reinforcing social skills and accomplishment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Customization Section */}
        <section className="customization-section">
          <div className="container">
            <div className="customization-content">
              <div className="customization-text">
                <h2>Personalized Experience</h2>
                <p>
                  Every child is unique, and our Goodie Bag Project reflects that. We customize the experience 
                  based on individual abilities, interests, and developmental goals.
                </p>
                <ul className="customization-list">
                  <li>Adaptive tools for different motor abilities</li>
                  <li>Customizable assembly sequences</li>
                  <li>Personalized packaging designs</li>
                  <li>Individualized support and guidance</li>
                  <li>Flexible project complexity levels</li>
                </ul>
              </div>
              <div className="customization-image">
                <img src="/images/4-3_Goodie_Bag_Assembly.jpg" alt="Goodie Bag Assembly Process" />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Ready to Create Something Special?</h2>
            <p>
              Join us in making the Goodie Bag Project accessible to every child. 
              Contact us to learn more about our adaptive tools and assembly processes.
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