import React from 'react';
import './Layout.css';

const Layout = ({ children }) => {


  return (
    <div className="layout">
      {/* Fixed Background Watermark */}
      <div
        className="bg-watermark"
        aria-hidden="true"
      />

      {/* Main Content Area */}
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
