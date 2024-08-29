import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <h1>StreamFlix</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
