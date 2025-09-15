import React, { useState, useEffect, useRef } from 'react';
import './Layout.css';
import logo from '../assets/signavox_icon.png';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [isFooterInView, setIsFooterInView] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterInView(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of footer is visible
        rootMargin: '0px 0px -50px 0px' // Start detecting slightly before footer enters viewport
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <div className="layout">
      {/* Fixed Background Watermark */}
      <div
        className={`bg-watermark ${isFooterInView ? 'bright' : ''}`}
        aria-hidden="true"
        style={{ '--logo-bg-image': `url(${logo})` }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="main-content">
        {children}
      </main>

      {/* Footer */}
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
