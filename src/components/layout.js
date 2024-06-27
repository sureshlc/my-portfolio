import React from 'react';
import '../styles/layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <h1>My Portfolio</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>© {new Date().getFullYear()}, My Portfolio</p>
      </footer>
    </div>
  );
}

export default Layout;
