import React, { useEffect, useRef } from 'react';
import '../../styles/Donate.css';

export default function Donate() {
  const iframeRef = useRef(null);

  useEffect(() => {
    // Prevent iframe from affecting parent navigation
    const handleMessage = (event) => {
      // Only accept messages from Zeffy domain
      if (event.origin !== 'https://www.zeffy.com') {
        return;
      }
      
      // Block navigation messages from iframe
      if (event.data && typeof event.data === 'string') {
        if (event.data.includes('navigate') || event.data.includes('redirect')) {
          event.preventDefault();
          return false;
        }
      }
    };

    // Add message listener
    window.addEventListener('message', handleMessage, true);

    // Prevent accidental navigation on mobile
    const preventUnwantedNavigation = (event) => {
      // Only prevent if the event originates from within the iframe
      if (event.target && event.target.tagName === 'IFRAME') {
        // Allow normal iframe interactions but prevent parent navigation
        if (event.type === 'click' && event.target === iframeRef.current) {
          // Let the click pass through to iframe
          return;
        }
      }
    };

    document.addEventListener('click', preventUnwantedNavigation, true);

    return () => {
      window.removeEventListener('message', handleMessage, true);
      document.removeEventListener('click', preventUnwantedNavigation, true);
    };
  }, []);
  return (
    <div className="donate-container">
      {/* Hero Section */}
      <div
        className="donate-hero"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_Zora_and_Dad.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Make a Difference Today</h1>
        </div>
      </div>

      {/* Donation Content Section */}
      <section className="donation-content-section">
        <div className="donation-layout">
          {/* Left Side - Text and Image */}
          <div className="donation-left">
            <div className="donation-image">
              <img src="/images/1-1_Maya_Hugging_Fiona_Mom.JPG" alt="A4A making a difference" />
            </div>
            <h2 className="donation-thank-you">Thank you!</h2>
            <div className="donation-text-box">
              <p>
                With your support, Accessible 4 All is dedicated to spending every penny towards providing more tools and resources to our students, allowing them to learn how to create 
                adaptive devices for children with physical and developmental disabilities. 
              </p>
            </div>
          </div>
          
          {/* Right Side - Zeffy Form */}
          <div className="donation-right">
            {/* Mobile Disclaimer and Alternative Button */}
            <div className="mobile-disclaimer">
              <div className="disclaimer-content">
                <h3>For Best Experience</h3>
                <p>Our donation form works best on desktop or laptop computers, or through a separate tab. If you're experiencing issues on mobile, please click the button below for a smoother donation process.</p>
                <button 
                  className="alternative-donate-btn"
                  onClick={() => window.open('https://www.zeffy.com/en-ca/donation-form/donate-to-a4a', '_blank', 'noopener,noreferrer')}
                  aria-label="Open donation form in new tab"
                >
                  Open Donation Form in New Tab
                </button>
              </div>
            </div>
            
            <div className="zeffy-form-container">
              <iframe 
                ref={iframeRef}
                title="Donation form powered by Zeffy"
                src="https://www.zeffy.com/en-ca/donation-form/donate-to-a4a"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen={false}
                sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                loading="lazy"
                style={{
                  border: 'none',
                  borderRadius: '12px',
                  backgroundColor: 'transparent',
                  isolation: 'isolate',
                  position: 'relative',
                  zIndex: 1
                }}
                onLoad={(e) => {
                  console.log('Zeffy donation form loaded successfully');
                }}
                onError={(e) => {
                  console.log('Iframe failed to load:', e);
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 