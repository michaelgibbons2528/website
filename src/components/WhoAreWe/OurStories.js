import React, { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../styles/OurStories.css';

export default function OurStories() {
  const navigate = useNavigate();
  const location = useLocation();
  const kavyaRef = useRef(null);
  const jasonRef = useRef(null);
  const aaronRef = useRef(null);

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

  // Handle scroll to specific student when navigating from Students page
  useEffect(() => {
    if (location.state?.scrollToStudent) {
      const studentId = location.state.scrollToStudent;
      let targetRef = null;
      
      switch (studentId) {
        case 'kavya':
          targetRef = kavyaRef.current;
          break;
        case 'jason':
          targetRef = jasonRef.current;
          break;
        case 'aaron':
          targetRef = aaronRef.current;
          break;
        default:
          break;
      }
      
      if (targetRef) {
        setTimeout(() => {
          targetRef.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }, 100);
      }
      
      // Clear the state to prevent re-scrolling on page refresh
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <div className="stories-container">
      {/* Hero Section */}
      <div className="stories-hero" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/4-3_Rutgers_Spring_2025_Everyone.JPG')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content">
          <h1>Our Stories</h1>
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
            <div className="story-card" ref={kavyaRef}>
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
                    <span className="project">Lead: <button onClick={() => handleProjectClick('ciaran')} style={{cursor: 'pointer', background: 'none', border: 'none', color: 'inherit', textDecoration: 'underline', padding: 0, font: 'inherit'}}>Project Ciaran</button></span>
                    <span className="project">Member: <button onClick={() => handleProjectClick('fiona')} style={{cursor: 'pointer', background: 'none', border: 'none', color: 'inherit', textDecoration: 'underline', padding: 0, font: 'inherit'}}>Project Fiona</button></span>
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
                      project planning and organization skills. Additionally, in working to help A4A expand I've practiced thinking out 
                      of the box and creative problem solving."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="story-card" ref={jasonRef}>
              <div className="story-image">
                <img src="/images/4-3_Jason_Story.JPG" alt="Jason working on engineering project" />
                <div className="story-overlay">
                  <span className="story-number">02</span>
                </div>
              </div>
              <div className="story-content">
                <h3>Jason Ho: Vice President of Rutgers A4A</h3>
                                                   <div className="story-meta">
                    <span className="major">Major: Mechanical Engineering</span>
                    <span className="project">Year: 2027</span>
                    <span className="project">Lead: <button onClick={() => handleProjectClick('wilhelm')} style={{cursor: 'pointer', background: 'none', border: 'none', color: 'inherit', textDecoration: 'underline', padding: 0, font: 'inherit'}}>Project Wilhelm</button> & <button onClick={() => handleProjectClick('montessori-board')} style={{cursor: 'pointer', background: 'none', border: 'none', color: 'inherit', textDecoration: 'underline', padding: 0, font: 'inherit'}}>Montessori Board</button></span>
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
            <div className="story-card" ref={aaronRef}>
              <div className="story-image">
                <img src="/images/4-3_Aaron_Story.JPG" alt="Aaron working on engineering project" />
                <div className="story-overlay">
                  <span className="story-number">03</span>
                </div>
              </div>
              <div className="story-content">
                <h3>Aaron Clarion: Former Vice President of Rutgers A4A</h3>
                                                   <div className="story-meta">
                    <span className="major">Major: Computer Engineering</span>
                    <span className="project">Year: 2025</span>
                    <span className="project">Lead: <button onClick={() => handleProjectClick('elyas')} style={{cursor: 'pointer', background: 'none', border: 'none', color: 'inherit', textDecoration: 'underline', padding: 0, font: 'inherit'}}>Project Elyas</button></span>
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
                     <span className="project">Lead: <button onClick={() => handleProjectClick('robert')} style={{cursor: 'pointer', background: 'none', border: 'none', color: 'inherit', textDecoration: 'underline', padding: 0, font: 'inherit'}}>Project Robert</button> & <button onClick={() => handleProjectClick('bath-seat')} style={{cursor: 'pointer', background: 'none', border: 'none', color: 'inherit', textDecoration: 'underline', padding: 0, font: 'inherit'}}>Bath Seat Project</button></span>
                   </div>
                 
                 <div className="story-excerpt">
                   <blockquote>
                     "I joined A4A because I wanted to use engineering in a way that makes a real difference in people's lives. The idea of creating something hands on that could help kids and families directly really stood out to me. Being part of A4A has shown me how powerful it is when creativity and compassion come together to solve real problems."
                   </blockquote>
                 </div>

                 <div className="story-qa">
                   <div className="qa-item">
                     <h4>What was your favorite memory on a project you've worked on?</h4>
                     <p>
                       "My favorite memory was when we delivered the modified ride on car to Robert. We had spent weeks carefully designing and adding features like the harness for safety and the seat adjustments so he could sit comfortably, and seeing him actually use it for the first time was unforgettable. The second he started moving, his face completely lit up, and everyone in the room, his family and our team, felt that same rush of excitement. That moment really put into perspective the impact our projects can have beyond just the technical side of things."
                     </p>
                   </div>

                   <div className="qa-item">
                     <h4>How has A4A impacted your college experience?</h4>
                     <p>
                       "A4A has given me a strong sense of community and purpose on campus. It has helped me grow as a leader, work across disciplines, and feel more connected to both my peers and the families we support. I've met some of my closest friends through this organization, and it has shaped the way I want to approach my future career."
                     </p>
                   </div>

                   <div className="qa-item">
                     <h4>What skills have you developed through A4A?</h4>
                     <p>
                       "Through A4A, I've strengthened my technical skills in 3D printing, Makerspace tools, and hands on prototyping. As secretary and project lead, I've also developed leadership skills in project management, team communication, and problem solving, skills that will carry forward into both academics and my future career. Beyond just the skills, I've learned how to adapt to challenges and work under pressure, which truly has been valuable."
                     </p>
                   </div>
                 </div>
               </div>
             </div>

             {/* Story 5 */}
             <div className="story-card">
               <div className="story-image">
                 <img src="/images/4-3_Bensu_Story.JPG" alt="Student working on engineering project" />
                 <div className="story-overlay">
                   <span className="story-number">05</span>
                 </div>
               </div>
               <div className="story-content">
                 <h3>Bensu Urganci: University Affairs of Rutgers A4A</h3>
                                                      <div className="story-meta">
                     <span className="major">Major: Mechanical Engineering</span>
                     <span className="project">Year: 2027</span>
                     <span className="project">Lead: <button onClick={() => handleProjectClick('robert')} style={{cursor: 'pointer', background: 'none', border: 'none', color: 'inherit', textDecoration: 'underline', padding: 0, font: 'inherit'}}>Project Robert</button> & <button onClick={() => handleProjectClick('braylon')} style={{cursor: 'pointer', background: 'none', border: 'none', color: 'inherit', textDecoration: 'underline', padding: 0, font: 'inherit'}}>Project Braylon</button></span>
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
                 <img src="/images/4-3_Gabe_Story.JPG" alt="Gabriel Endres working on engineering project" />
                 <div className="story-overlay">
                   <span className="story-number">06</span>
                 </div>
               </div>
               <div className="story-content">
                 <h3>Gabriel Endres: President of Rutgers A4A</h3>
                                                      <div className="story-meta">
                     <span className="major">Major: Biomedical Engineering/Business Administration</span>
                     <span className="project">Year: 2027</span>
                     <span className="project">Lead: <button onClick={() => handleProjectClick('fiona')} style={{cursor: 'pointer', background: 'none', border: 'none', color: 'inherit', textDecoration: 'underline', padding: 0, font: 'inherit'}}>Project Fiona</button> & <button onClick={() => handleProjectClick('isaiah')} style={{cursor: 'pointer', background: 'none', border: 'none', color: 'inherit', textDecoration: 'underline', padding: 0, font: 'inherit'}}>Project Isaiah</button></span>
                   </div>
                 
                 <div className="story-excerpt">
                   <blockquote>
                     "I came to the first ever meeting before the club even existed. I saw the flyer in my FY engineering class and knew immediately it sounded like such a great use of my engineering skills to truly have an impact on the local community and underserved children."
                   </blockquote>
                 </div>

                 <div className="story-qa">
                   <div className="qa-item">
                     <h4>What was your favorite memory on a project you've worked on?</h4>
                     <p>
                       "I think my favorite project thus far has to be my first car project or the dog treat project. Although very different they both have a very tangible impact and I was able to learn so many new skills from both of these projects while working alongside some amazing individuals."
                     </p>
                   </div>

                   <div className="qa-item">
                     <h4>How has A4A impacted your college experience?</h4>
                     <p>
                       "It has been nothing short of life changing. It has opened so many doors and allowed so many opportunities to grow and develop as a leader and as a team member. I am truly grateful to have the opportunity to be a part of the mission here at A4A."
                     </p>
                   </div>

                   <div className="qa-item">
                     <h4>What skills have you developed through A4A?</h4>
                     <p>
                       "I've been able to foster many different aspects of leadership and strategy through planning logistics and leading two projects. I've gained many hands-on woodworking and electronic skills during my time modifying cars as well as CAD and 3-D printing skills from the dog treat project."
                     </p>
                   </div>
                 </div>
               </div>
             </div>

             {/* Story 7 */}
             <div className="story-card">
               <div className="story-image">
                 <img src="/images/4-3_Sam_Story.JPG" alt="Sam working on engineering project" />
                 <div className="story-overlay">
                   <span className="story-number">07</span>
                 </div>
               </div>
               <div className="story-content">
                 <h3>Samantha Domenick: Visual Media Coordinator of Rutgers A4A</h3>
                                                      <div className="story-meta">
                     <span className="major">Major: Packaging Engineering</span>
                     <span className="project">Year: 2027</span>
                     <span className="project">Member: <button onClick={() => handleProjectClick('ciaran')} style={{cursor: 'pointer', background: 'none', border: 'none', color: 'inherit', textDecoration: 'underline', padding: 0, font: 'inherit'}}>Project Ciaran</button></span>
                   </div>
                 
                 <div className="story-excerpt">
                   <blockquote>
                     "I was looking for an inclusive club to meet people and do cool things. I got an email in a funky font that a new club was starting up for kids with disabilities, showed up to the interest meeting, really liked the vibe and the mission, and haven't left since."
                   </blockquote>
                 </div>

                 <div className="story-qa">
                   <div className="qa-item">
                     <h4>What was your favorite memory on a project you've worked on?</h4>
                     <p>
                       "There was an insane time crunch during the final stretch of last year's projects before the big showcase (go project Ciaran!). Everyone scraped together the time they had between exams and projects and stayed late into the night. There's something so wholesome about a group of students held up in a building playing pop hits at 11pm, tired but determined, to spray paint a decorative flag just right or make sure a neck-support is perfectly aligned. It was a group of creative, innovative, kind-hearted people putting all of their energy onto something cool that would make kids smile."
                     </p>
                   </div>

                   <div className="qa-item">
                     <h4>How has A4A impacted your college experience?</h4>
                     <p>
                       "A4A is genuinely one of my favorite parts of college. It's an extracurricular that feels like anything but a chore. A4A makes me feel like I'm doing something worth doing, something to be proud of. Even at the end of a long day between work and school, I always want to go hang out with the A4A group and make awesome things. Career-wise, it's such a resume booster. In internship interviews, I've been asked specifically about my A4A work and it's always a hit. It also is an awesome addition to my LinkedIn."
                     </p>
                   </div>

                   <div className="qa-item">
                     <h4>What skills have you developed through A4A?</h4>
                     <p>
                       "I've developed skills in teamwork, innovation, and adaptability. Of course, it's a team project, and being able to both listen AND speak up when throwing around ideas is essential. Innovation is the cornerstone of this club, figuring out new ways to make things better. As far as adaptability... It's an interdisciplinary project that has you figuring out why a motor isn't working one day, adding cute sticker details another, and working out accessibility modifications the next. And there's always something not going to plan or that could be done better, so pivoting is a critical skill in both planning and hands-on applications."
                     </p>
                   </div>
                 </div>
               </div>
             </div>

             {/* Story 8 */}
             <div className="story-card">
               <div className="story-image">
                 <img src="/images/4-3_Ilisha_Story.jpg" alt="Ilisha working on engineering project" />
                 <div className="story-overlay">
                   <span className="story-number">08</span>
                 </div>
               </div>
               <div className="story-content">
                 <h3>Ilisha Gomes: Treasurer of Rutgers A4A</h3>
                                                      <div className="story-meta">
                     <span className="major">Major: Electrical Engineering</span>
                     <span className="project">Year: 2027</span>
                     <span className="project">Lead: <button onClick={() => handleProjectClick('wilhelm')} style={{cursor: 'pointer', background: 'none', border: 'none', color: 'inherit', textDecoration: 'underline', padding: 0, font: 'inherit'}}>Project Wilhelm</button> & <button onClick={() => handleProjectClick('bath-seat')} style={{cursor: 'pointer', background: 'none', border: 'none', color: 'inherit', textDecoration: 'underline', padding: 0, font: 'inherit'}}>Bath Seat Project</button></span>
                   </div>
                 
                 <div className="story-excerpt">
                   <blockquote>
                     "I joined A4A because I wanted to be part of a club that let me work on meaningful, hands-on projects right from the start. The chance to build something that could improve a child's life was such a unique opportunity, and it combined my passion for engineering with making a real impact."
                   </blockquote>
                 </div>

                 <div className="story-qa">
                   <div className="qa-item">
                     <h4>What is your favorite memory or project you've worked on?</h4>
                     <p>
                       "Two projects stand out to me: the ride-on car for Wilhelm and the adapted bath seat. For the car, the best part was seeing Wilhelm and his parents' reaction when they tried it out. It was incredible to see how much joy it brought them and to know that our work made a real difference for their family. The bath seat was a prototype, so there was a lot of trial and error, but that process taught me so many new skills and pushed me to learn things I had never done before. Both projects were very fun because of the people I worked with. The teamwork and collaboration made every challenge feel exciting and rewarding."
                     </p>
                   </div>

                   <div className="qa-item">
                     <h4>How has A4A impacted your college experience?</h4>
                     <p>
                       "A4A has made my college experience much more meaningful by giving me the chance to apply what I learn in class to real-world challenges. Since the club is filled with students from many different engineering majors, I have been able to learn from others and gain skills beyond just electrical engineering, including mechanical design concepts and fabrication techniques. Most importantly, A4A has given me a supportive community of people who inspire me and make every project an enjoyable and collaborative experience."
                     </p>
                   </div>

                   <div className="qa-item">
                     <h4>What skills have you developed through A4A?</h4>
                     <p>
                       "Through A4A, I've developed a wide range of technical skills, from wiring circuits and troubleshooting to using CAD, prototyping, and even thinking about the aesthetics of a design. I've also learned a lot by working alongside students from other engineering majors, which has broadened my perspective. On the leadership side, serving as a project lead helped me grow in organization and planning. I learned how to structure meetings, set goals, and keep the team on track. Learning how to approach problems from multiple perspectives and guiding parts of the project has been just as valuable as the technical knowledge."
                     </p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );  
}   