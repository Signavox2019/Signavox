import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.css';
import logo from '../assets/snignavox_icon.png';
import altLogo from '../assets/c1.png';

const Layout = ({ children }) => {
  const [brandExpanded, setBrandExpanded] = useState(false);
  const [useAltLogo, setUseAltLogo] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const isScrollingDown = currentY > lastScrollYRef.current;
      const crossedThreshold = currentY > 80; // start anim after slight scroll

      if (isScrollingDown && crossedThreshold) {
        setBrandExpanded(true);
        setUseAltLogo(true);
      } else if (!isScrollingDown) {
        setBrandExpanded(false);
        if (currentY <= 10) {
          setUseAltLogo(false);
        }
      }

      lastScrollYRef.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();

  return (
    <div className="layout">
      {/* Fixed Background Watermark */}
      <div
        className="bg-watermark"
        aria-hidden="true"
        style={{ backgroundImage: `url(${logo})` }}
      />

      {/* Fixed Header with Logo */}
      <header className={`header ${brandExpanded ? 'header-compact' : 'header-default'}`}>
        <div className="header-content">
          <div className={`logo-container brand ${brandExpanded ? 'brand-expanded' : ''}`}>
            <img
              src={useAltLogo ? altLogo : logo}
              alt="SignaVox Logo"
              className={`header-logo ${useAltLogo ? 'logo-compact' : 'logo-default'}`}
            />
            <span className="brand-name" aria-hidden={!brandExpanded}>SignaVox</span>
          </div>
          <nav className="navigation">
            <ul className="nav-links">
              <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
              <li><Link to="/about" className={`nav-link ${location.pathname === '/what we do' ? 'active' : ''}`}>What we do</Link></li>
              <li><Link to="/services" className={`nav-link ${location.pathname === '/what we think' ? 'active' : ''}`}>What we think</Link></li>
              <li><Link to="/ai" className={`nav-link ${location.pathname === '/Who we are' ? 'active' : ''}`}>Who we are</Link></li>
              {/* <li><Link to="/solutions" className={`nav-link ${location.pathname === '/solutions' ? 'active' : ''}`}>Solutions</Link></li> */}
              {/* <li><Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link></li> */}
            </ul>
          </nav>
          <div className="careers-button">
            <button className="careers-btn">
              <img src={logo} alt="Icon" className="btn-icon" />
              Careers
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
