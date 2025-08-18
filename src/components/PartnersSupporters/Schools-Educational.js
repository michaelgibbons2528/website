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
          description: "Our flagship partnership providing engineering students with real-world assistive technology projects and research opportunities. Students work on semester-long projects designing and building custom adaptive devices for children with disabilities.",
          website: "https://sites.rutgers.edu/a4a/",
          logo: "/images/Rutgers_A4A.png",
          features: ["Student volunteer programs", "Research collaborations", "Workshop facilities", "Faculty expertise", "Capstone projects", "Hands-on engineering experience"]
        }
      ]
    },
    {
      category: "K-12 School Partnerships",
      description: "Working with local schools to provide educational resources, family connections, and support for inclusive education initiatives.",
      programs: [
        {
          name: "River Dell High School",
          type: "High School Partner",
          description: "Collaborating with River Dell High School, we worked with the Best Buddies Program to create a sensory DJ Board for students with disabilities.",
          website: "https://rdhs.riverdell.org/o/rdhs",
          logo: "/images/1-1_River_Dell.png",
          features: ["STEM workshops", "Family referrals", "Student presentations", "Educational resources", "Inclusive design education", "Community outreach"]
        },
        {
          name: "Lake Hiawatha School",
          type: "Elementary School Partner",
          description: "We are collaborating with Lake Hiawatha Elementary School and Mrs. Corrente's class to create a giant Montessori Board for their special education classroom.",
          logo: "/images/1-1_Lake_Hiawatha.png",
          website: "https://lhs.pthsd.k12.nj.us/",
          features: ["Family support services", "Teacher collaboration", "Resource sharing", "Student assessments", "Inclusive education support", "Parent workshops"]
        },
        {
          name: "Bright Beginnings Learning Center (BBLC)",
          type: "Early Childhood Partner",
          description: "Working with BBLC to provide early intervention support and adaptive technology solutions for young children with disabilities. Our partnership focuses on creating inclusive learning environments from the earliest stages of development.",
          logo: "/images/1-1_BBLC.png",
          features: ["Early intervention support", "Adaptive technology solutions", "Staff training", "Family consultations", "Inclusive learning environments", "Development assessments"]
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
        <div className="hero-content">
          <h1>Schools & Educational Programs</h1>
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
                       <h4>
                         {program.website ? (
                           <a 
                             href={program.website} 
                             target="_blank" 
                             rel="noopener noreferrer"
                             style={{ color: 'inherit', textDecoration: 'none' }}
                           >
                             {program.name}
                           </a>
                         ) : (
                           program.name
                         )}
                       </h4>
                                             <span className="program-type">{program.type}</span>
                       <p>{program.description}</p>
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
           <h2>Interested in Working With Us?</h2>
           <p>
             We're always looking to expand our network of educational partners. 
             Whether you're a university, school district, or educational organization, 
             we'd love to discuss how we can work together to make technology accessible for all children.
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
               <h3>For Educational Organizations</h3>
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
             <h3>Contact Us to Get Started</h3>
             <p>
               Ready to bring our educational programs to your institution? 
               Contact us to discuss partnership opportunities and how we can customize 
               our programs to meet your institution's specific needs and goals.
             </p>
             <a href="mailto:info@a4all.org?subject=Educational Partnership Inquiry" className="contact-button">
               Contact Us About Partnership Opportunities
             </a>
             <p className="contact-note">
               We'll respond within 2-3 business days to discuss how we can work together.
             </p>
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