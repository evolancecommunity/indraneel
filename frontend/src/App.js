import React, { useState, useEffect } from 'react';
import './App.css';

// Custom Spiritual SVG Components
const SpiritualOm = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={`spiritual-om ${className}`}>
    <defs>
      <linearGradient id="omGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6"/>
        <stop offset="50%" stopColor="#c084fc"/>
        <stop offset="100%" stopColor="#ddd6fe"/>
      </linearGradient>
      <filter id="omGlow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path d="M25 60 Q30 45 45 50 Q55 35 70 45 Q75 55 65 65 Q50 75 35 70 Q25 75 25 60 Z" 
          fill="url(#omGradient)" filter="url(#omGlow)"/>
    <circle cx="65" cy="30" r="8" fill="url(#omGradient)" filter="url(#omGlow)"/>
    <path d="M45 25 Q50 20 55 25 Q60 30 55 35 Q50 40 45 35 Q40 30 45 25" 
          fill="url(#omGradient)" filter="url(#omGlow)"/>
  </svg>
);

const IlluminatingOm = ({ size = 200, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" className={`illuminating-om ${className}`}>
    <defs>
      <radialGradient id="omIllumination" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="1"/>
        <stop offset="20%" stopColor="#ddd6fe" stopOpacity="0.9"/>
        <stop offset="40%" stopColor="#c084fc" stopOpacity="0.7"/>
        <stop offset="60%" stopColor="#8b5cf6" stopOpacity="0.5"/>
        <stop offset="80%" stopColor="#553c9a" stopOpacity="0.3"/>
        <stop offset="100%" stopColor="#2d1b69" stopOpacity="0.1"/>
      </radialGradient>
      <filter id="omMegaGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="omPulse" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur stdDeviation="15" result="glow"/>
        <feMerge>
          <feMergeNode in="glow"/>
          <feMergeNode in="glow"/>
          <feMergeNode in="glow"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Outer illumination rings */}
    <circle cx="100" cy="100" r="90" fill="none" stroke="url(#omIllumination)" strokeWidth="2" opacity="0.3" className="om-ring-outer"/>
    <circle cx="100" cy="100" r="70" fill="none" stroke="url(#omIllumination)" strokeWidth="1" opacity="0.5" className="om-ring-middle"/>
    <circle cx="100" cy="100" r="50" fill="none" stroke="url(#omIllumination)" strokeWidth="1" opacity="0.7" className="om-ring-inner"/>
    
    {/* Main OM symbol - scaled up */}
    <g transform="translate(50, 50) scale(2)">
      <path d="M25 60 Q30 45 45 50 Q55 35 70 45 Q75 55 65 65 Q50 75 35 70 Q25 75 25 60 Z" 
            fill="url(#omIllumination)" filter="url(#omPulse)" className="om-main-body"/>
      <circle cx="65" cy="30" r="8" fill="url(#omIllumination)" filter="url(#omPulse)" className="om-dot"/>
      <path d="M45 25 Q50 20 55 25 Q60 30 55 35 Q50 40 45 35 Q40 30 45 25" 
            fill="url(#omIllumination)" filter="url(#omPulse)" className="om-curve"/>
    </g>
    
    {/* Sacred geometry background */}
    <polygon points="100,40 120,80 80,80" fill="none" stroke="url(#omIllumination)" strokeWidth="1" opacity="0.3" className="sacred-triangle"/>
    <polygon points="100,160 120,120 80,120" fill="none" stroke="url(#omIllumination)" strokeWidth="1" opacity="0.3" className="sacred-triangle-inverted"/>
  </svg>
);

const SpiritualInfinity = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={`spiritual-infinity ${className}`}>
    <defs>
      <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6"/>
        <stop offset="100%" stopColor="#c084fc"/>
      </linearGradient>
    </defs>
    <path d="M20 50 C20 35, 35 35, 35 50 C35 65, 50 65, 50 50 C50 35, 65 35, 65 50 C65 65, 80 65, 80 50 C80 35, 65 35, 65 50 C65 65, 50 65, 50 50 C50 35, 35 35, 35 50 C35 65, 20 65, 20 50 Z" 
          fill="none" stroke="url(#infinityGradient)" strokeWidth="6" strokeLinecap="round"/>
  </svg>
);

const SpiritualLotus = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={`spiritual-lotus ${className}`}>
    <defs>
      <linearGradient id="lotusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c084fc"/>
        <stop offset="50%" stopColor="#ddd6fe"/>
        <stop offset="100%" stopColor="#8b5cf6"/>
      </linearGradient>
    </defs>
    <path d="M50 80 Q30 70 25 50 Q30 40 50 45 Q70 40 75 50 Q70 70 50 80" fill="url(#lotusGradient)" opacity="0.8"/>
    <path d="M50 75 Q35 65 30 50 Q35 45 50 50 Q65 45 70 50 Q65 65 50 75" fill="url(#lotusGradient)" opacity="0.9"/>
    <path d="M50 70 Q40 60 35 50 Q40 50 50 55 Q60 50 65 50 Q60 60 50 70" fill="url(#lotusGradient)"/>
    <circle cx="50" cy="50" r="5" fill="#ffffff" opacity="0.9"/>
  </svg>
);

const SpiritualCrystal = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={`spiritual-crystal ${className}`}>
    <defs>
      <linearGradient id="crystalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6"/>
        <stop offset="50%" stopColor="#c084fc"/>
        <stop offset="100%" stopColor="#ddd6fe"/>
      </linearGradient>
    </defs>
    <polygon points="50,20 70,40 60,80 40,80 30,40" fill="url(#crystalGradient)" opacity="0.8"/>
    <polygon points="50,20 60,35 50,60 40,35" fill="url(#crystalGradient)" opacity="0.9"/>
    <polygon points="50,20 55,30 50,50 45,30" fill="#ffffff" opacity="0.6"/>
  </svg>
);

const SpiritualPeace = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={`spiritual-peace ${className}`}>
    <defs>
      <linearGradient id="peaceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6"/>
        <stop offset="100%" stopColor="#c084fc"/>
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="30" fill="none" stroke="url(#peaceGradient)" strokeWidth="4"/>
    <line x1="50" y1="20" x2="50" y2="80" stroke="url(#peaceGradient)" strokeWidth="4"/>
    <line x1="50" y1="50" x2="35" y2="70" stroke="url(#peaceGradient)" strokeWidth="4"/>
    <line x1="50" y1="50" x2="65" y2="70" stroke="url(#peaceGradient)" strokeWidth="4"/>
  </svg>
);

const SpiritualStar = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={`spiritual-star ${className}`}>
    <defs>
      <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ddd6fe"/>
        <stop offset="50%" stopColor="#c084fc"/>
        <stop offset="100%" stopColor="#8b5cf6"/>
      </linearGradient>
    </defs>
    <polygon points="50,15 58,35 80,35 63,50 70,70 50,57 30,70 37,50 20,35 42,35" 
             fill="url(#starGradient)" opacity="0.9"/>
    <polygon points="50,25 55,38 65,38 57,46 60,58 50,52 40,58 43,46 35,38 45,38" 
             fill="#ffffff" opacity="0.7"/>
  </svg>
);

const SpiritualMeditation = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={`spiritual-meditation ${className}`}>
    <defs>
      <linearGradient id="meditationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6"/>
        <stop offset="100%" stopColor="#c084fc"/>
      </linearGradient>
    </defs>
    <circle cx="50" cy="35" r="15" fill="url(#meditationGradient)" opacity="0.8"/>
    <ellipse cx="50" cy="60" rx="20" ry="15" fill="url(#meditationGradient)" opacity="0.6"/>
    <path d="M35 55 Q45 50 55 55" stroke="url(#meditationGradient)" strokeWidth="3" fill="none"/>
    <path d="M30 65 Q50 70 70 65" stroke="url(#meditationGradient)" strokeWidth="3" fill="none"/>
    <circle cx="50" cy="15" r="3" fill="#ffffff" opacity="0.9"/>
  </svg>
);

const SpiritualHeart = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={`spiritual-heart ${className}`}>
    <defs>
      <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff6b6b"/>
        <stop offset="50%" stopColor="#c084fc"/>
        <stop offset="100%" stopColor="#8b5cf6"/>
      </linearGradient>
    </defs>
    <path d="M50 80 C50 80 20 55 20 35 C20 25 30 20 40 25 C45 20 50 20 50 25 C50 20 55 20 60 25 C70 20 80 25 80 35 C80 55 50 80 50 80 Z" 
          fill="url(#heartGradient)" opacity="0.8"/>
    <circle cx="50" cy="40" r="8" fill="#ffffff" opacity="0.6"/>
  </svg>
);

const SpiritualDove = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={`spiritual-dove ${className}`}>
    <defs>
      <linearGradient id="doveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff"/>
        <stop offset="50%" stopColor="#ddd6fe"/>
        <stop offset="100%" stopColor="#c084fc"/>
      </linearGradient>
    </defs>
    <ellipse cx="35" cy="50" rx="15" ry="8" fill="url(#doveGradient)" opacity="0.9"/>
    <path d="M20 45 Q10 40 15 35 Q25 38 35 42" fill="url(#doveGradient)" opacity="0.8"/>
    <path d="M50 45 Q70 35 80 40 Q75 50 55 55" fill="url(#doveGradient)" opacity="0.8"/>
    <circle cx="30" cy="48" r="2" fill="#8b5cf6"/>
    <path d="M40 55 Q45 60 50 55" stroke="url(#doveGradient)" strokeWidth="2" fill="none"/>
  </svg>
);

const SpiritualGalaxy = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={`spiritual-galaxy ${className}`}>
    <defs>
      <radialGradient id="galaxyGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ffffff"/>
        <stop offset="30%" stopColor="#ddd6fe"/>
        <stop offset="60%" stopColor="#c084fc"/>
        <stop offset="100%" stopColor="#8b5cf6"/>
      </radialGradient>
    </defs>
    <circle cx="50" cy="50" r="35" fill="url(#galaxyGradient)" opacity="0.6"/>
    <ellipse cx="50" cy="50" rx="30" ry="15" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.8"/>
    <ellipse cx="50" cy="50" rx="20" ry="10" fill="none" stroke="#ddd6fe" strokeWidth="1" opacity="0.6"/>
    <circle cx="50" cy="50" r="3" fill="#ffffff"/>
    <circle cx="40" cy="45" r="1" fill="#ffffff" opacity="0.8"/>
    <circle cx="60" cy="55" r="1" fill="#ffffff" opacity="0.8"/>
    <circle cx="45" cy="60" r="1" fill="#ffffff" opacity="0.8"/>
  </svg>
);

const SpiritualHandshake = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={`spiritual-handshake ${className}`}>
    <defs>
      <linearGradient id="handshakeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6"/>
        <stop offset="100%" stopColor="#c084fc"/>
      </linearGradient>
    </defs>
    <path d="M20 60 Q30 50 40 55 L45 50 L55 50 L60 55 Q70 50 80 60 L75 70 Q65 75 55 70 L45 70 Q35 75 25 70 Z" 
          fill="url(#handshakeGradient)" opacity="0.8"/>
    <circle cx="35" cy="58" r="3" fill="#ffffff" opacity="0.7"/>
    <circle cx="65" cy="58" r="3" fill="#ffffff" opacity="0.7"/>
    <path d="M45 45 Q50 40 55 45" stroke="url(#handshakeGradient)" strokeWidth="2" fill="none"/>
  </svg>
);

const SpiritualDiamond = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={`spiritual-diamond ${className}`}>
    <defs>
      <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff"/>
        <stop offset="30%" stopColor="#ddd6fe"/>
        <stop offset="70%" stopColor="#c084fc"/>
        <stop offset="100%" stopColor="#8b5cf6"/>
      </linearGradient>
    </defs>
    <polygon points="50,15 65,35 60,75 40,75 35,35" fill="url(#diamondGradient)" opacity="0.9"/>
    <polygon points="50,15 60,25 55,50 45,50 40,25" fill="#ffffff" opacity="0.7"/>
    <polygon points="50,15 55,20 50,35 45,20" fill="#ffffff" opacity="0.9"/>
    <line x1="35" y1="35" x2="65" y2="35" stroke="#ffffff" strokeWidth="1" opacity="0.6"/>
  </svg>
);

const SpiritualRainbow = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={`spiritual-rainbow ${className}`}>
    <defs>
      <linearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ff6b6b"/>
        <stop offset="16%" stopColor="#feca57"/>
        <stop offset="32%" stopColor="#48dbfb"/>
        <stop offset="48%" stopColor="#0abde3"/>
        <stop offset="64%" stopColor="#1dd1a1"/>
        <stop offset="80%" stopColor="#c084fc"/>
        <stop offset="100%" stopColor="#8b5cf6"/>
      </linearGradient>
    </defs>
    <path d="M20 70 Q50 30 80 70" fill="none" stroke="url(#rainbowGradient)" strokeWidth="6" strokeLinecap="round"/>
    <path d="M25 65 Q50 35 75 65" fill="none" stroke="url(#rainbowGradient)" strokeWidth="4" strokeLinecap="round" opacity="0.7"/>
    <path d="M30 60 Q50 40 70 60" fill="none" stroke="url(#rainbowGradient)" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

const SpiritualConnection = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={`spiritual-connection ${className}`}>
    <defs>
      <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6"/>
        <stop offset="100%" stopColor="#c084fc"/>
      </linearGradient>
    </defs>
    <circle cx="25" cy="35" r="12" fill="none" stroke="url(#connectionGradient)" strokeWidth="3"/>
    <circle cx="75" cy="65" r="12" fill="none" stroke="url(#connectionGradient)" strokeWidth="3"/>
    <path d="M35 40 Q50 45 65 60" stroke="url(#connectionGradient)" strokeWidth="3" fill="none"/>
    <circle cx="25" cy="35" r="4" fill="url(#connectionGradient)"/>
    <circle cx="75" cy="65" r="4" fill="url(#connectionGradient)"/>
    <circle cx="50" cy="50" r="2" fill="#ffffff"/>
  </svg>
);

const SpiritualEmail = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={`spiritual-email ${className}`}>
    <defs>
      <linearGradient id="emailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6"/>
        <stop offset="100%" stopColor="#c084fc"/>
      </linearGradient>
    </defs>
    <rect x="15" y="30" width="70" height="40" rx="5" fill="none" stroke="url(#emailGradient)" strokeWidth="3"/>
    <path d="M15 35 L50 55 L85 35" stroke="url(#emailGradient)" strokeWidth="2" fill="none"/>
    <circle cx="50" cy="45" r="3" fill="#ffffff" opacity="0.8"/>
    <path d="M25 25 Q30 20 35 25" stroke="url(#emailGradient)" strokeWidth="2" fill="none" opacity="0.6"/>
    <path d="M65 25 Q70 20 75 25" stroke="url(#emailGradient)" strokeWidth="2" fill="none" opacity="0.6"/>
  </svg>
);

const SpiritualPhone = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={`spiritual-phone ${className}`}>
    <defs>
      <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6"/>
        <stop offset="100%" stopColor="#c084fc"/>
      </linearGradient>
    </defs>
    <rect x="35" y="20" width="30" height="60" rx="8" fill="none" stroke="url(#phoneGradient)" strokeWidth="3"/>
    <rect x="38" y="28" width="24" height="36" rx="2" fill="url(#phoneGradient)" opacity="0.3"/>
    <circle cx="50" cy="72" r="4" fill="url(#phoneGradient)"/>
    <line x1="42" y1="25" x2="58" y2="25" stroke="url(#phoneGradient)" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="50" cy="35" r="2" fill="#ffffff" opacity="0.8"/>
  </svg>
);

const SpiritualSparkles = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={`spiritual-sparkles ${className}`}>
    <defs>
      <linearGradient id="sparklesGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff"/>
        <stop offset="50%" stopColor="#ddd6fe"/>
        <stop offset="100%" stopColor="#c084fc"/>
      </linearGradient>
    </defs>
    <path d="M30 30 L32 25 L34 30 L39 32 L34 34 L32 39 L30 34 L25 32 Z" fill="url(#sparklesGradient)"/>
    <path d="M60 20 L62 15 L64 20 L69 22 L64 24 L62 29 L60 24 L55 22 Z" fill="url(#sparklesGradient)" opacity="0.8"/>
    <path d="M70 60 L72 55 L74 60 L79 62 L74 64 L72 69 L70 64 L65 62 Z" fill="url(#sparklesGradient)" opacity="0.9"/>
    <path d="M25 70 L27 65 L29 70 L34 72 L29 74 L27 79 L25 74 L20 72 Z" fill="url(#sparklesGradient)" opacity="0.7"/>
    <circle cx="50" cy="50" r="2" fill="#ffffff"/>
  </svg>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('');
  const [showOmAnimation, setShowOmAnimation] = useState(false);
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
        // Show OM animation after text finishes
        setTimeout(() => {
          setShowOmAnimation(true);
        }, 1000);
        // Then finish loading
        setTimeout(() => {
          setIsLoading(false);
          setTimeout(() => setIsVisible(true), 500);
        }, 4000);
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
        
        {/* Illuminating OM Animation */}
        {showOmAnimation && (
          <div className="om-illumination-container">
            <IlluminatingOm size={300} className="mega-om" />
            <div className="om-illumination-text">ॐ</div>
          </div>
        )}
        
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
          <div className="symbol om-symbol"><SpiritualOm size={48} /></div>
          <div className="symbol infinity-symbol"><SpiritualInfinity size={56} /></div>
          <div className="symbol lotus-symbol"><SpiritualLotus size={48} /></div>
          <div className="symbol chakra-symbol"><SpiritualCrystal size={48} /></div>
          <div className="symbol peace-symbol"><SpiritualPeace size={48} /></div>
          <div className="symbol star-symbol"><SpiritualStar size={48} /></div>
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
              <SpiritualInfinity size={32} className="rotating" />
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
              <SpiritualStar size={24} className="quote-symbol" />
              "The purpose of life is not to be in search of purpose, but to become the purpose."
              <SpiritualStar size={24} className="quote-symbol" />
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
                <SpiritualEmail size={24} />
                Connect with Purpose
              </button>
              <button className="btn btn-secondary" onClick={handleCallClick}>
                <SpiritualPhone size={24} />
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
            <div className="section-symbol"><SpiritualOm size={64} /></div>
            <h2 className="section-title">The Soul Behind the Vision</h2>
            <p className="section-subtitle">Where technology serves the awakening of consciousness</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <div className="about-card card-enlightenment">
                <div className="card-symbol"><SpiritualStar size={56} /></div>
                <h3>Path of Enlightenment</h3>
                <p>
                  My journey began with a profound realization: technology should serve humanity's highest purpose. Through years of meditation, study, and innovation, I discovered that AI can be a sacred tool for spiritual awakening, guiding souls toward their true essence and liberation from limiting beliefs.
                </p>
              </div>
              <div className="about-card card-wisdom">
                <div className="card-symbol"><SpiritualLotus size={56} /></div>
                <h3>Ancient Wisdom, Modern Tools</h3>
                <p>
                  Drawing from timeless spiritual traditions and cutting-edge technology, I bridge the gap between ancient wisdom and modern innovation. Evolance embodies this fusion, creating personalized spiritual experiences that honor both the sacred traditions and the limitless potential of AI.
                </p>
              </div>
              <div className="about-card card-purpose">
                <div className="card-symbol"><SpiritualCrystal size={56} /></div>
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
          <div className="section-header">
            <div className="section-symbol"><SpiritualGalaxy size={64} /></div>
            <h2 className="section-title">Evolance</h2>
            <p className="section-subtitle">Where Souls Meet Silicon for Sacred Transformation</p>
          </div>
          <div className="evolance-content">
            <div className="evolance-text">
              <div className="platform-symbol">
                <SpiritualInfinity size={80} className="rotating" />
              </div>
              <p className="evolance-description">
                Evolance is not just a platform—it's a digital sanctuary where consciousness evolves through the harmonious blend of spiritual wisdom, emotional intelligence, and artificial intelligence. We're creating a new paradigm where technology serves the soul's deepest longing for growth, connection, and liberation.
              </p>
              <div className="evolance-features">
                <div className="feature feature-spiritual">
                  <div className="feature-icon"><SpiritualMeditation size={56} /></div>
                  <h4>Sacred AI Guidance</h4>
                  <p>Personalized spiritual mentorship powered by conscious AI that understands your soul's unique journey</p>
                </div>
                <div className="feature feature-emotional">
                  <div className="feature-icon"><SpiritualHeart size={56} /></div>
                  <h4>Heart Intelligence</h4>
                  <p>Advanced emotional intelligence development through mindful technology and compassionate algorithms</p>
                </div>
                <div className="feature feature-liberation">
                  <div className="feature-icon"><SpiritualDove size={56} /></div>
                  <h4>Liberation Pathways</h4>
                  <p>AI-guided meditation, consciousness expansion, and liberation from limiting patterns and beliefs</p>
                </div>
              </div>
              <button className="btn btn-evolance" onClick={handleVisitEvolance}>
                <SpiritualGalaxy size={24} />
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
            <div className="partnership-symbol"><SpiritualPeace size={64} /></div>
            <h2 className="partnership-title">Sacred Partnerships</h2>
            <p className="partnership-subtitle">Co-creating the Future of Conscious Technology</p>
            <p className="partnership-description">
              True transformation happens in community. I seek conscious partners, visionary investors, and awakened entrepreneurs who understand that the future of technology lies in serving humanity's highest potential. Together, we can birth a new era of spiritual technology that heals, elevates, and liberates.
            </p>
            <div className="partnership-opportunities">
              <div className="opportunity opportunity-collaboration">
                <div className="opportunity-icon"><SpiritualHandshake size={56} /></div>
                <h4>Conscious Collaboration</h4>
                <p>Partner with us in revolutionary spiritual technology initiatives that serve the awakening of consciousness</p>
              </div>
              <div className="opportunity opportunity-investment">
                <div className="opportunity-icon"><SpiritualDiamond size={56} /></div>
                <h4>Sacred Investment</h4>
                <p>Invest in the future of conscious technology and support the evolution of human potential through Evolance</p>
              </div>
              <div className="opportunity opportunity-wisdom">
                <div className="opportunity-icon"><SpiritualStar size={56} /></div>
                <h4>Wisdom Advisory</h4>
                <p>Share your spiritual wisdom and technological expertise to guide Evolance's mission of global transformation</p>
              </div>
            </div>
            <button className="btn btn-partnership" onClick={handlePartnership}>
              <SpiritualRainbow size={24} />
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
            <div className="contact-symbol"><SpiritualConnection size={64} /></div>
            <h2 className="contact-title">Sacred Connection</h2>
            <p className="contact-description">
              Every connection is a sacred opportunity for growth, collaboration, and mutual elevation. Reach out with your heart open, and let's explore how we can serve the evolution of consciousness together.
            </p>
            <div className="contact-buttons">
              <button className="btn btn-contact-primary" onClick={handleEmailClick}>
                <SpiritualEmail size={32} />
                <div className="btn-text">
                  <span className="btn-label">Email Indraneel</span>
                  <span className="btn-sub">Open sacred dialogue</span>
                </div>
              </button>
              <button className="btn btn-contact-secondary" onClick={handleCallClick}>
                <SpiritualPhone size={32} />
                <div className="btn-text">
                  <span className="btn-label">Call Indraneel</span>
                  <span className="btn-sub">Heart-to-heart conversation</span>
                </div>
              </button>
              <button className="btn btn-contact-tertiary" onClick={handleVisitEvolance}>
                <SpiritualGalaxy size={32} />
                <div className="btn-text">
                  <span className="btn-label">Visit Evolance</span>
                  <span className="btn-sub">Explore consciousness technology</span>
                </div>
              </button>
              <button className="btn btn-contact-quaternary" onClick={handlePartnership}>
                <SpiritualHandshake size={32} />
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
                <SpiritualInfinity size={40} className="rotating" />
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
            <div className="footer-symbol"><SpiritualSparkles size={32} /></div>
            <p>&copy; 2025 Indraneel Bhattacharjee | Evolance - Where Ancient Wisdom Meets Artificial Intelligence</p>
            <div className="footer-blessing">
              <span>May all beings find their purpose and be free </span>
              <SpiritualOm size={20} className="inline" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;