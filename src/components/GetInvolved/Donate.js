import React, { useEffect, useRef } from 'react';
import '../../styles/Donate.css';

export default function Donate() {
  const iframeRef = useRef(null);

  useEffect(() => {
    // Completely prevent any navigation from iframe
    const preventNavigation = (event) => {
      // Block all navigation attempts from iframe
      if (event.target === iframeRef.current || 
          event.target.closest('iframe') === iframeRef.current) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      }
    };

    // Block all possible navigation events
    const events = ['beforeunload', 'unload', 'popstate', 'pushstate', 'replacestate'];
    events.forEach(eventType => {
      window.addEventListener(eventType, preventNavigation, true);
    });

    // Override history methods
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;
    
    window.history.pushState = function() {
      // Only allow if not triggered by iframe
      if (!document.activeElement || document.activeElement.tagName !== 'IFRAME') {
        return originalPushState.apply(this, arguments);
      }
    };
    
    window.history.replaceState = function() {
      // Only allow if not triggered by iframe
      if (!document.activeElement || document.activeElement.tagName !== 'IFRAME') {
        return originalReplaceState.apply(this, arguments);
      }
    };

    return () => {
      // Cleanup event listeners
      events.forEach(eventType => {
        window.removeEventListener(eventType, preventNavigation, true);
      });
      
      // Restore original history methods
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
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
            {/* Mobile Disclaimer */}
            <div className="mobile-disclaimer">
              <div className="disclaimer-content">
                <div className="disclaimer-icon">💻</div>
                <h3>For Best Experience</h3>
                <p>Our donation form works best on desktop or laptop computers. If you're experiencing issues on mobile, please consider using a computer for a smoother donation process.</p>
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
                sandbox="allow-scripts allow-forms allow-same-origin"
                loading="lazy"
                style={{
                  border: 'none',
                  borderRadius: '12px',
                  backgroundColor: 'transparent',
                  isolation: 'isolate'
                }}
                onLoad={(e) => {
                  // Completely isolate iframe navigation
                  try {
                    const iframe = e.target;
                    if (iframe.contentWindow) {
                      // Override all navigation methods
                      iframe.contentWindow.history.pushState = function() {};
                      iframe.contentWindow.history.replaceState = function() {};
                      iframe.contentWindow.location.replace = function() {};
                      iframe.contentWindow.location.assign = function() {};
                      iframe.contentWindow.location.reload = function() {};
                      
                      // Block window.location changes
                      Object.defineProperty(iframe.contentWindow, 'location', {
                        set: function() {},
                        get: function() { return iframe.contentWindow.location; },
                        configurable: false
                      });
                      
                      // Block window.open
                      iframe.contentWindow.open = function() { return null; };
                      
                      // Block window.close
                      iframe.contentWindow.close = function() {};
                    }
                  } catch (error) {
                    // Cross-origin restrictions apply - this is expected and good
                    console.log('Iframe security restrictions in place');
                  }
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