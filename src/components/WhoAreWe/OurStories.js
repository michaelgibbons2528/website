import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/OurStories.css';

export default function OurStories() {
  const navigate = useNavigate();

  // Function to handle project link navigation
  const handleProjectClick = (projectName) => {
    if (projectName === 'montessori-board') {
      navigate('/montessori-board');
    } else if (projectName === 'bath-seat') {
      navigate('/bath-seat');
    } else {
      navigate('/cars', { state: { scrollToChild: projectName } });
    }
  };

  return (
    <div className="stories-container">
      {/* Hero Section */}
      <div className="stories-hero" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/4-3_Rutgers_Spring_2025_Everyone.JPG')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Our Stories</h1>
          </div>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="stories-section">
        <div className="container">
          <div className="stories-intro">
            <h2>Student Stories</h2>
            <p>
              Our student engineers share their experiences of learning, growth, and the profound impact 
              of applying their skills for A4A. These stories showcase the 
              transformative power of compassionate engineering.
            </p>
          </div>

          <div className="stories-grid">
            {/* Story 1 */}
            <div className="story-card">
              <div className="story-image">
                <img src="/images/4-3_Kavya_Story.jpg" alt="Kavya working on engineering project" />
                <div className="story-overlay">
                  <span className="story-number">01</span>
                </div>
              </div>
              <div className="story-content">
                <h3>Kavya Patel: Social Chair of Rutgers A4A</h3>
                                                   <div className="story-meta">
                    <span className="major">Major: Biochemical Engineering</span>
                    <span className="project">Lead: <a href="#" onClick={(e) => { e.preventDefault(); handleProjectClick('ciaran'); }} style={{cursor: 'pointer'}}>Project Ciaran</a></span>
                    <span className="project">Member: <a href="#" onClick={(e) => { e.preventDefault(); handleProjectClick('fiona'); }} style={{cursor: 'pointer'}}>Project Fiona</a></span>
                  </div>
                
                <div className="story-excerpt">
                  <blockquote>
                    "To me, A4A represents the connection between engineering and applying it to make a real world impact. 
                    What initially drew me to the club was the club's mission of applying technical engineering knowledge 
                    in way to directly help children with disabilities. Seeing the impact of our work firsthand during the 
                    showcases made me realize our work at A4A wasn't just a project but something that brings joy, opportunity 
                    and independence to real families."
                  </blockquote>
                </div>

                <div className="story-qa">
                  <div className="qa-item">
                    <h4>What was your favorite memory on a project you've worked on?</h4>
                    <p>
                      "My favorite memory was the night before the showcase. Project Ciaran decided to make a customized flag for 
                      our car and after trying different prototypes at the Rutgers Makerspace, we decided to hand sew the flag ourselves. 
                      Even though none of my team knew how to sew, we worked with other teams to learn how to use the sewing machine. 
                      Although it took some time and patience to get it right, that moment showed me how teamwork and dedication can 
                      make even small details special."
                    </p>
                  </div>

                  <div className="qa-item">
                    <h4>How has A4A impacted your college experience?</h4>
                    <p>
                      "A4A has made a meaningful impact on my college experience by providing a supportive and inclusive community where 
                      collaboration goes beyond just teamwork. It's an uplifting community that continuously inspires me and makes our work 
                      even more special. This sense of community has helped me stay motivated, develop leadership skills and truly enjoy my 
                      time in college."
                    </p>
                  </div>

                  <div className="qa-item">
                    <h4>What skills have you developed through A4A?</h4>
                    <p>
                      "Through my involvement with A4A I have developed a variety of valuable skills. As a project lead, I learned the 
                      importance of team management, communication, collaboration and leadership. While helping plan events, I developed 
                      project planning and organization skills. Additionally, in working to help A4A expand I’ve practiced thinking out 
                      of the box and creative problem solving."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="story-card">
              <div className="story-image">
                <img src="/images/4-3_Jason_Story.jpg" alt="Jason working on engineering project" />
                <div className="story-overlay">
                  <span className="story-number">02</span>
                </div>
              </div>
              <div className="story-content">
                <h3>Jason Ho: Vice President of Rutgers A4A</h3>
                                                   <div className="story-meta">
                    <span className="major">Major: Mechanical Engineering</span>
                    <span className="project">Year: 2027</span>
                    <span className="project">Lead: <a href="#" onClick={(e) => { e.preventDefault(); handleProjectClick('wilhelm'); }} style={{cursor: 'pointer'}}>Project Wilhelm</a> & <a href="#" onClick={(e) => { e.preventDefault(); handleProjectClick('montessori-board'); }} style={{cursor: 'pointer'}}>Montessori Board</a></span>
                  </div>
                
                <div className="story-excerpt">
                  <blockquote>
                    "I joined A4A because it allowed me to use my engineering skill for a tangible, positive impact on people's lives. 
                    It's not just about making projects - it's about understanding someone's needs and creating something that empowers them."
                  </blockquote>
                </div>

                <div className="story-qa">
                  <div className="qa-item">
                    <h4>What was your favorite memory on a project you've worked on?</h4>
                    <p>
                      "My favorite project was modifying a ride-on toy car for a child with Zellweger spectrum disorder. 
                      He had multiple impairments - visual, auditory, and motor. So we had to rethink the entire design. 
                      To this day it is still one of my best memories seeing him light up when he used it for the first time. 
                      It reminded me why the small technical decisions we make can have such a big emotional impact."
                    </p>
                  </div>

                  <div className="qa-item">
                    <h4>How has A4A impacted your college experience?</h4>
                    <p>
                      "A4A is more than just a club, it's a family. It gave me a purpose beyond coursework, pushed me to lead 
                      and mentor others, and connected me with a community of people who care about using engineering for good."
                    </p>
                  </div>

                  <div className="qa-item">
                    <h4>What skills have you developed through A4A?</h4>
                    <p>
                      "On the technical side, I've learned hands-on prototyping, working with Arduino microcontrollers, 
                      wiring electronics, and designing accessible hardware. On the leadership side, I've developed project 
                      management skills, coordinating multiple project teams at once, setting timelines, and delegating tasks 
                      based on people's strengths."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Story 3 */}
            <div className="story-card">
              <div className="story-image">
                <img src="/images/4-3_Aaron_Story.jpg" alt="Aaron working on engineering project" />
                <div className="story-overlay">
                  <span className="story-number">03</span>
                </div>
              </div>
              <div className="story-content">
                <h3>Aaron Clarion: Former Vice President of Rutgers A4A</h3>
                                                   <div className="story-meta">
                    <span className="major">Major: Computer Engineering</span>
                    <span className="project">Year: 2025</span>
                    <span className="project">Lead: <a href="#" onClick={(e) => { e.preventDefault(); handleProjectClick('elyas'); }} style={{cursor: 'pointer'}}>Project Elyas</a></span>
                  </div>
                
                <div className="story-excerpt">
                  <blockquote>
                    "I always liked being able to give back and to use what I know to do something beneficial."
                  </blockquote>
                </div>

                <div className="story-qa">
                  <div className="qa-item">
                    <h4>What was your favorite memory on a project you've worked on?</h4>
                    <p>
                      "The first ever showcase is up there as one of my favorites. It was the first time we can see the fruits 
                      of our labor throughout the semester and it shows how much we can do to help these kids."
                    </p>
                  </div>

                  <div className="qa-item">
                    <h4>How has A4A impacted your college experience?</h4>
                    <p>
                      "I've met and worked with many incredible people, that includes students, faculties, and families. 
                      Everything involving A4A has been rewarding for me and is an experience I wouldn't trade for anything else."
                    </p>
                  </div>

                  <div className="qa-item">
                    <h4>What skills have you developed through A4A?</h4>
                    <p>
                      "I've learned to communicate and organize well enough to lead a project and oversee all the projects as well. 
                      It's given me opportunities to try to get my hands dirty and do some technical work, e.g. soldering and rewiring."
                    </p>
                  </div>
                </div>
              </div>
                         </div>

             {/* Story 4 */}
             <div className="story-card">
               <div className="story-image">
                 <img src="/images/4-3_Ananya_Story.JPG" alt="Ananya explaining project." />
                 <div className="story-overlay">
                   <span className="story-number">04</span>
                 </div>
               </div>
               <div className="story-content">
                 <h3>Ananya Shinde: Secretary of Rutgers A4A</h3>
                                                      <div className="story-meta">
                     <span className="major">Major: Biomedical Engineering</span>
                     <span className="project">Year: 2027</span>
                     <span className="project">Lead: <a href="#" onClick={(e) => { e.preventDefault(); handleProjectClick('robert'); }} style={{cursor: 'pointer'}}>Project Robert</a> & <a href="#" onClick={(e) => { e.preventDefault(); handleProjectClick('bath-seat'); }} style={{cursor: 'pointer'}}>Bath Seat Project</a></span>
                   </div>
                 
                 <div className="story-excerpt">
                   <blockquote>
                     ""
                   </blockquote>
                 </div>

                 <div className="story-qa">
                   <div className="qa-item">
                     <h4>What was your favorite memory on a project you've worked on?</h4>
                     <p>
                       "[ANSWER]"
                     </p>
                   </div>

                   <div className="qa-item">
                     <h4>How has A4A impacted your college experience?</h4>
                     <p>
                       "[ANSWER]"
                     </p>
                   </div>

                   <div className="qa-item">
                     <h4>What skills have you developed through A4A?</h4>
                     <p>
                       "[ANSWER]"
                     </p>
                   </div>
                 </div>
               </div>
             </div>

             {/* Story 5 */}
             <div className="story-card">
               <div className="story-image">
                 <img src="/images/4-3_Bensu_Story.jpg" alt="Student working on engineering project" />
                 <div className="story-overlay">
                   <span className="story-number">05</span>
                 </div>
               </div>
               <div className="story-content">
                 <h3>Bensu Urganci: University Affairs of Rutgers A4A</h3>
                                                      <div className="story-meta">
                     <span className="major">Major: Mechanical Engineering</span>
                     <span className="project">Year: 2027</span>
                     <span className="project">Lead: <a href="#" onClick={(e) => { e.preventDefault(); handleProjectClick('robert'); }} style={{cursor: 'pointer'}}>Project Robert</a> & <a href="#" onClick={(e) => { e.preventDefault(); handleProjectClick('braylon'); }} style={{cursor: 'pointer'}}>Project Braylon</a></span>
                   </div>
                 
                 <div className="story-excerpt">
                   <blockquote>
                     ""
                   </blockquote>
                 </div>

                 <div className="story-qa">
                   <div className="qa-item">
                     <h4>What was your favorite memory on a project you've worked on?</h4>
                     <p>
                       "[ANSWER]"
                     </p>
                   </div>

                   <div className="qa-item">
                     <h4>How has A4A impacted your college experience?</h4>
                     <p>
                       "[ANSWER]"
                     </p>
                   </div>

                   <div className="qa-item">
                     <h4>What skills have you developed through A4A?</h4>
                     <p>
                       "[ANSWER]"
                     </p>
                   </div>
                 </div>
               </div>
             </div>

             {/* Story 6 */}
             <div className="story-card">
               <div className="story-image">
                 <img src="/images/4-3_Gabe_Story.jpg" alt="Student working on engineering project" />
                 <div className="story-overlay">
                   <span className="story-number">06</span>
                 </div>
               </div>
               <div className="story-content">
                 <h3>Gabe Endres: President of Rutgers A4A</h3>
                                                      <div className="story-meta">
                     <span className="major">Major: Biomedical Engineering</span>
                     <span className="project">Year: 2027</span>
                     <span className="project">Lead: <a href="#" onClick={(e) => { e.preventDefault(); handleProjectClick('fiona'); }} style={{cursor: 'pointer'}}>Project Fiona</a> & <a href="#" onClick={(e) => { e.preventDefault(); handleProjectClick('isaiah'); }} style={{cursor: 'pointer'}}>Project Isaiah</a></span>
                   </div>
                 
                 <div className="story-excerpt">
                   <blockquote>
                     ""
                   </blockquote>
                 </div>

                 <div className="story-qa">
                   <div className="qa-item">
                     <h4>What was your favorite memory on a project you've worked on?</h4>
                     <p>
                       "[ANSWER]"
                     </p>
                   </div>

                   <div className="qa-item">
                     <h4>How has A4A impacted your college experience?</h4>
                     <p>
                       "[ANSWER]"
                     </p>
                   </div>

                   <div className="qa-item">
                     <h4>What skills have you developed through A4A?</h4>
                     <p>
                       "[ANSWER]"
                     </p>
                   </div>
                 </div>
               </div>
             </div>
           </div>

           {/* Call to Action */}
          <div className="stories-cta">
            <h3>Share Your Story</h3>
            <p>
              Every student engineer has a unique journey. If you'd like to share your experience 
              with A4A and how it has impacted your learning and career goals, we'd love to hear from you.
            </p>
            <button className="cta-button">Contact Us to Share Your Story</button>
          </div>
        </div>
      </div>
    </div>
  );
} 