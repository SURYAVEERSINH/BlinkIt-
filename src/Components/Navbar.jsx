import React from 'react';
import './Navbar.css';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo Image */}
      <div className="navbar-logo">
      <img 
  src="data:image/png;base64,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" 
  alt="Logo" 
  className="logo-image" 
/>

      </div>

      {/* Buttons with icons */}
      <div className="navbar-buttons">
      
        <Link to="/cart" className="navbar-button">
          <FaShoppingCart className="icon" />
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

