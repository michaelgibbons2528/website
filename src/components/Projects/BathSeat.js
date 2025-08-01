import React from 'react';
import '../../styles/BathSeat.css';

export default function BathSeat() {
  const features = [
    {
      icon: "🛁",
      title: "Safe Bathing Experience",
      description: "Custom-designed bath seats that provide secure and comfortable bathing for children with mobility challenges."
    },
    {
      icon: "🔧",
      title: "Adaptive Design",
      description: "Adjustable components that can be modified to fit each child's specific needs and abilities."
    },
    {
      icon: "🛡️",
      title: "Safety First",
      description: "Built-in safety features including non-slip surfaces, secure straps, and stable construction."
    },
    {
      icon: "💪",
      title: "Independence Building",
      description: "Promotes independence and confidence in daily hygiene routines."
    }
  ];

  const benefits = [
    {
      title: "Improved Safety",
      description: "Reduces the risk of slips and falls during bath time."
    },
    {
      title: "Enhanced Comfort",
      description: "Provides proper support and positioning for optimal comfort."
    },
    {
      title: "Increased Independence",
      description: "Allows children to participate more actively in their bathing routine."
    },
    {
      title: "Family Support",
      description: "Makes bath time easier and safer for caregivers and families."
    }
  ];

  const components = [
    "Custom-molded seat cushion",
    "Adjustable backrest",
    "Safety straps and harnesses",
    "Non-slip base",
    "Easy-grip handles",
    "Water-resistant materials"
  ];

  return (
    <div className="bath-seat-container">
      {/* Hero Section */}
      <div 
        className="bath-seat-hero"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/1-1_Bath_Seat.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Bath Seat Project</h1>
          <p className="hero-subtitle">
            Custom-designed bath seats that provide safe, comfortable, and accessible bathing experiences 
            for children with mobility challenges, promoting independence and confidence.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bath-seat-main">
        {/* Introduction Section */}
        <section className="intro-section">
          <div className="container">
            <h2>Safe and Accessible Bathing</h2>
            <p>
              Our Bath Seat Project focuses on creating custom bath seats that make bathing safe, 
              comfortable, and accessible for children with various mobility challenges. Each seat is 
              designed with the specific needs of the child in mind, ensuring they can enjoy bath time 
              with confidence and independence.
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
            <h2>Key Benefits</h2>
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

        {/* Equipment Section */}
        <section className="equipment-section">
          <div className="container">
            <div className="equipment-content">
              <div className="equipment-text">
                <h2>Custom Components</h2>
                <p>
                  Each bath seat is built with carefully selected components that ensure safety, 
                  comfort, and durability. Our engineering students work closely with families to 
                  understand specific needs and create solutions that work for each child.
                </p>
                <div className="tools-list">
                  <h3>Essential Components:</h3>
                  <ul>
                    {components.map((component, index) => (
                      <li key={index}>{component}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="equipment-image">
                <img src="/images/1-1_Bath_Seat.JPG" alt="Custom bath seat for child with disabilities" />
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
                <h3>Physical Development</h3>
                <p>Proper positioning supports muscle development and postural control during bath time.</p>
              </div>
              <div className="therapeutic-card">
                <h3>Sensory Integration</h3>
                <p>Safe bathing environment helps children develop sensory processing skills.</p>
              </div>
              <div className="therapeutic-card">
                <h3>Routine Building</h3>
                <p>Consistent, accessible bath time helps establish healthy daily routines.</p>
              </div>
              <div className="therapeutic-card">
                <h3>Family Bonding</h3>
                <p>Makes bath time a positive experience for both child and caregiver.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section">
          <div className="container">
            <h2>Our Process</h2>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Assessment</h3>
                  <p>We evaluate the child's specific needs, abilities, and family requirements.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Design</h3>
                  <p>Our engineering students create custom designs based on the assessment.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Prototype</h3>
                  <p>We build and test prototypes to ensure safety and functionality.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Delivery</h3>
                  <p>Final bath seat is delivered with training for proper use and maintenance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <div className="container">
            <h2>Get Started Today</h2>
            <p>
              Ready to provide your child with a safe and accessible bathing experience? 
              Contact us to learn more about our Bath Seat Project and how we can help.
            </p>
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