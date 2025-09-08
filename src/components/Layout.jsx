import React from 'react';
import './Layout.css';
import logo from '../assets/signavox_icon.png';
const Layout = ({ children }) => {


  return (
    <div className="layout">
      {/* Fixed Background Watermark */}
      <div
        className="bg-watermark"
        aria-hidden="true"
        style={{ backgroundImage: `url(${logo})` }}
      />

      {/* Main Content Area */}
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
