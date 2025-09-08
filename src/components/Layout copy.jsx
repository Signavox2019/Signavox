import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.css';
import logo from '../assets/snignavox_icon.png';
import altLogo from '../assets/company name.png';

const Layout = ({ children }) => {
  const [brandExpanded, setBrandExpanded] = useState(false);
  const [useAltLogo, setUseAltLogo] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const isScrollingDown = currentY > lastScrollYRef.current;
      
      // More reliable scroll threshold based on viewport height
      const scrollThreshold = Math.min(window.innerHeight * 0.6, 400); // Max 400px threshold
      
      if (currentY > scrollThreshold) {
        setIsScrolled(true);
        setUseAltLogo(true);
        setBrandExpanded(true);
      } else {
        setIsScrolled(false);
        setUseAltLogo(false);
        setBrandExpanded(false);
      }

      lastScrollYRef.current = currentY;
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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
      <header className={`header ${isScrolled ? 'header-scrolled' : 'header-default'}`}>
        <div className="header-content">
          <div className={`logo-container brand ${isScrolled ? 'brand-scrolled' : ''}`}>
            <img
              src={useAltLogo ? altLogo : logo}
              alt="SignaVox Logo"
              className={`header-logo ${useAltLogo ? 'logo-scrolled' : 'logo-default'}`}
            />
          </div>
          <nav className="navigation">
            <ul className="nav-links">
              <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
              <li className="nav-item-dropdown">
                <span className={`nav-link ${location.pathname === '/what-we-do' ? 'active' : ''}`}>
                  What we do
                  <svg className="dropdown-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </li>
              <li className="nav-item-dropdown">
                <span className={`nav-link ${location.pathname === '/what-we-think' ? 'active' : ''}`}>
                  What we think
                  <svg className="dropdown-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </li>
              <li className="nav-item-dropdown">
                <span className={`nav-link ${location.pathname === '/who-we-are' ? 'active' : ''}`}>
                  Who we are
                  <svg className="dropdown-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </li>
              <li className="nav-item-dropdown">
                <span className={`nav-link ${location.pathname === '/careers' ? 'active' : ''}`}>
                  Careers
                  <svg className="dropdown-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </li>
            </ul>
          </nav>
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
