import React from 'react';
import '../../styles/MontessoriBoard.css';

export default function MontessoriBoard() {
  const features = [
    {
      icon: "🎯",
      title: "Accessible Design",
      description: "Larger components and adaptive handles make activities accessible to children with various physical abilities."
    },
    {
      icon: "🧠",
      title: "Cognitive Development",
      description: "Activities designed to enhance problem-solving, spatial awareness, and logical thinking skills."
    },
    {
      icon: "✋",
      title: "Fine Motor Skills",
      description: "Hands-on activities that develop hand-eye coordination and dexterity through engaging play."
    },
    {
      icon: "🎨",
      title: "Customizable",
      description: "Each board is tailored to the child's specific abilities and learning goals."
    }
  ];

  const benefits = [
    {
      title: "Hand-Eye Coordination",
      description: "Precise movements and visual tracking improve coordination skills."
    },
    {
      title: "Spatial Awareness",
      description: "Understanding of space, position, and movement in the environment."
    },
    {
      title: "Problem Solving",
      description: "Logical thinking and creative solutions to challenges."
    },
    {
      title: "Independence",
      description: "Self-directed learning builds confidence and autonomy."
    }
  ];

  return (
    <div className="montessori-container">
      {/* Hero Section */}
      <div 
        className="montessori-hero"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_Work_on_Project.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Giant Montessori Board</h1>
          <p className="hero-subtitle">
            Large-scale, accessible learning boards that empower children with disabilities 
            to develop essential skills through hands-on, engaging activities.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="montessori-main">
        {/* Introduction Section */}
        <section className="intro-section">
          <div className="container">
            <h2>What Makes Our Montessori Boards Special</h2>
            <p>
              We create large-scale Montessori-style learning boards that are accessible to children 
              with various abilities. These boards help develop fine motor skills, problem-solving, 
              and cognitive development through hands-on learning experiences designed for inclusivity.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="features-section">
          <div className="container">
            <h2>Key Features</h2>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section">
          <div className="container">
            <h2>Learning Benefits</h2>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customization Section */}
        <section className="customization-section">
          <div className="container">
            <div className="customization-content">
              <div className="customization-text">
                <h2>Personalized for Every Child</h2>
                <p>
                  Each Montessori board is customized based on the child's specific abilities and 
                  learning goals. We work closely with families and educators to create boards that 
                  address individual needs while providing engaging learning experiences.
                </p>
                <ul className="customization-list">
                  <li>Adaptive handles and grips</li>
                  <li>Custom-sized components</li>
                  <li>Age-appropriate activities</li>
                  <li>Individual learning goals</li>
                </ul>
              </div>
              <div className="customization-image">
                <img src="/images/1-1_Project_Robert.jpg" alt="Custom Montessori Board" />
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section">
          <div className="container">
            <h2>Our Design Process</h2>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Assessment</h3>
                <p>We evaluate the child's abilities and learning goals to understand their needs.</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Design</h3>
                <p>Our team creates a custom design that addresses specific challenges and goals.</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Build</h3>
                <p>We construct the board using high-quality materials and adaptive components.</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Deliver</h3>
                <p>We deliver and install the board, providing training for families and educators.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <div className="container">
            <h2>Ready to Get Started?</h2>
            <p>Contact us to learn more about our Montessori board program and how we can help your child.</p>
            <div className="cta-buttons">
              <button className="cta-button primary">Contact Us</button>
              <button className="cta-button secondary">Learn More</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 