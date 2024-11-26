import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100); // Delay to ensure the page has navigated before scrolling
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${isHomePage ? 'fixed' : 'absolute'}`}>
      <div className={`navbar-container ${isHomePage ? '' : 'max-width'}`}>
        <div className="navbar-brand">Brand</div>
        <div className="navbar-links">
          <Link to="/" onClick={handleHomeClick}>Home</Link>
          <Link to="/project">Project</Link>
          <Link to="/about">About</Link>
          <Link to="/contact" onClick={handleContactClick}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;