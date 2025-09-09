import React from 'react';
import './Layout.css';
import logo from '../assets/signavox_icon.png';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* Fixed Background Watermark */}
      <div
        className="bg-watermark"
        aria-hidden="true"
        style={{ backgroundImage: `url(${logo})` }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="main-content">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
