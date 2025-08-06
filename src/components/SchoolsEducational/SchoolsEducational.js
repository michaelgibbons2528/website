import React from 'react';
import '../../styles/SchoolsEducational.css';

export default function SchoolsEducational() {
  const programs = [
    {
      category: "University Partnerships",
      description: "Collaborative programs with universities to provide hands-on learning experiences for students in engineering, design, and healthcare fields.",
      programs: [
        {
          name: "Rutgers University",
          type: "Primary Academic Partner",
          description: "Our flagship partnership providing engineering students with real-world assistive technology projects and research opportunities.",
          logo: "/images/4-3_Temp_Logo.png",
          features: ["Student volunteer programs", "Research collaborations", "Workshop facilities", "Faculty expertise"]
        },
        {
          name: "Engineering Capstone Projects",
          type: "Academic Program",
          description: "Senior engineering students work on semester-long projects to design and build custom assistive devices.",
          logo: "/images/4-3_Temp_Logo.png",
          features: ["Custom device design", "Prototype development", "User testing", "Documentation"]
        }
      ]
    },
    {
      category: "K-12 Educational Programs",
      description: "Programs designed to introduce students to assistive technology, engineering, and inclusive design principles.",
      programs: [
        {
          name: "STEM Outreach Programs",
          type: "Educational Initiative",
          description: "Interactive workshops and presentations for K-12 students to learn about assistive technology and engineering.",
          logo: "/images/4-3_Temp_Logo.png",
          features: ["Hands-on workshops", "Career exploration", "Inclusive design principles", "Technology demonstrations"]
        },
        {
          name: "School District Collaborations",
          type: "Partnership Program",
          description: "Working with local school districts to identify families in need and provide educational resources.",
          logo: "/images/4-3_Temp_Logo.png",
          features: ["Family referrals", "Resource sharing", "Educational materials", "Support services"]
        }
      ]
    },
    {
      category: "Professional Development",
      description: "Training and development opportunities for educators, therapists, and healthcare professionals.",
      programs: [
        {
          name: "Educator Workshops",
          type: "Professional Training",
          description: "Training sessions for teachers and school staff on inclusive design and assistive technology integration.",
          logo: "/images/4-3_Temp_Logo.png",
          features: ["Inclusive design principles", "Technology integration", "Best practices", "Resource sharing"]
        },
        {
          name: "Healthcare Professional Training",
          type: "Clinical Education",
          description: "Specialized training for therapists and healthcare providers on assistive device specifications and applications.",
          logo: "/images/4-3_Temp_Logo.png",
          features: ["Device specifications", "Clinical applications", "Assessment protocols", "Follow-up care"]
        }
      ]
    }
  ];

  const benefits = [
    {
      title: "For Students",
      items: [
        "Real-world project experience",
        "Hands-on engineering skills",
        "Understanding of accessibility needs",
        "Portfolio development",
        "Networking opportunities"
      ]
    },
    {
      title: "For Educational Institutions",
      items: [
        "Enhanced curriculum offerings",
        "Community engagement",
        "Research opportunities",
        "Student recruitment",
        "Industry partnerships"
      ]
    },
    {
      title: "For Families",
      items: [
        "Access to custom devices",
        "Educational resources",
        "Support network",
        "Cost-effective solutions",
        "Ongoing assistance"
      ]
    }
  ];

  return (
    <div className="schools-educational-container">
      {/* Hero Section */}
      <div className="schools-hero" style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_Dean_Cadena_and_Membs.JPG')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Schools & Educational Programs</h1>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="schools-intro">
        <div className="container">
          <h2>Educational Excellence Through Innovation</h2>
          <p>
            We partner with educational institutions to create meaningful learning experiences 
            that combine engineering, design, and compassion. Our programs provide students with 
            real-world projects that make a tangible difference in children's lives.
          </p>
        </div>
      </div>

      {/* Programs Categories */}
      <div className="programs-section">
        <div className="container">
          {programs.map((category, index) => (
            <div key={index} className="program-category">
              <div className="category-header">
                <h3>{category.category}</h3>
                <p>{category.description}</p>
              </div>
              
              <div className="programs-grid">
                {category.programs.map((program, programIndex) => (
                  <div key={programIndex} className="program-card">
                    <div className="program-logo">
                      <img src={program.logo} alt={`${program.name} logo`} />
                    </div>
                    <div className="program-info">
                      <h4>{program.name}</h4>
                      <span className="program-type">{program.type}</span>
                      <p>{program.description}</p>
                      <div className="program-features">
                        <h5>Key Features:</h5>
                        <ul>
                          {program.features.map((feature, featureIndex) => (
                            <li key={featureIndex}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="benefits-section">
        <div className="container">
          <h2>Benefits of Our Educational Programs</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <h3>{benefit.title}</h3>
                <ul>
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Get Involved Section */}
      <div className="get-involved-section">
        <div className="container">
          <h2>Get Your Institution Involved</h2>
          <p>
            Ready to bring our educational programs to your school or university? 
            We offer flexible partnership options tailored to your institution's needs.
          </p>
          
          <div className="partnership-options">
            <div className="partnership-option">
              <h3>For Universities</h3>
              <ul>
                <li>Host student volunteer programs</li>
                <li>Integrate projects into curriculum</li>
                <li>Collaborate on research initiatives</li>
                <li>Provide workshop and lab spaces</li>
                <li>Support faculty development</li>
              </ul>
            </div>
            
            <div className="partnership-option">
              <h3>For K-12 Schools</h3>
              <ul>
                <li>Host STEM workshops and presentations</li>
                <li>Provide educational resources</li>
                <li>Connect families with our services</li>
                <li>Support inclusive education initiatives</li>
                <li>Offer professional development for staff</li>
              </ul>
            </div>
            
            <div className="partnership-option">
              <h3>For Professional Organizations</h3>
              <ul>
                <li>Provide continuing education credits</li>
                <li>Host training workshops</li>
                <li>Share best practices and resources</li>
                <li>Support certification programs</li>
                <li>Facilitate networking opportunities</li>
              </ul>
            </div>
          </div>
          
          <div className="contact-section">
            <h3>Start the Conversation</h3>
            <p>
              Interested in bringing our educational programs to your institution? 
              Contact us to discuss partnership opportunities and program customization.
            </p>
            <a href="mailto:education@accessible4all.org" className="contact-button">
              Contact Us About Educational Programs
            </a>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="impact-section">
        <div className="container">
          <h2>Educational Impact</h2>
          <div className="impact-stats">
            <div className="stat">
              <h3>500+</h3>
              <p>Students Engaged</p>
            </div>
            <div className="stat">
              <h3>25+</h3>
              <p>Educational Partners</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>1000+</h3>
              <p>Learning Hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 