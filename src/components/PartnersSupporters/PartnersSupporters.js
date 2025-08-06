import React from 'react';
import '../../styles/PartnersSupporters.css';

export default function PartnersSupporters() {
  const partners = [
    {
      category: "Schools & Educational Programs",
      description: "Educational institutions that partner with us to provide opportunities for students to learn about assistive technology and inclusive design.",
      partners: [
        {
          name: "Rutgers University",
          type: "University Partner",
          description: "Our primary academic partner providing resources, facilities, and student volunteers for our projects.",
          logo: "/images/4-3_Temp_Logo.png"
        },
        {
          name: "Local School Districts",
          type: "Educational Partner",
          description: "School districts that collaborate with us to identify families in need and provide access to our services.",
          logo: "/images/4-3_Temp_Logo.png"
        }
      ]
    },
    {
      category: "Hospitals & Healthcare Providers",
      description: "Medical professionals and healthcare institutions that refer families to our services and provide clinical expertise.",
      partners: [
        {
          name: "Children's Specialized Hospital",
          type: "Healthcare Partner",
          description: "Provides clinical expertise and referrals for children with mobility challenges.",
          logo: "/images/4-3_Temp_Logo.png"
        },
        {
          name: "Physical Therapists",
          type: "Clinical Partner",
          description: "Licensed therapists who provide guidance on mobility needs and device specifications.",
          logo: "/images/4-3_Temp_Logo.png"
        }
      ]
    },
    {
      category: "Community Organizations",
      description: "Local organizations that support our mission and help us reach families in need.",
      partners: [
        {
          name: "Disability Advocacy Groups",
          type: "Community Partner",
          description: "Organizations that advocate for accessibility and connect us with families.",
          logo: "/images/4-3_Temp_Logo.png"
        },
        {
          name: "Local Charities",
          type: "Support Partner",
          description: "Charitable organizations that help fund our projects and spread awareness.",
          logo: "/images/4-3_Temp_Logo.png"
        }
      ]
    }
  ];

  return (
    <div className="partners-supporters-container">
      {/* Hero Section */}
      <div className="partners-hero" style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_Rutgers_Wheelchair_Basketball.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Partners & Supporters</h1>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="partners-intro">
        <div className="container">
          <h2>Building Strong Partnerships</h2>
          <p>
            Our success depends on the collaboration and support of various organizations, 
            institutions, and individuals who believe in our mission. Together, we create 
            lasting impact in the lives of children and families.
          </p>
        </div>
      </div>

      {/* Partners Categories */}
      <div className="partners-section">
        <div className="container">
          {partners.map((category, index) => (
            <div key={index} className="partner-category">
              <div className="category-header">
                <h3>{category.category}</h3>
                <p>{category.description}</p>
              </div>
              
              <div className="partners-grid">
                {category.partners.map((partner, partnerIndex) => (
                  <div key={partnerIndex} className="partner-card">
                    <div className="partner-logo">
                      <img src={partner.logo} alt={`${partner.name} logo`} />
                    </div>
                    <div className="partner-info">
                      <h4>{partner.name}</h4>
                      <span className="partner-type">{partner.type}</span>
                      <p>{partner.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Become a Partner Section */}
      <div className="become-partner-section">
        <div className="container">
          <h2>Become a Partner</h2>
          <p>
            Interested in partnering with us? We're always looking for new collaborators 
            who share our vision of accessibility and inclusion.
          </p>
          
          <div className="partnership-options">
            <div className="partnership-option">
              <h3>For Educational Institutions</h3>
              <ul>
                <li>Host student volunteer programs</li>
                <li>Provide workshop and training spaces</li>
                <li>Collaborate on research projects</li>
                <li>Share resources and expertise</li>
              </ul>
            </div>
            
            <div className="partnership-option">
              <h3>For Healthcare Providers</h3>
              <ul>
                <li>Refer families to our services</li>
                <li>Provide clinical expertise</li>
                <li>Collaborate on device specifications</li>
                <li>Support research and development</li>
              </ul>
            </div>
            
            <div className="partnership-option">
              <h3>For Community Organizations</h3>
              <ul>
                <li>Help identify families in need</li>
                <li>Provide funding and resources</li>
                <li>Spread awareness of our mission</li>
                <li>Support fundraising efforts</li>
              </ul>
            </div>
          </div>
          
          <div className="contact-section">
            <h3>Get in Touch</h3>
            <p>
              Ready to explore partnership opportunities? Contact us to discuss how we can 
              work together to make a difference in children's lives.
            </p>
            <a href="mailto:partnerships@accessible4all.org" className="contact-button">
              Contact Us About Partnerships
            </a>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="impact-section">
        <div className="container">
          <h2>Our Impact Through Partnerships</h2>
          <div className="impact-stats">
            <div className="stat">
              <h3>50+</h3>
              <p>Partner Organizations</p>
            </div>
            <div className="stat">
              <h3>100+</h3>
              <p>Children Helped</p>
            </div>
            <div className="stat">
              <h3>1000+</h3>
              <p>Volunteer Hours</p>
            </div>
            <div className="stat">
              <h3>$50K+</h3>
              <p>In-Kind Donations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 