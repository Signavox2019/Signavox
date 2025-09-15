import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import ChevronRightRounded from '@mui/icons-material/ChevronRightRounded';
import './Navbar.css';
import logo from '../assets/signavox_icon.png';
import altLogo from '../assets/company name.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false);
  const [isWhoWeAreOpen, setIsWhoWeAreOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(80);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      
      const doc = document;
      const currentY = window.scrollY ?? doc.documentElement.scrollTop ?? doc.body.scrollTop ?? 0;
      const scrollThreshold = 1;

      if (currentY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      lastScrollYRef.current = currentY;
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setIsWhatWeDoOpen(false);
        setIsWhoWeAreOpen(false);
      }
    };

    // IntersectionObserver sentinel to flip when main content passes navbar
    let sentinel;
    let observer;
    const setupIntersectionObserver = () => {
      const main = document.querySelector('.main-content');
      if (!main) return;
      sentinel = document.createElement('div');
      sentinel.setAttribute('data-nav-sentinel', '');
      sentinel.style.cssText = 'position: relative; width: 100%; height: 1px;';
      main.insertBefore(sentinel, main.firstChild);

      observer = new IntersectionObserver(
        entries => {
          const entry = entries[0];
          // When sentinel is above the viewport top (non-intersecting), consider scrolled
          setIsScrolled(!entry.isIntersecting);
        },
        {
          root: null,
          threshold: 0,
          // Offset by approximate navbar height so swap happens right after passing header
          rootMargin: '-64px 0px 0px 0px'
        }
      );
      observer.observe(sentinel);
    };

    setupIntersectionObserver();
    
    // Calculate navbar height
    const updateNavbarHeight = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };
    
    updateNavbarHeight();

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    const handleResize = () => {
      handleScroll();
      updateNavbarHeight();
    };
    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutside);
      if (observer) observer.disconnect();
      if (sentinel && sentinel.parentNode) sentinel.parentNode.removeChild(sentinel);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleWhatWeDo = () => {
    setIsWhatWeDoOpen(!isWhatWeDoOpen);
  };

  const closeWhatWeDo = () => {
    setIsWhatWeDoOpen(false);
  };

  const toggleWhoWeAre = () => {
    setIsWhoWeAreOpen(!isWhoWeAreOpen);
  };

  const closeWhoWeAre = () => {
    setIsWhoWeAreOpen(false);
  };

  const location = useLocation();

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <Link 
            to="/" 
            className="logo-link"
            onClick={() => {
              setIsMobileMenuOpen(false);
              try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) { window.scrollTo(0, 0); }
            }}
          >
            <div className={`logo-stack ${isScrolled ? 'is-scrolled' : 'is-top'}`} aria-label="SignaVox Logo">
              {/* Original Icon - slides out to left */}
              <img
                src={logo}
                alt="SignaVox Icon"
                className={`logo-img logo-layer logo-icon ${isScrolled ? 'hide' : 'show'}`}
                decoding="async"
                loading="eager"
                draggable={false}
              />
              
              {/* Company Name Image - creative split reveal */}
              <div className={`logo-wordmark-container ${isScrolled ? 'show' : 'hide'}`}>
                <div className="logo-wordmark-left">
                  <img
                    src={altLogo}
                    alt="SignaVox Wordmark"
                    className="logo-wordmark-img"
                    decoding="async"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-nav">
          <ul className="nav-list">
            {/* <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li> */}
            <li className="nav-item dropdown" onMouseEnter={() => setIsWhatWeDoOpen(true)} onMouseLeave={() => setIsWhatWeDoOpen(false)}>
              <span 
                className={`nav-link ${location.pathname === '/what-we-do' ? 'active' : ''}`}
                onClick={toggleWhatWeDo}
              >
                What we do
                <svg className={`dropdown-arrow ${isWhatWeDoOpen ? 'open' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div 
                className={`dropdown-menu ${isWhatWeDoOpen ? 'show' : ''}`}
                style={{
                  top: `${navbarHeight}px`
                }}
              >
                <div className="dropdown-header">
                  <h2 className="dropdown-title">What we do</h2>
                  <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 25, height: 25, borderRadius: '1px', background: '#7F5CFF' }}>
                    <ChevronRightRounded sx={{ fontSize: 30, color: '#fff' }} />
                  </Box>
                </div>
                <div className="dropdown-content">
                  <div className="dropdown-section">
                    <h4>Capabilities</h4>
                    <ul>
                      <li><a href="/artificial-intelligence-data-science">Artificial Intelligence and Data Science</a></li>
                      <li><a href="/blockchain">Blockchain</a></li>
                      <li><a href="/cloud-innovation-transformation">Cloud Innovation & Transformation</a></li>
                      <li><a href="/customer-experience-brand-transformation">Customer Experience & Brand Transformation</a></li>
                      <li><a href="/digital-customer-engagement">Digital Customer Engagement</a></li>
                      <li><a href="/digital-learning-talent-enablement">Digital Learning & Talent Enablement</a></li>
                      <li><a href="/enterprise-technology-modernization">Enterprise Technology Modernization</a></li>
                      <li><a href="/fintech">FinTech</a></li>
                      <li><a href="/immersive-experiences-virtual-solutions">Immersive Experiences & Virtual Solutions</a></li>
                      <li><a href="/intelligent-supply-chain-logistics-it">Intelligent Supply Chain & Logistics IT</a></li>
                      <li><a href="/it-managed-services-operations">IT Managed Services & Operations</a></li>
                    </ul>
                  </div>
                  <div className="dropdown-section">
                    {/* <h4>Capabilities</h4> */}
                    <ul>
                      <li><a href="/next-gen-technology-innovation">Next-Gen Technology Innovation</a></li>
                      <li><a href="/partner-ecosystem-alliances">Partner Ecosystem & Alliances</a></li>
                      <li><a href="/sales-commerce">Sales and Commerce</a></li>
                      <li><a href="/sap">SAP</a></li>
                      <li><a href="/smart-engineering-industry-4">Smart Engineering & Industry 4.0</a></li>
                      <li><a href="/smart-infrastructure-project-it">Smart Infrastructure & Project IT</a></li>
                      <li><a href="/sustainable-it-green-transformation">Sustainable IT & Green Transformation</a></li>
                      <li><a href="/trusted-security-compliance">Trusted Security & Compliance</a></li>
                      <li><a href="/workforce-transformation-change-enablement">Workforce Transformation & Change Enablement</a></li>
                    </ul>
                  </div>
                  <div className="dropdown-section">
                    <h4>Industries</h4>
                    <ul>
                      <li><a href="/automobile-production">Automobile production</a></li>
                      <li><a href="/automated-banking-solutions">Automated Banking Solutions</a></li>
                      <li><a href="/cutting-edge-science">Cutting-Edge Science</a></li>
                      <li><a href="/financial-protection">Financial Protection</a></li>
                      <li><a href="/global-securities-trading">Global Securities Trading</a></li>
                      <li><a href="/global-tourism">Global Tourism</a></li>
                      <li><a href="/healthcare-wellness-industry">Healthcare and Wellness Industry</a></li>
                      <li><a href="/investment-industry">Investment Industry</a></li>
                      <li><a href="/large-scale-equipment-engineering">Large-Scale Equipment and Engineering</a></li>
                      <li><a href="/mass-media-sector">Mass Media Sector</a></li>
                    </ul>
                  </div>
                  <div className="dropdown-section">
                    {/* <h4>Industries</h4> */}
                    <ul>
                      <li><a href="/private-equity">Private Equity</a></li>
                      <li><a href="/products-distribution-industry">Products Distribution Industry</a></li>
                      <li><a href="/public-infrastructure-social">Public Infrastructure and Social</a></li>
                      <li><a href="/retail-financial-services">Retail Financial Services</a></li>
                      <li><a href="/retail-goods">Retail Goods</a></li>
                      <li><a href="/skill-development-sector">Skill Development Sector</a></li>
                      <li><a href="/utilities">Utilities</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <span className={`nav-link ${location.pathname === '/what-we-think' ? 'active' : ''}`}>
                What we think
                <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </li>
            <li className="nav-item dropdown" onMouseEnter={() => setIsWhoWeAreOpen(true)} onMouseLeave={() => setIsWhoWeAreOpen(false)}>
              <span 
                className={`nav-link ${location.pathname === '/who-we-are' ? 'active' : ''}`}
                onClick={toggleWhoWeAre}
              >
                Who we are
                <svg className={`dropdown-arrow ${isWhoWeAreOpen ? 'open' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div 
                className={`dropdown-menu ${isWhoWeAreOpen ? 'show' : ''}`}
                style={{
                  top: `${navbarHeight}px`
                }}
              >
                <div className="dropdown-header">
                  <h2 className="dropdown-title">About Signavox</h2>
                  <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 25, height: 25, borderRadius: '1px', background: '#7F5CFF' }}>
                    <ChevronRightRounded sx={{ fontSize: 30, color: '#fff' }} />
                  </Box>
                </div>
                <div className="dropdown-content">
                  <div className="dropdown-section">
                    <h4>Our organizations</h4>
                    <ul>
                      <li><a href="/awards-recognition">Awards and Recognition</a></li>
                      <li><a href="/corporate-sustainability">Corporate Sustainability</a></li>
                      <li><a href="/industry-analyst-recognition">Industry Analyst Recognition</a></li>
                      <li><a href="/leaders">Leaders</a></li>
                      <li><a href="/location">Location</a></li>
                      <li><a href="/360-value-report">360 Value Report</a></li>
                    </ul>
                  </div>
                  <div className="dropdown-section">
                    <h4>Media & investors</h4>
                    <ul>
                      <li><a href="/media-relation">Media Relation</a></li>
                      <li><a href="/investor-relations">Investor Relations</a></li>
                      <li><a href="/board-of-directions">Board of Directions</a></li>
                    </ul>
                  </div>
                  <div className="dropdown-section">
                    <h4>Our Approach</h4>
                    <ul>
                      <li><a href="/signavox-value-consulting">Signavox Value and Consulting</a></li>
                      <li><a href="/technology">Technology</a></li>
                      <li><a href="/operations">Operations</a></li>
                      <li><a href="/industry-x">Industry X</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <span className={`nav-link ${location.pathname === '/careers' ? 'active' : ''}`}>
                Careers
                <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <span 
                className={`mobile-nav-link ${location.pathname === '/what-we-do' ? 'active' : ''}`}
                onClick={toggleWhatWeDo}
              >
                What we do
                <svg className={`dropdown-arrow ${isWhatWeDoOpen ? 'open' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div className={`mobile-dropdown-menu ${isWhatWeDoOpen ? 'show' : ''}`}>
                <div className="mobile-dropdown-header">
                  <h2 className="mobile-dropdown-title">What we do</h2>
                  <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 20, height: 20, borderRadius: '1px', background: '#7F5CFF' }}>
                    <ChevronRightRounded sx={{ fontSize: 24, color: '#fff' }} />
                  </Box>
                </div>
                <div className="mobile-dropdown-content">
                  <div className="mobile-dropdown-section">
                    <h4>Capabilities</h4>
                    <ul>
                      <li><a href="/artificial-intelligence-data-science">Artificial Intelligence and Data Science</a></li>
                      <li><a href="/blockchain">Blockchain</a></li>
                      <li><a href="/cloud-innovation-transformation">Cloud Innovation & Transformation</a></li>
                      <li><a href="/customer-experience-brand-transformation">Customer Experience & Brand Transformation</a></li>
                      <li><a href="/digital-customer-engagement">Digital Customer Engagement</a></li>
                      <li><a href="/digital-learning-talent-enablement">Digital Learning & Talent Enablement</a></li>
                      <li><a href="/enterprise-technology-modernization">Enterprise Technology Modernization</a></li>
                      <li><a href="/fintech">FinTech</a></li>
                      <li><a href="/immersive-experiences-virtual-solutions">Immersive Experiences & Virtual Solutions</a></li>
                      <li><a href="/intelligent-supply-chain-logistics-it">Intelligent Supply Chain & Logistics IT</a></li>
                      <li><a href="/it-managed-services-operations">IT Managed Services & Operations</a></li>
                      <li><a href="/next-gen-technology-innovation">Next-Gen Technology Innovation</a></li>
                      <li><a href="/partner-ecosystem-alliances">Partner Ecosystem & Alliances</a></li>
                      <li><a href="/sales-commerce">Sales and Commerce</a></li>
                      <li><a href="/sap">SAP</a></li>
                      <li><a href="/smart-engineering-industry-4">Smart Engineering & Industry 4.0</a></li>
                      <li><a href="/smart-infrastructure-project-it">Smart Infrastructure & Project IT</a></li>
                      <li><a href="/sustainable-it-green-transformation">Sustainable IT & Green Transformation</a></li>
                      <li><a href="/trusted-security-compliance">Trusted Security & Compliance</a></li>
                      <li><a href="/workforce-transformation-change-enablement">Workforce Transformation & Change Enablement</a></li>
                    </ul>
                  </div>
                  <div className="mobile-dropdown-section">
                    <h4>Industries</h4>
                    <ul>
                      <li><a href="/automobile-production">Automobile production</a></li>
                      <li><a href="/automated-banking-solutions">Automated Banking Solutions</a></li>
                      <li><a href="/cutting-edge-science">Cutting-Edge Science</a></li>
                      <li><a href="/financial-protection">Financial Protection</a></li>
                      <li><a href="/global-securities-trading">Global Securities Trading</a></li>
                      <li><a href="/global-tourism">Global Tourism</a></li>
                      <li><a href="/healthcare-wellness-industry">Healthcare and Wellness Industry</a></li>
                      <li><a href="/investment-industry">Investment Industry</a></li>
                      <li><a href="/large-scale-equipment-engineering">Large-Scale Equipment and Engineering</a></li>
                      <li><a href="/mass-media-sector">Mass Media Sector</a></li>
                      <li><a href="/private-equity">Private Equity</a></li>
                      <li><a href="/products-distribution-industry">Products Distribution Industry</a></li>
                      <li><a href="/public-infrastructure-social">Public Infrastructure and Social</a></li>
                      <li><a href="/retail-financial-services">Retail Financial Services</a></li>
                      <li><a href="/retail-goods">Retail Goods</a></li>
                      <li><a href="/skill-development-sector">Skill Development Sector</a></li>
                      <li><a href="/utilities">Utilities</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="mobile-nav-item">
              <span className={`mobile-nav-link ${location.pathname === '/what-we-think' ? 'active' : ''}`}>
                What we think
                <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </li>
            <li className="mobile-nav-item">
              <span 
                className={`mobile-nav-link ${location.pathname === '/who-we-are' ? 'active' : ''}`}
                onClick={toggleWhoWeAre}
              >
                Who we are
                <svg className={`dropdown-arrow ${isWhoWeAreOpen ? 'open' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div className={`mobile-dropdown-menu ${isWhoWeAreOpen ? 'show' : ''}`}>
                <div className="mobile-dropdown-header">
                  <h2 className="mobile-dropdown-title">About Signavox</h2>
                  <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 20, height: 20, borderRadius: '1px', background: '#7F5CFF' }}>
                    <ChevronRightRounded sx={{ fontSize: 24, color: '#fff' }} />
                  </Box>
                </div>
                <div className="mobile-dropdown-content">
                  <div className="mobile-dropdown-section">
                    <h4>Our organizations</h4>
                    <ul>
                      <li><a href="/awards-recognition">Awards and Recognition</a></li>
                      <li><a href="/corporate-sustainability">Corporate Sustainability</a></li>
                      <li><a href="/industry-analyst-recognition">Industry Analyst Recognition</a></li>
                      <li><a href="/leaders">Leaders</a></li>
                      <li><a href="/location">Location</a></li>
                      <li><a href="/360-value-report">360 Value Report</a></li>
                    </ul>
                  </div>
                  <div className="mobile-dropdown-section">
                    <h4>Media & investors</h4>
                    <ul>
                      <li><a href="/media-relation">Media Relation</a></li>
                      <li><a href="/investor-relations">Investor Relations</a></li>
                      <li><a href="/board-of-directions">Board of Directions</a></li>
                    </ul>
                  </div>
                  <div className="mobile-dropdown-section">
                    <h4>Our Approach</h4>
                    <ul>
                      <li><a href="/signavox-value-consulting">Signavox Value and Consulting</a></li>
                      <li><a href="/technology">Technology</a></li>
                      <li><a href="/operations">Operations</a></li>
                      <li><a href="/industry-x">Industry X</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="mobile-nav-item">
              <span className={`mobile-nav-link ${location.pathname === '/careers' ? 'active' : ''}`}>
                Careers
                <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
