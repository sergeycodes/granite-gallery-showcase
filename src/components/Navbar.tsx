import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
    const navigate = useNavigate();
    const basePath = '/granite-gallery-showcase';

    const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        navigate(`${basePath}/`);
        setTimeout(() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Delay to ensure the page has navigated before scrolling
    };

    const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        navigate(`${basePath}/`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">Brand</div>
          <div className="navbar-links">
            <Link to={`${basePath}/`} onClick={handleHomeClick}>Home</Link>
            <Link to={`${basePath}/project`}>Project</Link>
            <Link to={`${basePath}/about`}>About</Link>
            <Link to={`${basePath}/contact`} onClick={handleContactClick}>Contact</Link>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;