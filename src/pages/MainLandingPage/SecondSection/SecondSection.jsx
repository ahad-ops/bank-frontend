import React from "react";
import seeAll from "../../../components/images/seeAll.png"; 
import creditIcon from "../../../components/images/creditIcon.png";
import mobileIcon from "../../../components/images/mobileIcon.png";
import currentIcon from "../../../components/images/currentIcon.png";
import starIcon from "../../../components/images/star.png"
import upiIcon from "../../../components/images/upiIcon.png";

import "./SecondSection.css"; 

const SecondSection = () => {
  return (
    <div className="second-section-container">
      
      <div className="header">
        <div className="label">
        <img src={starIcon} alt="star Icon " className="star-icon" />
          <span className="label-text">Awesome Benefit From Us</span>
        </div>
        <h2 className="title">
          Browse our set of Banking Services and Offerings
        </h2>
        <div className="see-all-button">
          <img src={seeAll} alt="See All" />
        </div>
      </div>

      
      <div className="content-wrapper">
      <div className="usp-box">
        <div className="icon-container">
        <img src={creditIcon} alt="Credit Card Icon" />
      </div>
        <h3>Credit & Debit Card Payments</h3>
        <p>Open an Account With Us and Get your Master Card.</p>
      </div>

      <div className="usp-box">
      <div className="icon-container">
      <img src={mobileIcon} alt="Mobile Banking Icon" />
      </div>
      <h3>Mobile Banking</h3>
      <p>Gain quick access to your funds with mobile banking.</p>
    </div>

     <div className="usp-box">
     <div className="icon-container">
      <img src={currentIcon} alt="Current Account Icon" />
     </div>
      <h3>Current & Savings Account</h3>
       <p>We support a vast online support for businesses & home.</p>
    </div>

    <div className="usp-box">
    <div className="icon-container">
      <img src={upiIcon} alt="UPI Transactions Icon" />
    </div>
    <h3>BHIM and UPI Transactions</h3>
    <p>Enjoy secure and instant payments anywhere, anytime.</p>
     </div>
   </div>
    </div>
  );
};

export default SecondSection;