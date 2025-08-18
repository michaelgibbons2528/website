import React from 'react';
import '../../styles/DogTreat.css';

export default function DogTreat() {
  return (
    <div className="dog-treat-container">
      {/* Hero Section */}
      <div 
        className="dog-treat-hero"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_Dog_Treat_Test.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Dog Treat Project</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="dog-treat-main">
        {/* Introduction Section */}
        <section className="intro-section">
          <div className="container">
            <h2>For Service Dogs and their Owners</h2>
            <p>
              The Dog Treat dispenser is being designed to help physically handicapped individuals 
              reward their service dogs in training.
            </p>
          </div>
        </section>

        {/* Project Overview Section */}
        <section className="overview-section">
          <div className="container">
            <div className="overview-content">
              <div className="overview-text">
                <h2>Project Overview</h2>
                <p>
                  With just the click of a button, this dispenser will wirelessly transmit a signal to the device attached
                  to the bottom of the wheelchair, dispensing a treat to the dog while they are in the heel position. 
                  We aim to make this product as universal as possible so it can be used on any wheelchair, regardless of 
                  the type of wheelchair.
                </p>
                <div className="overview-features">
                  <div className="feature">
                    <h3>Computer Aided Design (CAD)</h3>
                    <p>Creating 3D models of the product</p>
                  </div>
                  <div className="feature">
                    <h3>Designing and Prototyping</h3>
                    <p>Testing and refining the product</p>
                  </div>
                  <div className="feature">
                    <h3>Community Impact</h3>
                    <p>Creating universal products that truly deliver accessibility</p>
                  </div>
                </div>
              </div>
              <div className="overview-image">
                <img src="/images/1-1_Dog_Treat_Attaching.jpg" alt="Dog treat project overview" />
              </div>
            </div>
          </div>
        </section>

        {/* First Prototype Section */}
        <section className="prototype-section">
          <div className="container">
            <h2>First Prototype</h2>
            <div className="prototype-content">
              <div className="prototype-video">
                <video controls preload="metadata" loop>
                  <source src="/images/Dog_Treat_Prototype_1.mp4" type="video/mp4; codecs='avc1.42E01E, mp4a.40.2'" />
                  <source src="/images/Dog_Treat_Prototype_1.mp4" type="video/mp4" />
                  <p>Your browser does not support the video tag. <a href="/images/Dog_Treat_Prototype_1.mp4" target="_blank">Click here to download the video</a></p>
                </video>
              </div>
              <div className="prototype-description">
                <h3>See Our Prototype in Action</h3>
                <p>
                  Our first prototype is a complex design that includes a funnel and two servo motors. One servo motor is used as a trapdoor to dispense into the 
                  second section, where the second servo motor is used to spin a rod that dispenses the treats. The different sections were made to limit the amount of 
                  treats dispensed, but failed since there were too many points where the treats could jam the motors. 
                </p>
                <div className="prototype-features">
                  <div className="feature">
                    <h4>Wireless Control</h4>
                    <p>Remote activation for easy operation</p>
                  </div>
                  <div className="feature">
                    <h4>Precise Dispensing</h4>
                    <p>Accurately dispenses 2-3 treats at a time</p>
                  </div>
                  <div className="feature">
                    <h4>Universal Design</h4>
                    <p>Compatible with various wheelchair types</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Second Prototype Section */}
        <section className="prototype-section second-prototype">
          <div className="container">
            <h2>Second Prototype</h2>
            <div className="prototype-content">
              <div className="prototype-video">
                <video controls preload="metadata" loop>
                  <source src="/images/Dog_Treat_Prototype_2.mp4" type="video/mp4; codecs='avc1.42E01E, mp4a.40.2'" />
                  <source src="/images/Dog_Treat_Prototype_2.mp4" type="video/mp4" />
                  <p>Your browser does not support the video tag. <a href="/images/Dog_Treat_Prototype_2.mp4" target="_blank">Click here to download the video</a></p>
                </video>
              </div>
              <div className="prototype-description">
                <h3>See Our Second Prototype in Action</h3>
                <p>
                  Our second prototype is a more simple design that is inspired by grain augers. This design uses one servo motor to spin an auger 
                  that is at a 30 degree angle to dispense the treats. By adjusting the size of the auger, we can roughly control the amount of treats dispensed, 
                  while limiting the amount of locations for jamming. 
                </p>
                <div className="prototype-features">
                  <div className="feature">
                    <h4>Simple Design</h4>
                    <p>Only one servo servo motor used</p>
                  </div>
                  <div className="feature">
                    <h4>Adjustable Dispensing</h4>
                    <p>Different sized dog treats can be used</p>
                  </div>
                  <div className="feature">
                    <h4>Universal Design</h4>
                    <p>Compatible with various wheelchair types</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3D Design & Assembly Section */}
        <section className="design-section">
          <div className="container">
            <h2>3D Design & Assembly</h2>
            <div className="design-content">
              <div className="design-overview">
                <h3>Modular Design Architecture</h3>
                <p>
                  We have used many different products to assemble the dispenser. 3-D Prints were the primary method of assembly, 
                  but also included were rubber pipe latches to attach to the wheelchair, servo motors to electrically move the dog treats,
                  and an Arduino to control the dispenser. 
                </p>
                <div className="design-features">
                  <div className="feature">
                    <h4>Electrical Components</h4>
                    <p>• Arduino<br/>• Battery Pack<br/>• Servo Motors<br/>• Button<br/>• Radio Frequency (RF) Button and Receiver</p>
                  </div>
                  <div className="feature">
                    <h4>3-D Printed Pieces</h4>
                    <p>• Base<br/>• Auger<br/>• Slide for Dog Access<br/>• Funnel</p>
                  </div>
                  <div className="feature">
                    <h4>Other Products Used</h4>
                    <p>• Rubber Pipe Clamps<br/>• Hook & Loop Tape<br/>• Hot Glue to Attach all 3-D Products</p>
                  </div>
                </div>
              </div>
              <div className="design-visual">
                <img src="/images/4-3_Dog_Treat_Project.jpg" alt="3D CAD model of dog treat dispenser" />
                
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 