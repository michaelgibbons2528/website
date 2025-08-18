import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/PartnersSupporters.css';

export default function PartnersSupporters() {
  const partners = [
    {
      name: "Rutgers University Foundation",
      type: "Foundation Partner",
      description: "Provides funding and institutional support for our programs and research initiatives.",
      logo: "/images/4-3_Temp_Logo.png",
      website: "https://www.rutgers.edu/",
      impact: "Major funding source for student projects and equipment"
    },
    {
      name: "New Jersey Institute of Technology (NJIT)",
      type: "Academic Partner",
      description: "Collaborates on engineering projects and provides access to advanced manufacturing facilities.",
      logo: "/images/4-3_Temp_Logo.png",
      website: "https://www.njit.edu/",
      impact: "Technical expertise and facility access"
    },
    {
      name: "Make-A-Wish Foundation",
      type: "Community Partner",
      description: "Partners with us to create custom adaptive devices for children with critical illnesses.",
      logo: "/images/4-3_Temp_Logo.png",
      website: "https://wish.org/",
      impact: "Family referrals and project funding"
    },
    {
      name: "United Way of Central Jersey",
      type: "Community Partner",
      description: "Supports our mission through funding and community outreach programs.",
      logo: "/images/4-3_Temp_Logo.png",
      website: "https://www.uwcnj.org/",
      impact: "Community funding and awareness"
    }
  ];

  const supporters = [
    {
      name: "Local Rotary Clubs",
      type: "Service Organization",
      description: "Multiple Rotary clubs provide funding, volunteers, and community connections.",
      logo: "/images/4-3_Temp_Logo.png",
      impact: "Volunteer support and community funding"
    },
    {
      name: "Engineering Professional Societies",
      type: "Professional Organization",
      description: "IEEE, ASME, and other engineering societies provide technical expertise and networking.",
      logo: "/images/4-3_Temp_Logo.png",
      impact: "Technical guidance and professional development"
    },
    {
      name: "Local Businesses",
      type: "Corporate Partner",
      description: "Area businesses provide materials, funding, and volunteer support for our projects.",
      logo: "/images/4-3_Temp_Logo.png",
      impact: "Material donations and corporate support"
    }
  ];

  const partnershipTypes = [
    {
      title: "Funding Partners",
      description: "Organizations that provide financial support for our programs and projects.",
      benefits: ["Tax-deductible donations", "Impact reporting", "Recognition opportunities", "Project sponsorship"]
    },
    {
      title: "Technical Partners",
      description: "Companies and organizations that provide technical expertise and resources.",
      benefits: ["Equipment donations", "Expert consultation", "Facility access", "Training support"]
    },
    {
      title: "Community Partners",
      description: "Local organizations that help us reach families and provide community support.",
      benefits: ["Family referrals", "Volunteer recruitment", "Event hosting", "Awareness campaigns"]
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
        <div className="hero-content">
          <h1>Partners & Supporters</h1>
          <p>Building strong partnerships to create lasting impact</p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="partners-intro">
        <div className="container">
          <h2>Our Network of Support</h2>
          <p>
            Our success depends on the collaboration and support of various organizations, 
            institutions, and individuals who believe in our mission. Together, we create 
            lasting impact in the lives of children and families through innovative partnerships.
          </p>
          <div className="partnership-links">
            <NavLink to="/schools-educational-programs" className="partnership-link">
              Schools & Educational Programs
            </NavLink>
            <NavLink to="/hospitals-healthcare-providers" className="partnership-link">
              Hospitals & Healthcare Providers
            </NavLink>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="partners-section">
        <div className="container">
          <h2>Our Partners</h2>
          <p className="section-subtitle">
            Organizations that provide significant support through funding, resources, and collaboration.
          </p>
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div key={index} className="partner-card">
                <div className="partner-logo">
                  <img src={partner.logo} alt={`${partner.name} logo`} />
                </div>
                <div className="partner-info">
                  <h3>
                    {partner.website ? (
                      <a 
                        href={partner.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: 'inherit', textDecoration: 'none' }}
                      >
                        {partner.name}
                      </a>
                    ) : (
                      partner.name
                    )}
                  </h3>
                  <span className="partner-type">{partner.type}</span>
                  <p>{partner.description}</p>
                  <div className="partner-impact">
                    <strong>Impact:</strong> {partner.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Supporters Section */}
      <div className="supporters-section">
        <div className="container">
          <h2>Our Supporters</h2>
          <p className="section-subtitle">
            Organizations and individuals who provide ongoing support and resources.
          </p>
          <div className="supporters-grid">
            {supporters.map((supporter, index) => (
              <div key={index} className="supporter-card">
                <div className="supporter-logo">
                  <img src={supporter.logo} alt={`${supporter.name} logo`} />
                </div>
                <div className="supporter-info">
                  <h3>{supporter.name}</h3>
                  <span className="supporter-type">{supporter.type}</span>
                  <p>{supporter.description}</p>
                  <div className="supporter-impact">
                    <strong>Impact:</strong> {supporter.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partnership Types Section */}
      <div className="partnership-types-section">
        <div className="container">
          <h2>Types of Partnerships</h2>
          <div className="partnership-types-grid">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="partnership-type-card">
                <h3>{type.title}</h3>
                <p>{type.description}</p>
                <div className="benefits-list">
                  <h4>Benefits:</h4>
                  <ul>
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Become a Partner Section */}
      <div className="become-partner-section">
        <div className="container">
          <h2>Become a Partner</h2>
          <p>
            Interested in partnering with us? We're always looking for new collaborators 
            who share our vision of accessibility and inclusion. Whether you're a corporation, 
            foundation, or community organization, there are many ways to get involved.
          </p>
          
          <div className="partnership-options">
            <div className="partnership-option">
              <h3>For Corporations</h3>
              <ul>
                <li>Provide funding and resources</li>
                <li>Offer employee volunteer programs</li>
                <li>Donate equipment and materials</li>
                <li>Support research and development</li>
              </ul>
            </div>
            
            <div className="partnership-option">
              <h3>For Foundations</h3>
              <ul>
                <li>Grant funding for programs</li>
                <li>Support capacity building</li>
                <li>Fund research initiatives</li>
                <li>Provide technical assistance</li>
              </ul>
            </div>
            
            <div className="partnership-option">
              <h3>For Community Organizations</h3>
              <ul>
                <li>Help identify families in need</li>
                <li>Provide volunteer support</li>
                <li>Host awareness events</li>
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
            <a href="mailto:partnerships@a4all.org" className="contact-button">
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
              <h3>25+</h3>
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