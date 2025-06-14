import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 40'%3E%3Cpath d='M20 5c-8.3 0-15 6.7-15 15s6.7 15 15 15c3.5 0 6.8-1.2 9.4-3.2C31.8 28.8 35 25 35 20s-3.2-8.8-5.6-11.8C26.8 6.2 23.5 5 20 5zm15 15c0 5-3.2 8.8-5.6 11.8C31.8 28.8 35 25 35 20s-3.2-8.8-5.6-11.8C31.8 11.2 35 15 35 20z' fill='%238B5CF6'/%3E%3C/svg%3E" alt="Evolance" />
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
        <div className="hero-bg">
          <img src="https://images.pexels.com/photos/7818237/pexels-photo-7818237.jpeg" alt="Professional workspace" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-name">Indraneel Bhattacharjee</span>
              <span className="hero-subtitle">Revolutionizing the Journey to Liberation</span>
            </h1>
            <p className="hero-description">
              Entrepreneur & Visionary building Evolance - where Spirituality meets Artificial Intelligence to empower human potential and transform lives through the fusion of emotional intelligence and cutting-edge technology.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={handleEmailClick}>
                <span className="btn-icon">✉</span>
                Email Me
              </button>
              <button className="btn btn-secondary" onClick={handleCallClick}>
                <span className="btn-icon">📞</span>
                Call Me
              </button>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
            <span>Scroll to explore</span>
            <div className="scroll-arrow">↓</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">The Visionary Behind the Mission</h2>
            <p className="section-subtitle">Bridging ancient wisdom with modern innovation</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <div className="about-card">
                <h3>Entrepreneurial Journey</h3>
                <p>
                  As a pioneering entrepreneur, I'm dedicated to creating transformative experiences that blend the profound wisdom of spirituality with the limitless potential of artificial intelligence. My mission is to democratize access to spiritual growth and emotional intelligence through innovative technology.
                </p>
              </div>
              <div className="about-card">
                <h3>Vision for Liberation</h3>
                <p>
                  Liberation isn't just a destination—it's a journey of continuous growth, self-discovery, and awakening. Through Evolance, I'm building a platform that guides individuals on this sacred path, using AI to provide personalized spiritual insights and emotional intelligence development.
                </p>
              </div>
              <div className="about-card">
                <h3>Innovation Philosophy</h3>
                <p>
                  I believe that technology should serve humanity's highest potential. By integrating spiritual principles with advanced AI, we can create tools that not only solve problems but elevate consciousness and foster genuine human connection and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evolance Platform Section */}
      <section id="evolance" className="evolance">
        <div className="evolance-bg">
          <img src="https://images.pexels.com/photos/8728386/pexels-photo-8728386.jpeg" alt="Spiritual Technology" />
          <div className="evolance-overlay"></div>
        </div>
        <div className="container">
          <div className="evolance-content">
            <div className="evolance-text">
              <h2 className="evolance-title">Evolance</h2>
              <p className="evolance-tagline">Spiritual Tech Platform Empowering Liberation</p>
              <p className="evolance-description">
                Evolance represents the convergence of three powerful forces: Spirituality, Emotional Intelligence, and Artificial Intelligence. Our platform creates personalized spiritual journeys, provides AI-powered insights for emotional growth, and fosters a community of conscious individuals seeking liberation.
              </p>
              <div className="evolance-features">
                <div className="feature">
                  <div className="feature-icon">🧘</div>
                  <h4>Spiritual Guidance</h4>
                  <p>AI-powered spiritual mentorship tailored to your unique path</p>
                </div>
                <div className="feature">
                  <div className="feature-icon">🧠</div>
                  <h4>Emotional Intelligence</h4>
                  <p>Advanced EQ development through personalized learning experiences</p>
                </div>
                <div className="feature">
                  <div className="feature-icon">🤖</div>
                  <h4>AI Integration</h4>
                  <p>Cutting-edge technology serving human consciousness evolution</p>
                </div>
              </div>
              <button className="btn btn-evolance" onClick={handleVisitEvolance}>
                <span className="btn-icon">🌐</span>
                Visit Evolance Platform
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="partnership" className="partnership">
        <div className="partnership-bg">
          <img src="https://images.pexels.com/photos/6492146/pexels-photo-6492146.jpeg" alt="Partnership collaboration" />
          <div className="partnership-overlay"></div>
        </div>
        <div className="container">
          <div className="partnership-content">
            <h2 className="partnership-title">Partner With Indraneel</h2>
            <p className="partnership-subtitle">Join the Revolution of Consciousness</p>
            <p className="partnership-description">
              I'm always seeking visionary partners, conscious investors, and fellow entrepreneurs who share the mission of elevating human potential through the marriage of spirituality and technology. Together, we can create a more conscious, connected world.
            </p>
            <div className="partnership-opportunities">
              <div className="opportunity">
                <h4>🤝 Strategic Partnerships</h4>
                <p>Collaborate on revolutionary spiritual tech initiatives</p>
              </div>
              <div className="opportunity">
                <h4>💡 Investment Opportunities</h4>
                <p>Join us in funding the future of conscious technology</p>
              </div>
              <div className="opportunity">
                <h4>🌟 Advisory Roles</h4>
                <p>Share your expertise in shaping Evolance's evolution</p>
              </div>
            </div>
            <button className="btn btn-partnership" onClick={handlePartnership}>
              <span className="btn-icon">🤝</span>
              Explore Partnership
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-bg">
          <img src="https://images.pexels.com/photos/15267051/pexels-photo-15267051.jpeg" alt="Meditation mindfulness" />
          <div className="contact-overlay"></div>
        </div>
        <div className="container">
          <div className="contact-content">
            <h2 className="contact-title">Connect & Collaborate</h2>
            <p className="contact-description">
              Ready to explore the infinite possibilities of spiritual technology? Let's start a conversation that could transform the future of human consciousness.
            </p>
            <div className="contact-buttons">
              <button className="btn btn-contact-primary" onClick={handleEmailClick}>
                <span className="btn-icon">✉</span>
                <div className="btn-text">
                  <span className="btn-label">Email Indraneel</span>
                  <span className="btn-sub">indraneel@evolance.ai</span>
                </div>
              </button>
              <button className="btn btn-contact-secondary" onClick={handleCallClick}>
                <span className="btn-icon">📞</span>
                <div className="btn-text">
                  <span className="btn-label">Call Indraneel</span>
                  <span className="btn-sub">Schedule a conversation</span>
                </div>
              </button>
              <button className="btn btn-contact-tertiary" onClick={handleVisitEvolance}>
                <span className="btn-icon">🌐</span>
                <div className="btn-text">
                  <span className="btn-label">Visit Evolance</span>
                  <span className="btn-sub">Explore the platform</span>
                </div>
              </button>
              <button className="btn btn-contact-quaternary" onClick={handlePartnership}>
                <span className="btn-icon">🤝</span>
                <div className="btn-text">
                  <span className="btn-label">Partner With Indraneel</span>
                  <span className="btn-sub">Join the mission</span>
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
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 40'%3E%3Cpath d='M20 5c-8.3 0-15 6.7-15 15s6.7 15 15 15c3.5 0 6.8-1.2 9.4-3.2C31.8 28.8 35 25 35 20s-3.2-8.8-5.6-11.8C26.8 6.2 23.5 5 20 5zm15 15c0 5-3.2 8.8-5.6 11.8C31.8 28.8 35 25 35 20s-3.2-8.8-5.6-11.8C31.8 11.2 35 15 35 20z' fill='%238B5CF6'/%3E%3C/svg%3E" alt="Evolance" />
              <div>
                <h4>Indraneel Bhattacharjee</h4>
                <p>Revolutionizing the Journey to Liberation</p>
              </div>
            </div>
            <div className="footer-links">
              <div className="footer-section">
                <h5>Connect</h5>
                <a href="mailto:indraneel@evolance.ai">Email</a>
                <a href="tel:+1234567890">Phone</a>
              </div>
              <div className="footer-section">
                <h5>Explore</h5>
                <a href="https://evolance.ai" target="_blank" rel="noopener noreferrer">Evolance Platform</a>
                <a href="mailto:partnerships@evolance.ai">Partnerships</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Indraneel Bhattacharjee. All rights reserved. | Evolance - Empowering Liberation through Spiritual Technology</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;