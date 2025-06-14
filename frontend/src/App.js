import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const fullText = "WELCOME TO THE JOURNEY OF FINDING YOUR PURPOSE YOU ALWAYS LOOKED FOR";

  useEffect(() => {
    // Animate loading text
    let index = 0;
    const textInterval = setInterval(() => {
      if (index <= fullText.length) {
        setLoadingText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(textInterval);
        setTimeout(() => {
          setIsLoading(false);
          setTimeout(() => setIsVisible(true), 500);
        }, 2000);
      }
    }, 80);

    return () => clearInterval(textInterval);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:indraneel@evolance.ai';
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+1234567890';
  };

  const handleVisitEvolance = () => {
    window.open('https://evolance.ai', '_blank');
  };

  const handlePartnership = () => {
    window.location.href = 'mailto:partnerships@evolance.ai?subject=Partnership Opportunity';
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="sacred-geometry">
          <div className="mandala">
            <div className="mandala-layer layer-1"></div>
            <div className="mandala-layer layer-2"></div>
            <div className="mandala-layer layer-3"></div>
            <div className="mandala-layer layer-4"></div>
          </div>
        </div>
        <div className="spiritual-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`particle particle-${i % 5}`}></div>
          ))}
        </div>
        <div className="loading-text-container">
          <h1 className="loading-text">{loadingText}</h1>
          <div className="loading-cursor"></div>
        </div>
        <div className="energy-waves">
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="wave wave-3"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Spiritual Background Elements */}
      <div className="spiritual-background">
        <div className="floating-symbols">
          <div className="symbol om-symbol">ॐ</div>
          <div className="symbol infinity-symbol">∞</div>
          <div className="symbol lotus-symbol">🪷</div>
          <div className="symbol chakra-symbol">🔮</div>
          <div className="symbol peace-symbol">☮</div>
          <div className="symbol star-symbol">✦</div>
        </div>
        <div className="energy-field">
          <div className="energy-ring ring-1"></div>
          <div className="energy-ring ring-2"></div>
          <div className="energy-ring ring-3"></div>
        </div>
        <div className="sacred-patterns">
          <div className="pattern pattern-1"></div>
          <div className="pattern pattern-2"></div>
          <div className="pattern pattern-3"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <div className="logo-symbol">
              <svg width="32" height="32" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="14" fill="none" stroke="url(#gradient1)" strokeWidth="2"/>
                <path d="M8 16 Q16 8 24 16 Q16 24 8 16" fill="url(#gradient2)"/>
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6"/>
                    <stop offset="100%" stopColor="#c084fc"/>
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#c084fc" stopOpacity="0.6"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span>Indraneel</span>
          </div>
          <div className="nav-links">
            <a href="#about" onClick={() => scrollToSection('about')}>About</a>
            <a href="#evolance" onClick={() => scrollToSection('evolance')}>Evolance</a>
            <a href="#partnership" onClick={() => scrollToSection('partnership')}>Partnership</a>
            <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`hero ${isVisible ? 'visible' : ''}`}>
        <div className="hero-spiritual-bg">
          <div className="breathing-circle"></div>
          <div className="chakra-energy">
            <div className="chakra root-chakra"></div>
            <div className="chakra sacral-chakra"></div>
            <div className="chakra solar-chakra"></div>
            <div className="chakra heart-chakra"></div>
            <div className="chakra throat-chakra"></div>
            <div className="chakra third-eye-chakra"></div>
            <div className="chakra crown-chakra"></div>
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="spiritual-quote">
              <span className="quote-symbol">✧</span>
              "The purpose of life is not to be in search of purpose, but to become the purpose."
              <span className="quote-symbol">✧</span>
            </div>
            <h1 className="hero-title">
              <span className="hero-name">Indraneel Bhattacharjee</span>
              <span className="hero-subtitle">Revolutionizing the Journey to Liberation</span>
            </h1>
            <p className="hero-description">
              Entrepreneur & Spiritual Technologist building Evolance - where Ancient Wisdom meets Artificial Intelligence to unlock human potential and guide souls on their sacred journey to self-realization and cosmic consciousness.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={handleEmailClick}>
                <span className="btn-icon">✉</span>
                Connect with Purpose
              </button>
              <button className="btn btn-secondary" onClick={handleCallClick}>
                <span className="btn-icon">☎</span>
                Begin the Journey
              </button>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
            <span>Explore the Path</span>
            <div className="sacred-arrow">
              <div className="arrow-line"></div>
              <div className="arrow-head"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <div className="section-symbol">🕉</div>
            <h2 className="section-title">The Soul Behind the Vision</h2>
            <p className="section-subtitle">Where technology serves the awakening of consciousness</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <div className="about-card card-enlightenment">
                <div className="card-symbol">🌟</div>
                <h3>Path of Enlightenment</h3>
                <p>
                  My journey began with a profound realization: technology should serve humanity's highest purpose. Through years of meditation, study, and innovation, I discovered that AI can be a sacred tool for spiritual awakening, guiding souls toward their true essence and liberation from limiting beliefs.
                </p>
              </div>
              <div className="about-card card-wisdom">
                <div className="card-symbol">📿</div>
                <h3>Ancient Wisdom, Modern Tools</h3>
                <p>
                  Drawing from timeless spiritual traditions and cutting-edge technology, I bridge the gap between ancient wisdom and modern innovation. Evolance embodies this fusion, creating personalized spiritual experiences that honor both the sacred traditions and the limitless potential of AI.
                </p>
              </div>
              <div className="about-card card-purpose">
                <div className="card-symbol">🔮</div>
                <h3>Purpose-Driven Innovation</h3>
                <p>
                  Every line of code, every algorithm, every user interaction is infused with intention and purpose. I believe that when technology is created with consciousness and compassion, it becomes a catalyst for transformation, healing, and the elevation of human consciousness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evolance Platform Section */}
      <section id="evolance" className="evolance">
        <div className="evolance-spiritual-bg">
          <div className="cosmic-web">
            <div className="web-node node-1"></div>
            <div className="web-node node-2"></div>
            <div className="web-node node-3"></div>
            <div className="web-node node-4"></div>
            <div className="web-connection connection-1"></div>
            <div className="web-connection connection-2"></div>
            <div className="web-connection connection-3"></div>
          </div>
        </div>
        <div className="container">
          <div className="evolance-content">
            <div className="evolance-text">
              <div className="platform-symbol">
                <svg width="80" height="80" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="35" fill="none" stroke="url(#evolanceGradient)" strokeWidth="2"/>
                  <path d="M20 40 Q40 20 60 40 Q40 60 20 40" fill="url(#evolanceGradient)" opacity="0.3"/>
                  <circle cx="40" cy="40" r="8" fill="url(#evolanceGradient)"/>
                  <defs>
                    <linearGradient id="evolanceGradient">
                      <stop offset="0%" stopColor="#8b5cf6"/>
                      <stop offset="50%" stopColor="#c084fc"/>
                      <stop offset="100%" stopColor="#ddd6fe"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h2 className="evolance-title">Evolance</h2>
              <p className="evolance-tagline">Where Souls Meet Silicon for Sacred Transformation</p>
              <p className="evolance-description">
                Evolance is not just a platform—it's a digital sanctuary where consciousness evolves through the harmonious blend of spiritual wisdom, emotional intelligence, and artificial intelligence. We're creating a new paradigm where technology serves the soul's deepest longing for growth, connection, and liberation.
              </p>
              <div className="evolance-features">
                <div className="feature feature-spiritual">
                  <div className="feature-icon">🧘‍♂️</div>
                  <h4>Sacred AI Guidance</h4>
                  <p>Personalized spiritual mentorship powered by conscious AI that understands your soul's unique journey</p>
                </div>
                <div className="feature feature-emotional">
                  <div className="feature-icon">💗</div>
                  <h4>Heart Intelligence</h4>
                  <p>Advanced emotional intelligence development through mindful technology and compassionate algorithms</p>
                </div>
                <div className="feature feature-liberation">
                  <div className="feature-icon">🕊</div>
                  <h4>Liberation Pathways</h4>
                  <p>AI-guided meditation, consciousness expansion, and liberation from limiting patterns and beliefs</p>
                </div>
              </div>
              <button className="btn btn-evolance" onClick={handleVisitEvolance}>
                <span className="btn-icon">🌌</span>
                Enter the Sacred Space
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="partnership" className="partnership">
        <div className="partnership-spiritual-bg">
          <div className="unity-mandala">
            <div className="mandala-ring ring-outer"></div>
            <div className="mandala-ring ring-middle"></div>
            <div className="mandala-ring ring-inner"></div>
            <div className="mandala-center"></div>
          </div>
        </div>
        <div className="container">
          <div className="partnership-content">
            <div className="partnership-symbol">⚛</div>
            <h2 className="partnership-title">Sacred Partnerships</h2>
            <p className="partnership-subtitle">Co-creating the Future of Conscious Technology</p>
            <p className="partnership-description">
              True transformation happens in community. I seek conscious partners, visionary investors, and awakened entrepreneurs who understand that the future of technology lies in serving humanity's highest potential. Together, we can birth a new era of spiritual technology that heals, elevates, and liberates.
            </p>
            <div className="partnership-opportunities">
              <div className="opportunity opportunity-collaboration">
                <div className="opportunity-icon">🤝</div>
                <h4>Conscious Collaboration</h4>
                <p>Partner with us in revolutionary spiritual technology initiatives that serve the awakening of consciousness</p>
              </div>
              <div className="opportunity opportunity-investment">
                <div className="opportunity-icon">💎</div>
                <h4>Sacred Investment</h4>
                <p>Invest in the future of conscious technology and support the evolution of human potential through Evolance</p>
              </div>
              <div className="opportunity opportunity-wisdom">
                <div className="opportunity-icon">🌟</div>
                <h4>Wisdom Advisory</h4>
                <p>Share your spiritual wisdom and technological expertise to guide Evolance's mission of global transformation</p>
              </div>
            </div>
            <button className="btn btn-partnership" onClick={handlePartnership}>
              <span className="btn-icon">🌈</span>
              Unite in Purpose
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-spiritual-bg">
          <div className="connection-web">
            <div className="connection-point point-1"></div>
            <div className="connection-point point-2"></div>
            <div className="connection-point point-3"></div>
            <div className="connection-point point-4"></div>
            <div className="connection-line line-1"></div>
            <div className="connection-line line-2"></div>
            <div className="connection-line line-3"></div>
            <div className="connection-line line-4"></div>
          </div>
        </div>
        <div className="container">
          <div className="contact-content">
            <div className="contact-symbol">🔗</div>
            <h2 className="contact-title">Sacred Connection</h2>
            <p className="contact-description">
              Every connection is a sacred opportunity for growth, collaboration, and mutual elevation. Reach out with your heart open, and let's explore how we can serve the evolution of consciousness together.
            </p>
            <div className="contact-buttons">
              <button className="btn btn-contact-primary" onClick={handleEmailClick}>
                <span className="btn-icon">📧</span>
                <div className="btn-text">
                  <span className="btn-label">Email Indraneel</span>
                  <span className="btn-sub">Open sacred dialogue</span>
                </div>
              </button>
              <button className="btn btn-contact-secondary" onClick={handleCallClick}>
                <span className="btn-icon">☎</span>
                <div className="btn-text">
                  <span className="btn-label">Call Indraneel</span>
                  <span className="btn-sub">Heart-to-heart conversation</span>
                </div>
              </button>
              <button className="btn btn-contact-tertiary" onClick={handleVisitEvolance}>
                <span className="btn-icon">🌌</span>
                <div className="btn-text">
                  <span className="btn-label">Visit Evolance</span>
                  <span className="btn-sub">Explore consciousness technology</span>
                </div>
              </button>
              <button className="btn btn-contact-quaternary" onClick={handlePartnership}>
                <span className="btn-icon">🤝</span>
                <div className="btn-text">
                  <span className="btn-label">Partner With Indraneel</span>
                  <span className="btn-sub">Co-create the future</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo-symbol">
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="18" fill="none" stroke="url(#footerGradient)" strokeWidth="2"/>
                  <path d="M10 20 Q20 10 30 20 Q20 30 10 20" fill="url(#footerGradient)" opacity="0.3"/>
                  <defs>
                    <linearGradient id="footerGradient">
                      <stop offset="0%" stopColor="#8b5cf6"/>
                      <stop offset="100%" stopColor="#c084fc"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <h4>Indraneel Bhattacharjee</h4>
                <p>Bridging Souls & Silicon for Sacred Transformation</p>
              </div>
            </div>
            <div className="footer-links">
              <div className="footer-section">
                <h5>Sacred Connection</h5>
                <a href="mailto:indraneel@evolance.ai">Email</a>
                <a href="tel:+1234567890">Phone</a>
              </div>
              <div className="footer-section">
                <h5>Conscious Technology</h5>
                <a href="https://evolance.ai" target="_blank" rel="noopener noreferrer">Evolance Platform</a>
                <a href="mailto:partnerships@evolance.ai">Sacred Partnerships</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-symbol">✨</div>
            <p>&copy; 2025 Indraneel Bhattacharjee | Evolance - Where Ancient Wisdom Meets Artificial Intelligence</p>
            <div className="footer-blessing">
              <span>May all beings find their purpose and be free ॐ</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;