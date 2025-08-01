import React from 'react';
import '../../styles/DogTreat.css';

export default function DogTreat() {
  const features = [
    {
      icon: "🐕",
      title: "Pet Care Learning",
      description: "Children learn about animal care and responsibility while developing essential skills."
    },
    {
      icon: "✋",
      title: "Motor Skills Development",
      description: "Fine motor skills and hand-eye coordination through hands-on treat making."
    },
    {
      icon: "🧠",
      title: "Cognitive Benefits",
      description: "Following instructions, measuring, and problem-solving skills."
    },
    {
      icon: "🎯",
      title: "Adaptive Tools",
      description: "Specially designed equipment that makes the process accessible to all abilities."
    }
  ];

  const benefits = [
    {
      title: "Fine Motor Skills",
      description: "Precise movements for measuring, mixing, and shaping treats."
    },
    {
      title: "Patience & Focus",
      description: "Following step-by-step instructions builds concentration."
    },
    {
      title: "Confidence Building",
      description: "Creating something meaningful for pets boosts self-esteem."
    },
    {
      title: "Responsibility",
      description: "Learning to care for animals teaches important life skills."
    }
  ];

  const tools = [
    "Adaptive measuring cups",
    "Easy-grip mixing tools", 
    "Custom cutting implements",
    "Non-slip work surfaces",
    "Safety equipment",
    "Step-by-step guides"
  ];

  return (
    <div className="dog-treat-container">
      {/* Hero Section */}
      <div 
        className="dog-treat-hero"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_Dog_Treat_Test.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Dog Treat Project</h1>
          <p className="hero-subtitle">
            Accessible tools for making dog treats help children develop motor skills and coordination 
            while building confidence through meaningful activities with pets.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="dog-treat-main">
        {/* Introduction Section */}
        <section className="intro-section">
          <div className="container">
            <h2>Learning Through Pet Care</h2>
            <p>
              Our Dog Treat Project combines skill development with animal care, creating a unique 
              learning experience that helps children develop motor skills, coordination, and confidence 
              while doing something meaningful for pets.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="features-section">
          <div className="container">
            <h2>Project Features</h2>
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

        {/* Adaptive Equipment Section */}
        <section className="equipment-section">
          <div className="container">
            <div className="equipment-content">
              <div className="equipment-text">
                <h2>Adaptive Equipment</h2>
                <p>
                  We provide specially designed tools and equipment that make the treat-making 
                  process accessible to children with various physical abilities. Our adaptive 
                  equipment ensures every child can participate and succeed.
                </p>
                <div className="tools-list">
                  <h3>Available Tools:</h3>
                  <ul>
                    {tools.map((tool, index) => (
                      <li key={index}>{tool}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="equipment-image">
                <img src="/images/1-1_Project_Robert_Frog_Fabric.jpg" alt="Dog Treat Making Tools" />
              </div>
            </div>
          </div>
        </section>

        {/* Therapeutic Benefits Section */}
        <section className="therapeutic-section">
          <div className="container">
            <h2>Therapeutic Benefits</h2>
            <div className="therapeutic-content">
              <div className="therapeutic-card">
                <h3>Focus & Concentration</h3>
                <p>Following step-by-step instructions improves attention span and concentration skills.</p>
              </div>
              <div className="therapeutic-card">
                <h3>Patience & Perseverance</h3>
                <p>Completing the treat-making process teaches patience and builds perseverance.</p>
              </div>
              <div className="therapeutic-card">
                <h3>Sense of Accomplishment</h3>
                <p>Creating something meaningful for pets provides a strong sense of achievement.</p>
              </div>
              <div className="therapeutic-card">
                <h3>Social Skills</h3>
                <p>Working with others and caring for animals develops empathy and social skills.</p>
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
                <p>We evaluate the child's abilities and determine appropriate tools and activities.</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Setup</h3>
                <p>We provide adaptive equipment and create a safe, accessible workspace.</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Guidance</h3>
                <p>Children follow step-by-step instructions with support as needed.</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Completion</h3>
                <p>Children finish their treats and experience the joy of caring for pets.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <div className="container">
            <h2>Ready to Get Started?</h2>
            <p>Contact us to learn more about our Dog Treat Project and how it can benefit your child.</p>
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