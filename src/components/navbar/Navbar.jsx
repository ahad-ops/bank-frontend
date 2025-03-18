import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo.png"; 
import loginIcon from "../images/login.png"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Bank Logo" className="logo-img" />
        <span className="bank-name-heading">BANKNAME</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/features">Feature</Link></li>
        <li><Link to="/kycupload">KYC Form</Link></li>
        <li><Link to="/videokyc">Video KYC</Link></li>
      </ul>
      <img src={loginIcon} alt="Login" className="login-icon" />
    </nav>
  );
};

export default Navbar;