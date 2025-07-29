import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Cars.css';

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
      condition: "Project Lead: Bensu and Maya",
      carColor: "#007bff", // Blue car
      description: "Braylon is an energetic 3-year-old who loves to move and explore. He has physical disabilities that affect his ability to walk independently, but he has a strong desire to be mobile and play with other children.",
      modifications: [
        {
          title: "Mobility Assistance",
          details: [
            "Created a custom mobility system that allows Braylon to move independently.",
            "Added easy-to-use controls that match his motor abilities."
          ]
        },
        {
          title: "Play Integration",
          details: [
            "Integrated toys and interactive elements that Braylon can access while driving.",
            "Added storage compartments for his favorite toys."
          ]
        },
        {
          title: "Growth Accommodation",
          details: [
            "Designed adjustable features that can be modified as Braylon grows.",
            "Created a modular system for easy updates and modifications."
          ]
        }
      ],
      image: "/images/3-4_Braylon_and_Everyone.JPG"
    },
    {
      name: "Ciaran",
      age: "5 years old",
      condition: "Project Lead: Aito and Kavya",
      carColor: "#fd7e14", // Orange car
      description: "Ciaran is a 5-year-old boy who loves to be active and play with his family. He has physical disabilities that affect his mobility, but he has a strong spirit and determination to participate in family activities.",
      modifications: [
        {
          title: "Family Integration",
          details: [
            "Designed a car that allows Ciaran to participate in family activities and outings.",
            "Created features that make it easy for him to join family adventures."
          ]
        },
        {
          title: "Comfort and Support",
          details: [
            "Built a comfortable and supportive seating system for Ciaran's specific needs.",
            "Added features that provide proper posture and comfort during rides."
          ]
        },
        {
          title: "Durability and Safety",
          details: [
            "Created a durable car that can handle active family use.",
            "Added comprehensive safety features for peace of mind."
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
      description: "Elyas is a 20-month-old boy who suffered a brain injury during birth, resulting in cerebral palsy and epilepsy. He has limited mobility but loves to explore and experience movement. He enjoys textures and sensory experiences.",
      modifications: [
        {
          title: "Sensory Enhancements",
          details: [
            "Added red carpet and felt interior for texture stimulation that Elyas enjoys.",
            "Integrated silver wrapping on seat cushions for additional sensory input."
          ]
        },
        {
          title: "Safety Lighting",
          details: [
            "Installed LED lights underneath and inside the car as extra safety features.",
            "Added gentle lighting that doesn't trigger seizures."
          ]
        },
        {
          title: "Secure Positioning",
          details: [
            "Created custom cushions and harness system to keep Elyas steady during rides.",
            "Designed positioning that accommodates his specific mobility needs."
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
      description: "Fiona is a bright and curious 4-year-old who loves to explore and learn. She has developmental delays that affect her motor coordination and balance. She enjoys music, colors, and interactive play.",
      modifications: [
        {
          title: "Stabilization System",
          details: [
            "Added a custom stabilization system to help Fiona maintain balance while driving.",
            "Created a wider, more stable base for increased confidence."
          ]
        },
        {
          title: "Interactive Features",
          details: [
            "Integrated musical elements and colorful LED lights to engage Fiona's interests.",
            "Added easy-to-press buttons for interactive play."
          ]
        },
        {
          title: "Comfortable Seating",
          details: [
            "Designed a supportive seat that provides proper posture and comfort.",
            "Added soft padding and secure straps for safety."
          ]
        }
      ],
      image: "/images/3-4_Fiona_and_Family.JPG"
    },
    {
      name: "Isaiah",
      age: "7 years old",
      condition: "Project Lead: Gabe and Lucas",
      carColor: "#000000", // Black car
      description: "Isaiah is a 7-year-old boy who experiences the freedom and joy of independent movement for the first time through his custom car. He has mobility challenges that have limited his ability to explore and play independently.",
      modifications: [
        {
          title: "First-Time Mobility",
          details: [
            "Designed a car specifically for Isaiah's first experience of independent movement.",
            "Created intuitive controls that he could learn quickly and confidently."
          ]
        },
        {
          title: "Confidence Building",
          details: [
            "Added features that help Isaiah build confidence in his driving abilities.",
            "Integrated safety features that provide security while allowing independence."
          ]
        },
        {
          title: "Social Integration",
          details: [
            "Designed the car to help Isaiah participate in activities with his peers.",
            "Added features that make it easy for him to join group play."
          ]
        }
      ],
      image: "/images/3-4_Isaiah_Car_and_Mom.JPG"
    },
    {
      name: "Luca",
      age: "4 years old",
      condition: "Project Lead: Anika and Giuseppe",
      carColor: "#007bff", // Blue car
      description: "Luca is a determined 4-year-old who loves to learn and grow. He has developmental challenges that affect his motor skills and coordination. He enjoys educational activities and discovering new abilities.",
      modifications: [
        {
          title: "Skill Development",
          details: [
            "Created a car that helps Luca develop motor skills and coordination.",
            "Added features that encourage learning and skill building."
          ]
        },
        {
          title: "Educational Integration",
          details: [
            "Integrated educational elements that Luca can interact with while driving.",
            "Added features that support his learning and development goals."
          ]
        },
        {
          title: "Confidence Building",
          details: [
            "Designed features that help Luca discover and build confidence in new abilities.",
            "Created a supportive environment for growth and development."
          ]
        }
      ],
      image: "/images/3-4_Luca_Car_Runway.JPG"
    },
    {
      name: "Robert",
      age: "2 years old",
      condition: "Project Lead: Bensu and Ananya",
      carColor: "#28a745", // Green car
      description: "Robert is a two year old boy with Cerebral Palsy. Due to this, he cannot walk or situp unaided. His legs are strong, but his arms do not have as much strength. He loves animals, music, trucks. For his car, we had to ensure that his legs were able to bend 90 degrees and fit his interests as well.",
      modifications: [
        {
          title: "5-Point Harness",
          details: [
            "We added a 5-point harness to keep Robert secure while allowing his arms to remain free for movement.",
            "This design also accommodates Robert's growth, ensuring comfort and safety as he grows."
          ]
        },
        {
          title: "Adjustable Seating",
          details: [
            "We created additional stackable seats for the original car seat to ensure Robert's legs stay at a 90-degree angle.",
            "The seats are more comfortable and can be easily velcro-ed on for a secure fit. The stackable design allows for future adjustments as Robert grows, maintaining proper posture and comfort."
          ]
        },
        {
          title: "Additional Support Pipe Structure",
          details: [
            "We added a pipe structure at the back of the car to provide extra support for the 5-point harness, enhancing stability and security."
          ]
        }
      ],
      image: "/images/3-4_Robert_and_Everyone.JPG"
    },
    {
      name: "Wilhelm",
      age: "6 years old",
      condition: "Project Lead: Jason and Ilisha",
      carColor: "#dc3545", // Red car
      description: "Wilhelm is determined to keep up with his siblings and friends. He has mobility challenges that make it difficult to participate in outdoor activities with his peers. He loves speed, adventure, and being independent.",
      modifications: [
        {
          title: "Speed Control System",
          details: [
            "Modified the speed controls to allow Wilhelm to drive at a pace comfortable for him.",
            "Added gradual acceleration features for safe operation."
          ]
        },
        {
          title: "Custom Seating",
          details: [
            "Designed a seat that provides proper support while allowing freedom of movement.",
            "Added adjustable features to accommodate Wilhelm's growth."
          ]
        },
        {
          title: "Durability Enhancements",
          details: [
            "Reinforced the car structure to handle active outdoor use.",
            "Added weather-resistant features for year-round enjoyment."
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
      description: "Zora loves exploring the outdoors and being active with her family. She has mobility challenges that make it difficult to keep up with her siblings during outdoor activities. She enjoys nature, animals, and adventure.",
      modifications: [
        {
          title: "Custom Controls",
          details: [
            "Modified the steering mechanism to be more accessible for Zora's specific motor skills.",
            "Added easy-to-grip handles and simplified control layout."
          ]
        },
        {
          title: "Safety Features",
          details: [
            "Installed a custom safety harness that provides security while allowing freedom of movement.",
            "Added LED lights for visibility during outdoor adventures."
          ]
        },
        {
          title: "Terrain Adaptations",
          details: [
            "Enhanced the car's ability to handle different outdoor terrains for family adventures.",
            "Added extra traction and stability features."
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
        backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/4-3_Fall_2024_Cars.JPG')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Ride-On Cars</h1>
            <p className="hero-subtitle">
              Our signature project involves modifying battery-powered ride-on cars to make them 
              accessible for children with mobility challenges. Each car is uniquely designed 
              to meet the specific needs of the child who will use it.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="cars-intro">
        <div className="container">
          <h2>Custom Solutions for Every Child</h2>
          <p>
            We start with standard battery-powered ride-on cars and customize them based on 
            each child's specific needs. This includes adding joystick controls, custom seating, 
            safety harnesses, and other modifications that allow children with various abilities 
            to operate the vehicle safely and independently.
          </p>
        </div>
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

      {/* Impact Section */}
      <div className="impact-section">
        <div className="container">
          <h2>The Impact of Custom Ride-On Cars</h2>
          <p>
            These custom ride-on cars provide children with a sense of independence and freedom 
            they may not have experienced before. They can now join their siblings and friends 
            in outdoor play, developing motor skills and confidence while having fun.
          </p>
          <div className="impact-stats">
            <div className="stat">
              <h3>9</h3>
              <p>Children Helped</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>Custom Designed</p>
            </div>
            <div className="stat">
              <h3>∞</h3>
              <p>Smiles Created</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 