import React from 'react';
import '../../styles/Donate.css';

export default function Donate() {
  return (
    <div className="donate-container">
      {/* Hero Section */}
      <div
        className="donate-hero"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_Zora_and_Dad.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Make a Difference Today</h1>
          <p className="hero-subtitle">
            Your donation helps us create accessible toys and devices that transform children's lives
          </p>
        </div>
      </div>

      <div className="donate-main">
        {/* Impact Section */}
        <section className="impact-section">
          <div className="container">
            <h2>Your Impact</h2>
            <div className="impact-grid">
              <div className="impact-card">
                <div className="impact-icon">🚗</div>
                <h3>Custom Ride-On Cars</h3>
                <p>Your donation helps us purchase and modify ride-on cars for children with mobility challenges.</p>
              </div>
              <div className="impact-card">
                <div className="impact-icon">🔧</div>
                <h3>Tools & Equipment</h3>
                <p>Funds go toward essential tools, electronic components, and safety equipment for our projects.</p>
              </div>
              <div className="impact-card">
                <div className="impact-icon">🎁</div>
                <h3>Adaptive Toys</h3>
                <p>We create custom adaptive toys and devices that make play accessible to every child.</p>
              </div>
              <div className="impact-card">
                <div className="impact-icon">👥</div>
                <h3>Family Support</h3>
                <p>All our services are provided free of charge to families who need our help.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Options Section */}
        <section className="donation-options-section">
          <div className="container">
            <h2>Ways to Give</h2>
            <div className="donation-grid">
              <div className="donation-card">
                <div className="donation-header">
                  <h3>One-Time Gift</h3>
                  <div className="donation-amount">$25 - $500+</div>
                </div>
                <p>Make a one-time donation of any amount. Every dollar makes a difference in a child's life.</p>
                <ul className="donation-benefits">
                  <li>Immediate impact on our projects</li>
                  <li>Tax-deductible contribution</li>
                  <li>Recognition in our annual report</li>
                </ul>
                <a href="mailto:info@a4all.org?subject=One-Time Donation" className="donate-button primary">Donate Now</a>
              </div>
              
              <div className="donation-card featured">
                <div className="donation-badge">Most Popular</div>
                <div className="donation-header">
                  <h3>Monthly Supporter</h3>
                  <div className="donation-amount">$50/month</div>
                </div>
                <p>Join our monthly giving program and provide consistent support for our ongoing projects.</p>
                <ul className="donation-benefits">
                  <li>Sustained funding for our programs</li>
                  <li>Quarterly impact reports</li>
                  <li>Invitation to special events</li>
                  <li>Recognition as a monthly supporter</li>
                </ul>
                <a href="mailto:info@a4all.org?subject=Monthly Donation" className="donate-button primary">Become a Monthly Supporter</a>
              </div>
              
              <div className="donation-card">
                <div className="donation-header">
                  <h3>Project Sponsor</h3>
                  <div className="donation-amount">$500 - $2,000</div>
                </div>
                <p>Sponsor a specific project and see the direct impact of your contribution.</p>
                <ul className="donation-benefits">
                  <li>Named sponsorship of a project</li>
                  <li>Progress updates and photos</li>
                  <li>Recognition on our website</li>
                  <li>Invitation to project completion</li>
                </ul>
                <a href="mailto:info@a4all.org?subject=Project Sponsorship" className="donate-button secondary">Sponsor a Project</a>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stories Section */}
        <section className="stories-section">
          <div className="container">
            <h2>Stories of Impact</h2>
            <div className="stories-grid">
              <div className="story-card">
                <div className="story-image">
                  <img src="/images/4-3_Isaiah_Car_and_Family.JPG" alt="Isaiah with his custom car" />
                </div>
                <div className="story-content">
                  <h3>Isaiah's Story</h3>
                  <p>"Isaiah now drives his custom car with a huge smile! Your donations made this possible and gave him the independence he always wanted."</p>
                  <div className="story-impact">
                    <span className="impact-label">Impact:</span>
                    <span className="impact-value">Custom ride-on car with adaptive controls</span>
                  </div>
                </div>
              </div>
              
              <div className="story-card">
                <div className="story-image">
                  <img src="/images/4-3_Zora_and_Dad.JPG" alt="Zora with her dad" />
                </div>
                <div className="story-content">
                  <h3>Zora's Journey</h3>
                  <p>"Zora's custom adaptive device opened up a world of play and learning that was previously inaccessible to her."</p>
                  <div className="story-impact">
                    <span className="impact-label">Impact:</span>
                    <span className="impact-value">Adaptive learning tools and mobility support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Need Section */}
        <section className="needs-section">
          <div className="container">
            <h2>What Your Donation Provides</h2>
            <div className="needs-grid">
              <div className="need-item">
                <div className="need-icon">🚗</div>
                <h3>Ride-On Cars</h3>
                <p>$200-500 per car for modification and adaptive controls</p>
              </div>
              <div className="need-item">
                <div className="need-icon">🔧</div>
                <h3>Tools & Equipment</h3>
                <p>$50-200 for essential tools and safety equipment</p>
              </div>
              <div className="need-item">
                <div className="need-icon">⚡</div>
                <h3>Electronic Components</h3>
                <p>$25-100 for switches, motors, and control systems</p>
              </div>
              <div className="need-item">
                <div className="need-icon">🎨</div>
                <h3>Materials & Supplies</h3>
                <p>$10-50 for wood, plastic, and finishing materials</p>
              </div>
            </div>
          </div>
        </section>

        {/* Other Ways to Support Section */}
        <section className="support-section">
          <div className="container">
            <h2>Other Ways to Support</h2>
            <div className="support-grid">
              <div className="support-card">
                <div className="support-icon">🔧</div>
                <h3>Material Donations</h3>
                <p>Donate tools, equipment, or materials that can be used in our projects.</p>
                <a href="mailto:info@a4all.org?subject=Material Donation" className="support-link">Learn More</a>
              </div>
              <div className="support-card">
                <div className="support-icon">👥</div>
                <h3>Volunteer</h3>
                <p>Join our team and help build adaptive devices for children in need.</p>
                <a href="/get-involved" className="support-link">Get Involved</a>
              </div>
              <div className="support-card">
                <div className="support-icon">📢</div>
                <h3>Spread Awareness</h3>
                <p>Share our mission with your network and help us reach more families.</p>
                <a href="https://www.instagram.com/rutgersa4a/" className="support-link">Follow Us</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="container">
            <div className="contact-content">
              <div className="contact-text">
                <h2>Ready to Make a Difference?</h2>
                <p>
                  Your donation, no matter the size, helps us continue our mission of making 
                  play accessible to every child. Contact us to discuss how you can support 
                  our work and make a lasting impact.
                </p>
                <div className="contact-methods">
                  <div className="contact-method">
                    <span className="method-icon">📧</span>
                    <span>Email: info@a4all.org</span>
                  </div>
                  <div className="contact-method">
                    <span className="method-icon">📱</span>
                    <span>Instagram: @rutgersa4a</span>
                  </div>
                </div>
              </div>
              <div className="contact-actions">
                <a href="mailto:info@a4all.org?subject=Donation Inquiry" className="contact-button primary">Contact Us</a>
                <a href="/get-involved" className="contact-button secondary">Learn More</a>
              </div>
            </div>
          </div>
        </section>

        {/* Thank You Section */}
        <section className="thank-you-section">
          <div className="container">
            <h2>Thank You</h2>
            <p>
              We're grateful for every supporter who helps us make a difference. Your generosity 
              enables us to continue serving families and creating opportunities for children 
              with disabilities to play, learn, and grow. Together, we're building a more 
              accessible world for all children.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 