import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/Projects.css';

export default function Projects() {
  const projects = [
    {
      id: 'cars',
      title: 'Ride-On Cars',
      subtitle: 'Our Signature Project',
      description: 'We modify battery-powered ride-on cars to make them accessible for children with mobility challenges. Each car is customized with special controls, seating, and safety features.',
      image: '/images/4-3_Ciaran_Car_Runway.JPG',
      link: '/cars',
      color: '#5a3696',
      features: ['Custom Controls', 'Adaptive Seating', 'Safety Features', 'Independent Driving']
    },
    {
      id: 'montessori',
      title: 'Giant Montessori Board',
      subtitle: 'Learning Through Play',
      description: 'We are building a giant Montessori Board for our friends at Lake Hiawatha School in the Parspianny-Troy Hills School district.', 
      image: '/images/4-3_Project_in_Progress.jpg',
      link: '/montessori-board',
      color: '#1565c0',
      features: ['Fine Motor Skills', 'Problem Solving', 'Cognitive Development', 'Hands-on Learning']
    },
    {
      id: 'bath-seat',
      title: 'Bath Seat Project',
      subtitle: 'Safe Bathing Experience',
      description: 'We have prototyped a supportive and comfortable bath seat designed to help children with physical disabilities enjoy bath time safely and independently.',
      image: '/images/1-1_Bath_Seat.JPG',
      link: '/bath-seat',
      color: '#2196f3',
      features: ['Safety Features', 'Adaptive Design', 'Comfort', 'Independence']
    },
    {
      id: 'dog-treat',
      title: 'Dog Treat Project',
      subtitle: 'Building Confidence',
      description: 'We are designing a convenient dog treat dispenser that allows handicapped individuals to reward their service dogs in training with just the click of a button.',
      image: '/images/1-1_Project_Robert.jpg',
      link: '/dog-treat',
      color: '#f44336',
      features: ['Motor Skills', 'Coordination', 'Confidence Building', 'Meaningful Activities']
    },
    {
      id: 'goodie-bag',
      title: 'Goodie Bag Project',
      subtitle: 'Sharing Joy',
      description: 'Every holiday, we\'ve started a tradition to create and donate goodie bags to local children\'s hospitals, helping us unwind after midterms while bringing joy to those who need it most.',
      image: '/images/1-1_Donations.jpg',
      link: '/goodie-bag',
      color: '#ff9800',
      features: ['Organizational Skills', 'Fine Motor Control', 'Sharing', 'Creativity']
    },
    {
      id: 'future-project',
      title: 'Future Project',
      subtitle: 'Coming Soon',
      description: 'We are constantly developing new accessible solutions for children with disabilities. Stay tuned for our next innovative project.',
      image: '/images/1-1_Electronics.jpg',
      link: '/projects',
      color: '#9c27b0',
      features: ['Innovation', 'Accessibility', 'Custom Design', 'Child-Focused']
    }
  ];

  return (
    <div className="projects-container">
      {/* Hero Section */}
      <div 
        className="projects-hero"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_Fiona_Car_Explain.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Our Projects</h1>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay" style={{ backgroundColor: project.color + '20' }}>
                <div className="project-badge" style={{ backgroundColor: project.color }}>
                  {project.subtitle}
                </div>
              </div>
            </div>
            <div className="project-content">
              <h2 className="project-title" style={{ color: project.color }}>
                {project.title}
              </h2>
              <p className="project-description">
                {project.description}
              </p>
              <div className="project-features">
                {project.features.map((feature, index) => (
                  <span key={index} className="project-feature" style={{ backgroundColor: project.color + '15' }}>
                    {feature}
                  </span>
                ))}
              </div>
              <NavLink to={project.link} className="project-link" style={{ backgroundColor: project.color }}>
                Learn More
              </NavLink>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Adaptations Section */}
      <div className="custom-adaptations">
        <div className="adaptations-content">
          <h2 className="adaptations-title">Custom Adaptations</h2>
          <p className="adaptations-description">
            Beyond our standard projects, we create custom adaptations for toys, games, 
            and everyday items to make them accessible for children with specific needs. 
            Every child is unique, and our solutions reflect that individuality.
          </p>
          <div className="adaptations-features">
            <div className="adaptation-feature">
              <div className="feature-icon">🎯</div>
              <h3>Personalized Solutions</h3>
              <p>Each adaptation is designed specifically for the child's unique needs and abilities.</p>
            </div>
            <div className="adaptation-feature">
              <div className="feature-icon">🔧</div>
              <h3>Engineering Excellence</h3>
              <p>Our team uses innovative engineering approaches to solve complex accessibility challenges.</p>
            </div>
            <div className="adaptation-feature">
              <div className="feature-icon">❤️</div>
              <h3>Family-Centered</h3>
              <p>We work closely with families to ensure our solutions meet their specific requirements.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="projects-cta">
        <div className="cta-content">
          <h2>Ready to Get Involved?</h2>
          <p>Join us in making a difference in children's lives through accessible technology and innovative solutions.</p>
          <div className="cta-buttons">
            <NavLink to="/get-involved" className="cta-button primary">Get Involved</NavLink>
            <NavLink to="/donate" className="cta-button secondary">Support Our Work</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
} 