import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/Cars.css';

export default function Cars() {
  const location = useLocation();

  // Handle navigation from slideshow
  useEffect(() => {
    if (location.state?.scrollToChild) {
      const childName = location.state.scrollToChild;
      const element = document.getElementById(`car-${childName.toLowerCase()}`);
      if (element) {
        // Calculate position with offset to show more of the card
        const elementTop = element.offsetTop;
        const offset = 100; // Offset in pixels to show more of the card
        window.scrollTo({
          top: elementTop - offset,
          behavior: 'smooth'
        });
        // Add a highlight effect
        element.style.boxShadow = '0 0 20px #dd2701';
        setTimeout(() => {
          element.style.boxShadow = '';
        }, 3000);
      }
    }
  }, [location.state]);

  const carProjects = [
    {
      name: "Braylon",
      age: "3 years old",
      condition: "Project Leads: Bensu and Maya",
      carColor: "#007bff", // Blue car
      description: "A custom ride-on car designed for Braylon with comprehensive structural support and safety features, featuring a train-themed design with birthday celebration elements.",
      modifications: [
        {
          title: "Structural Supports",
          details: [
            "PVC structure (back, head, and sides)",
            "Kickboard",
            "Foam padding"
          ]
        },
        {
          title: "Seat Modifications",
          details: [
            "5-point harness",
            "Extended seat",
            "Banana pillow & PVC padding"
          ]
        },
        {
          title: "Design",
          details: [
            "Customized license plate",
            "Sound button & train plushie",
            "Red PVC & Blue accents with vinyl",
            "Railroad crossing sign + lights",
            "Happy (belated) Birthday Balloons!!"
          ]
        }
      ],
      image: "/images/3-4_Braylon_and_Everyone.JPG"
    },
    {
      name: "Ciaran",
      age: "5 years old",
      condition: "Project Leads: Aito and Kavya",
      carColor: "#fd7e14", // Orange car
      description: "A custom ride-on car designed to provide independence and mobility for Ciaran, featuring specialized structural support and safety modifications.",
      modifications: [
        {
          title: "Structural & Mechanical Support",
          details: [
            "PVC structure with padding",
            "Alternative, jerk minimizing control"
          ]
        },
        {
          title: "Seat Modification",
          details: [
            "Padded 5 point harness",
            "Banana neck and head support",
            "Moving PVC door"
          ]
        },
        {
          title: "Design",
          details: [
            "Customized license plates",
            "Fire flag, Dino plushie, accented wheels",
            "Pom Pom exhaust pipes"
          ]
        }
      ],
      image: "/images/3-4_Ciaran_in_Car.JPG"
    },
    {
      name: "Elyas",
      age: "20 months",
      condition: "Project Lead: Aaron",
      carColor: "#000000", // Black car
      description: "xxxxxxxxxxxxx",
      modifications: [
        {
          title: "xxxxxxxxxxxxx",
          details: [
            "xxxxxxxxxxxxx",
            "xxxxxxxxxxxxx"
          ]
        },
        {
          title: "xxxxxxxxxxxxx",
          details: [
            "xxxxxxxxxxxxx",
            "xxxxxxxxxxxxx"
          ]
        },
        {
          title: "xxxxxxxxxxxxx",
          details: [
            "xxxxxxxxxxxxx",
            "xxxxxxxxxxxxx"
          ]
        }
      ],
      image: "/images/3-4_Elyas_in_Car_with_Family.JPG"
    },
    {
      name: "Fiona",
      age: "4 years old",
      condition: "Project Lead: Gabe",
      carColor: "#e83e8c", // Pink car
      description: "xxxxxxxxxxxxx",
      modifications: [
        {
          title: "xxxxxxxxxxxxx",
          details: [
            "xxxxxxxxxxxxx",
            "xxxxxxxxxxxxx"
          ]
        },
        {
          title: "xxxxxxxxxxxxx",
          details: [
            "xxxxxxxxxxxxx",
            "xxxxxxxxxxxxx"
          ]
        },
        {
          title: "xxxxxxxxxxxxx",
          details: [
            "xxxxxxxxxxxxx",
            "xxxxxxxxxxxxx"
          ]
        }
      ],
      image: "/images/3-4_Fiona_and_Family.JPG"
    },
    {
      name: "Isaiah",
      age: "7 years old",
      condition: "Project Leads: Gabe and Lucas",
      carColor: "#000000", // Black car
      description: "A custom ride-on car designed for Isaiah with specialized seat modifications and structural support, featuring a duck-themed design with LED lighting and 3D-printed elements.",
      modifications: [
        {
          title: "Seat Modification",
          details: [
            "Inclined foam seat back",
            "Detachable foam cushions with fabric covers",
            "Adjustable 5-point harness"
          ]
        },
        {
          title: "Structural Support",
          details: [
            "Painted PVC frame",
            "Foam padding on PVC",
            "Allows for head support and securing components"
          ]
        },
        {
          title: "Visual Design",
          details: [
            "Controllable LED light strips",
            "Laser-cut custom license plate",
            "3D printed Duck Hood Ornament",
            "Duck stuffed animal"
          ]
        }
      ],
      image: "/images/3-4_Isaiah_Car_and_Mom.JPG"
    },
    {
      name: "Luca",
      age: "4 years old",
      condition: "Project Leads: Anika and Giuseppe",
      carColor: "#007bff", // Blue car
      description: "A custom ride-on car designed for Luca with specialized structural support and steering modifications, featuring a dinosaur-themed design with basketball elements.",
      modifications: [
        {
          title: "Structural Support",
          details: [
            "5-point harness",
            "PVC support (left-side focus)",
            "Banana pillows to support head/neck"
          ]
        },
        {
          title: "Steering",
          details: [
            "Accelerating with button",
            "3D-printed button support to improve access"
          ]
        },
        {
          title: "Design",
          details: [
            "Personalized backboard and hoop",
            "Dinosaur themed customizations (horns, teeth, eyes)",
            "Vinyl blue flame on side"
          ]
        }
      ],
      image: "/images/3-4_Luca_and_Everyone.JPG"
    },
    {
      name: "Robert",
      age: "2 years old",
      condition: "Project Leads: Bensu and Ananya",
      carColor: "#28a745", // Green car
      description: "xxxxxxxxxxxxx",
      modifications: [
        {
          title: "xxxxxxxxxxxxx",
          details: [
            "xxxxxxxxxxxxx",
            "xxxxxxxxxxxxx"
          ]
        },
        {
          title: "xxxxxxxxxxxxx",
          details: [
            "xxxxxxxxxxxxx",
            "xxxxxxxxxxxxx"
          ]
        },
        {
          title: "xxxxxxxxxxxxx",
          details: [
            "xxxxxxxxxxxxx"
          ]
        }
      ],
      image: "/images/3-4_Robert_and_Everyone.JPG"
    },
    {
      name: "Wilhelm",
      age: "6 years old",
      condition: "Project Leads: Jason and Ilisha",
      carColor: "#dc3545", // Red car
      description: "xxxxxxxxxxxxx",
      modifications: [
        {
          title: "xxxxxxxxxxxxx",
          details: [
            "xxxxxxxxxxxxx",
            "xxxxxxxxxxxxx"
          ]
        },
        {
          title: "xxxxxxxxxxxxx",
          details: [
            "xxxxxxxxxxxxx",
            "xxxxxxxxxxxxx"
          ]
        },
        {
          title: "xxxxxxxxxxxxx",
          details: [
            "xxxxxxxxxxxxx",
            "xxxxxxxxxxxxx"
          ]
        }
      ],
      image: "/images/3-4_Wilhelm_Test_Drive.JPG"
    },
    {
      name: "Zora",
      age: "5 years old",
      condition: "Project Lead: Gaby",
      carColor: "#e83e8c", // Pink car
      description: "xxxxxxxxxxxxx",
      modifications: [
        {
          title: "xxxxxxxxxxxxx",
          details: [
            "xxxxxxxxxxxxx",
            "xxxxxxxxxxxxx"
          ]
        },
        {
          title: "xxxxxxxxxxxxx",
          details: [
            "xxxxxxxxxxxxx",
            "xxxxxxxxxxxxx"
          ]
        },
        {
          title: "xxxxxxxxxxxxx",
          details: [
            "xxxxxxxxxxxxx",
            "xxxxxxxxxxxxx"
          ]
        }
      ],
      image: "/images/3-4_Zora_Test_Drive.JPG"
    }
  ];

  return (
    <div className="cars-container">
      {/* Hero Section */}
      <div className="cars-hero" style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_Fall_2024_Cars.JPG')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content">
          <h1>Ride-On Cars</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="cars-main">
        {/* Introduction Section */}
        <section className="intro-section">
          <div className="container">
            <h2>The Best Way to Explore!</h2>
            <p>
              We start with standard battery-powered ride-on cars and customize them based on 
              each child's specific needs. This includes adding joystick controls, custom seating, 
              safety harnesses, and other modifications that allow children with various abilities 
              to operate the vehicle safely and independently.
            </p>
          </div>
        </section>
      </div>

      {/* Individual Profiles Section */}
      <div className="profiles-section">
        <div className="container">
          {carProjects.map((project, index) => (
            <div 
              key={index} 
              id={`car-${project.name.toLowerCase()}`}
              className="profile-card"
              style={{
                '--car-color': project.carColor,
                '--car-color-light': `${project.carColor}20`
              }}
            >
              <div className="profile-image">
                <img src={project.image} alt={`${project.name}'s custom ride-on car`} />
              </div>
              <div className="profile-content">
                <div className="profile-header">
                  <h2>Meet {project.name}</h2>
                  <div className="profile-meta">
                    <span className="age">{project.age}</span>
                    <span className="condition">{project.condition}</span>
                  </div>
                </div>
                
                <div className="profile-description">
                  <p>{project.description}</p>
                </div>

                <div className="modifications-section">
                  <h3>What We Modified:</h3>
                  {project.modifications.map((mod, modIndex) => (
                    <div key={modIndex} className="modification-item">
                      <h4>{mod.title}</h4>
                      <ul>
                        {mod.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
} 