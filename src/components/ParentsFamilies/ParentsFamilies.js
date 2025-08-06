import React from 'react';
import '../../styles/ParentsFamilies.css';

const ParentsFamilies = () => {
  return (
    <div className="parents-families-page">
      {/* Hero Section */}
      <div 
        className="hero-section"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_Ciaran_Family.JPG')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="hero-content">
          <h1>Parents & Families</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Welcome Section */}
        <section className="welcome-section">
          <div className="container">
            <h2>Welcome to Accessible 4 All</h2>
            <p>
              We understand that every child is unique, and every family's journey is different. 
              Our mission is to provide personalized, accessible toys and mobility devices that 
              help your child participate in play and daily activities with confidence and joy.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <div className="container">
            <h2>How We Can Help</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🚗</div>
                <h3>Ride-On Cars</h3>
                <p>
                  Customized ride-on vehicles adapted to your child's specific needs. 
                  These cars provide mobility, independence, and fun for children with 
                  physical disabilities.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">🧩</div>
                <h3>Educational Toys</h3>
                <p>
                  Modified toys and learning devices that support your child's 
                  developmental goals while making learning engaging and accessible.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">🏠</div>
                <h3>Home Adaptations</h3>
                <p>
                  Guidance and resources for making your home more accessible 
                  and supportive of your child's needs and independence.
                </p>
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
                <h3>Family Meeting</h3>
                <p>We schedule a comfortable meeting with your family to discuss your child's unique needs, abilities, interests, and goals. This helps us understand how we can best support your child's development and independence.</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Assessment & Planning</h3>
                <p>Our team conducts a thorough assessment of your child's mobility, communication, and play preferences. We then create a detailed plan for a custom device that will enhance their daily activities and independence.</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Design & Development</h3>
                <p>Our engineering students work closely with your family to design and build a personalized solution. We incorporate your child's favorite colors, interests, and specific needs into every aspect of the device.</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Testing & Refinement</h3>
                <p>We test the device with your child to ensure it's safe, comfortable, and meets all their needs. We make any necessary adjustments based on your feedback and your child's response.</p>
              </div>
              <div className="step">
                <div className="step-number">5</div>
                <h3>Delivery & Training</h3>
                <p>We deliver the finished device to your family and provide training on how to use and maintain it. We also offer ongoing support and modifications as your child grows and their needs change.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="resources-section">
          <div className="container">
            <h2>Resources for Families</h2>
            <div className="resources-grid">
              <div className="resource-card">
                <h3>Find Us</h3>
                <p>Locate our facilities and learn about our accessibility features.</p>
                <a href="/find-us" className="resource-link">Learn More →</a>
              </div>
              <div className="resource-card">
                <h3>Toys & Devices</h3>
                <p>Explore our catalog of accessible toys and mobility devices.</p>
                <a href="/toys-devices" className="resource-link">Browse Catalog →</a>
              </div>
              <div className="resource-card">
                <h3>Support Groups</h3>
                <p>Connect with other families facing similar challenges and experiences.</p>
                <a href="/support-groups" className="resource-link">Join Community →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="container">
            <h2>Family Stories</h2>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>
                    "The ride-on car has given our daughter so much independence. 
                    She can now play with her siblings in a way that wasn't possible before."
                  </p>
                  <div className="testimonial-author">
                    <strong>- Sarah & Mike, Parents of Emma</strong>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>
                    "The A4A team really listened to our concerns and created 
                    something perfect for our son's needs. The difference it's made is incredible."
                  </p>
                  <div className="testimonial-author">
                    <strong>- David & Lisa, Parents of Jake</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="container">
            <h2>Get Started Today</h2>
            <p>
              Ready to explore how we can help your family? Contact us to schedule 
              a consultation or learn more about our services.
            </p>
            <div className="contact-buttons">
              <a href="/contact" className="btn-primary">Contact Us</a>
              <a href="/donate" className="btn-secondary">Support Our Mission</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ParentsFamilies; 