import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/Projects.css';

export default function Projects() {
  const projects = [
    {
      id: 'cars',
      title: 'Ride-On Cars',
      subtitle: 'The Best Way to Explore',
      description: 'We modify battery-powered ride-on cars to make them accessible for children with mobility challenges. Each car is customized with special controls, seating, and safety features.',
      image: '/images/4-3_Ciaran_Car_Runway.JPG',
      link: '/cars',
      color: '#5a3696'
    },
    {
      id: 'montessori',
      title: 'Giant Montessori Board',
      subtitle: 'A Wall Full of Fun',
      description: 'We are building a giant Montessori Board for our friends at Lake Hiawatha School in the Parspianny-Troy Hills School district.', 
      image: '/images/4-3_Project_in_Progress.jpg',
      link: '/montessori-board',
      color: '#1565c0'
    },
    {
      id: 'bath-seat',
      title: 'Bath Seat Project',
      subtitle: 'A Safe and Comfortable Bath',
      description: 'We have prototyped a supportive and comfortable bath seat designed to help children with physical disabilities enjoy bath time safely and independently.',
      image: '/images/1-1_Bath_Seat.JPG',
      link: '/bath-seat',
      color: '#2196f3'
    },
    {
      id: 'dog-treat',
      title: 'Dog Treat Project',
      subtitle: 'For Service Dogs and their Owners',
      description: 'We are designing a convenient dog treat dispenser that allows handicapped individuals to reward their service dogs in training with just the click of a button.',
      image: '/images/1-1_Dog_Treat_Attaching.jpg',
      link: '/dog-treat',
      color: '#f44336'
    },
    {
      id: 'goodie-bag',
      title: 'Goodie Bag Project',
      subtitle: 'Packed with Joy',
      description: 'Every holiday, we\'ve started a tradition to create and donate goodie bags to local children\'s hospitals, helping us unwind after midterms while bringing joy to the children.',
      image: '/images/1-1_Donations.jpg',
      link: '/goodie-bag',
      color: '#ff9800'
    },
    {
      id: 'future-projects',
      title: 'Future Projects',
      subtitle: 'Coming Soon...',
      description: 'We are always looking for new ideas to make accessible technology MORE ACCESSIBLE! Do you have an idea for a new project? Let us know by clicking below!',
      image: '/images/1-1_Electronics.jpg',
      link: '/projects',
      color: '#9c27b0'
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
              <div className="project-badge" style={{ backgroundColor: project.color }}>
                {project.subtitle}
              </div>
            </div>
            <div className="project-content">
              <h2 className="project-title" style={{ color: project.color }}>
                {project.title}
              </h2>
              <p className="project-description">
                {project.description}
              </p>
              <NavLink to={project.link} className="project-link" style={{ backgroundColor: project.color }}>
                Learn More
              </NavLink>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
} 