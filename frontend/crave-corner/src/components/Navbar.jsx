import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ onLogout }) {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <h1 className="nav-title">Crave Corner</h1>
      </div>

      <div className="nav-center">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/menu" className="nav-link">Menu</Link>
        <Link to="/help" className="nav-link">Help & Feedback</Link>
<Link to="/about" className="nav-link">About Us</Link>

      </div>

      
    </nav>
  );
}

export default Navbar;
