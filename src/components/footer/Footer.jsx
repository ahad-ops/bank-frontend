import React from "react";
import "./Footer.css";
import logo from "../images/logo2.png"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-left">
          <div className="logo">
            <img src={logo} alt="Bank Logo" className="logo-img" />
            <span className="bank-name">BANKNAME</span>
          </div>
          <p className="footer-description">
            Bank online, thrive in convenience, where transactions meet security for seamless financial empowerment.
          </p>
        </div>

       
        <div className="footer-right">
          <ul className="footer-links">
            <li>Saving</li>
            <li>Investing</li>
            <li>Tracking</li>
            <li>Payments</li>
            <li>Loan</li>
          </ul>
        </div>
      </div>

      
      <div className="footer-bottom">
        <p>© 2023 Viztrust by <a href="#">Thanks For Today Studio</a> • All Rights Reserved</p>
        <div className="footer-policy">
          <a href="#">Legal Terms</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;