import React, { useState } from 'react';
import '../../styles/Training.css';

const Training = () => {
  const [activeTool, setActiveTool] = useState('drill');

  const tools = [
    {
      id: 'drill',
      name: 'Drill',
      icon: '🔧',
      image: '/images/1-1_Engineer_Kickoff.jpg',
      description: 'A power tool used for drilling holes and driving screws',
      safety: [
        'Always wear safety glasses',
        'Secure workpiece before drilling',
        'Use appropriate drill bit for material',
        'Keep hands away from rotating parts',
        'Unplug when changing bits'
      ],
      steps: [
        'Select appropriate drill bit for your material',
        'Mark the drilling location clearly',
        'Secure the workpiece firmly',
        'Set drill to correct speed setting',
        'Apply steady pressure while drilling',
        'Withdraw bit while still rotating'
      ],
      tips: [
        'Start with a smaller pilot hole for large holes',
        'Use cutting oil for metal drilling',
        'Keep bits sharp and clean',
        'Match drill speed to material hardness'
      ]
    },
    {
      id: 'impact-driver',
      name: 'Impact Driver',
      icon: '⚡',
      image: '/images/1-1_Luca_Wires_and_Bolts.jpg',
      description: 'A power tool that delivers high torque for driving screws and fasteners',
      safety: [
        'Wear safety glasses and hearing protection',
        'Use appropriate bit size',
        'Keep hands clear of work area',
        'Secure workpiece properly',
        'Disconnect power when changing bits'
      ],
      steps: [
        'Select correct bit for fastener type',
        'Insert bit securely into chuck',
        'Set torque setting if adjustable',
        'Position driver perpendicular to surface',
        'Apply steady pressure while driving',
        'Stop when fastener is flush'
      ],
      tips: [
        'Use impact-rated bits only',
        'Start with lower torque settings',
        'Keep driver perpendicular to work surface',
        'Use clutch setting for delicate materials'
      ]
    },
    {
      id: 'soldering-iron',
      name: 'Soldering Iron',
      icon: '🔥',
      image: '/images/1-1_Electronics.jpg',
      description: 'A tool used to join electrical components with solder',
      safety: [
        'Work in well-ventilated area',
        'Use safety glasses and heat-resistant gloves',
        'Never touch hot tip',
        'Use fume extractor if available',
        'Keep flammable materials away',
        'Unplug when not in use'
      ],
      steps: [
        'Clean and tin the soldering iron tip',
        'Clean surfaces to be soldered',
        'Apply flux if needed',
        'Heat both surfaces with iron',
        'Apply solder to joint (not iron)',
        'Allow joint to cool naturally'
      ],
      tips: [
        'Keep tip clean and tinned',
        'Use appropriate temperature setting',
        'Work quickly to avoid overheating components',
        'Practice on scrap materials first'
      ]
    },
    {
      id: 'random-orbital-sander',
      name: 'Random Orbital Sander',
      icon: '🌀',
      image: '/images/1-1_Robert_Seat_Wood.jpg',
      description: 'A power sander that combines orbital and rotary motion for smooth sanding',
      safety: [
        'Wear dust mask and safety glasses',
        'Secure workpiece firmly',
        'Use appropriate grit sandpaper',
        'Keep cord away from work area',
        'Unplug when changing sandpaper'
      ],
      steps: [
        'Select appropriate grit sandpaper',
        'Attach sandpaper securely',
        'Start with coarser grit and work finer',
        'Move sander in smooth, overlapping passes',
        'Apply light, even pressure',
        'Clean surface between grit changes'
      ],
      tips: [
        'Let the sander do the work - don\'t press hard',
        'Move sander slowly and methodically',
        'Use dust collection when possible',
        'Change sandpaper when it becomes clogged'
      ]
    },
    {
      id: 'pvc-cutter',
      name: 'PVC Pipe Cutter',
      icon: '✂️',
      image: '/images/1-1_Project_Robert_Frog_Fabric.jpg',
      description: 'A specialized tool for cutting PVC pipe cleanly and accurately',
      safety: [
        'Wear safety glasses',
        'Secure pipe firmly',
        'Keep hands away from cutting blade',
        'Use appropriate size cutter',
        'Inspect blade for damage'
      ],
      steps: [
        'Select correct cutter size for pipe diameter',
        'Mark cutting location clearly',
        'Open cutter jaws fully',
        'Position pipe in cutter',
        'Apply steady pressure to cut',
        'Remove burrs with deburring tool'
      ],
      tips: [
        'Use sharp blade for clean cuts',
        'Cut slightly longer than needed',
        'Clean pipe ends after cutting',
        'Store cutter with blade protected'
      ]
    }
  ];

  const currentTool = tools.find(tool => tool.id === activeTool);

  return (
    <div className="training-container">
      {/* Hero Section */}
      <div 
        className="training-hero"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/4-3_Work_on_Project.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">General 1 Training</h1>
        </div>
      </div>

      {/* Tool Navigation */}
      <section className="tool-navigation">
        <div className="container">
          <h2>Training Modules</h2>
          <div className="tool-tabs">
            {tools.map((tool) => (
              <button
                key={tool.id}
                className={`tool-tab ${activeTool === tool.id ? 'active' : ''}`}
                onClick={() => setActiveTool(tool.id)}
              >
                <span className="tool-icon">{tool.icon}</span>
                <span className="tool-name">{tool.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Training Content */}
      <section className="tool-training">
        <div className="container">
          <div className="tool-content">
            <div className="tool-header">
              <div className="tool-info">
                <h2>{currentTool.name}</h2>
                <p className="tool-description">{currentTool.description}</p>
              </div>
              <div className="tool-image">
                <img src={currentTool.image} alt={currentTool.name} />
              </div>
            </div>

            <div className="training-sections">
              {/* Safety Guidelines */}
              <div className="training-section">
                <h3>🛡️ Safety Guidelines</h3>
                <div className="safety-grid">
                  {currentTool.safety.map((item, index) => (
                    <div key={index} className="safety-item">
                      <span className="safety-icon">⚠️</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step-by-Step Instructions */}
              <div className="training-section">
                <h3>📋 Step-by-Step Instructions</h3>
                <div className="steps-list">
                  {currentTool.steps.map((step, index) => (
                    <div key={index} className="step-item">
                      <div className="step-number">{index + 1}</div>
                      <div className="step-content">{step}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pro Tips */}
              <div className="training-section">
                <h3>💡 Pro Tips</h3>
                <div className="tips-grid">
                  {currentTool.tips.map((tip, index) => (
                    <div key={index} className="tip-item">
                      <span className="tip-icon">💡</span>
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Resources */}
      <section className="training-resources">
        <div className="container">
          <h2>Additional Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <h3>📚 Training Manuals</h3>
              <p>Comprehensive guides for each tool with detailed instructions and troubleshooting.</p>
              <button className="resource-btn">Download Manuals</button>
            </div>
            <div className="resource-card">
              <h3>🎥 Video Tutorials</h3>
              <p>Step-by-step video demonstrations for each tool and technique.</p>
              <button className="resource-btn">Watch Videos</button>
            </div>
            <div className="resource-card">
              <h3>📝 Safety Checklists</h3>
              <p>Printable safety checklists for each tool to ensure proper procedures.</p>
              <button className="resource-btn">Download Checklists</button>
            </div>
            <div className="resource-card">
              <h3>❓ Q&A Forum</h3>
              <p>Ask questions and get answers from experienced volunteers and mentors.</p>
              <button className="resource-btn">Join Discussion</button>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="certification-section">
        <div className="container">
          <div className="certification-content">
            <h2>Complete Your Training</h2>
            <p>
              After reviewing all training modules, you can take the General 1 certification test. 
              This ensures you're ready to use these tools safely and effectively in A4A projects.
            </p>
            <div className="certification-actions">
              <button className="certification-btn primary">Take Certification Test</button>
              <button className="certification-btn secondary">Review All Modules</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <h2>Need Help?</h2>
          <p>
            Have questions about tool training or need additional guidance? 
            Contact our training coordinator or experienced volunteers.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <span>training@a4all.org</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <span>@rutgersa4a</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">👥</span>
              <span>Ask a Mentor</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training; 