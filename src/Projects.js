import React from 'react';
import { Link } from 'react-router-dom';
import './css/Projects.css';

export default function Projects() {
  const projects = [
    {
      id: 'cars',
      title: 'Ride-On Cars',
      subtitle: 'Our Signature Project',
      description: 'We modify battery-powered ride-on cars to make them accessible for children with mobility challenges. Each car is customized with special controls, seating, and safety features.',
      image: '/images/4-3_Isaiah_Car_and_Family.JPG',
      link: '/cars',
      color: '#5a3696',
      features: ['Custom Controls', 'Adaptive Seating', 'Safety Features', 'Independent Driving']
    },
    {
      id: 'montessori',
      title: 'Giant Montessori Board',
      subtitle: 'Learning Through Play',
      description: 'Large-scale Montessori-style learning boards that develop fine motor skills, problem-solving, and cognitive development through hands-on learning experiences.',
      image: '/images/1-1_Project_Braylon.jpg',
      link: '/montessori-board',
      color: '#1565c0',
      features: ['Fine Motor Skills', 'Problem Solving', 'Cognitive Development', 'Hands-on Learning']
    },
    {
      id: 'dog-treat',
      title: 'Dog Treat Project',
      subtitle: 'Building Confidence',
      description: 'Accessible tools for making dog treats help children develop motor skills and coordination while building confidence through meaningful activities.',
      image: '/images/1-1_Project_Robert.jpg',
      link: '/dog-treat',
      color: '#f44336',
      features: ['Motor Skills', 'Coordination', 'Confidence Building', 'Meaningful Activities']
    },
    {
      id: 'goodie-bag',
      title: 'Goodie Bag Project',
      subtitle: 'Sharing Joy',
      description: 'We design accessible packaging and assembly tools for creating goodie bags, helping children develop organizational skills and fine motor control.',
      image: '/images/1-1_Donations.jpg',
      link: '/goodie-bag',
      color: '#ff9800',
      features: ['Organizational Skills', 'Fine Motor Control', 'Sharing', 'Creativity']
    }
  ];

  return (
    <div className="projects-container">
      {/* Hero Section */}
      <div className="projects-hero">
        <div className="hero-content">
          <h1 className="hero-title">Our Projects</h1>
          <p className="hero-subtitle">
            We create accessible and adaptive equipment for children with disabilities. 
            Each project is customized to meet the specific needs of the child, 
            ensuring every child can participate, learn, and grow.
          </p>
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
              <Link to={project.link} className="project-link" style={{ backgroundColor: project.color }}>
                Learn More
              </Link>
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
            <Link to="/get-involved" className="cta-button primary">Get Involved</Link>
            <Link to="/donate" className="cta-button secondary">Support Our Work</Link>
          </div>
        </div>
      </div>
    </div>
  );
} 