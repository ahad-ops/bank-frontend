import React, { useState } from "react";
import "./HeroSection.css"; 
import yellowBG from "../../../components/images/yellowBG.png"; 
import whiteCard from "../../../components/images/whitecard.png";
import blueCard from "../../../components/images/bluecard.png";
import chatbotIcon from "../../../components/images/chatbot.png";
import messageIcon from "../../../components/images/Vector.png";
import Ornament from "../../../components/images/Ornament.png";
import Ornament2 from "../../../components/images/Ornament2.png";
import ChatBot from "../../../components/chatbot/Chatbot";

const HeroSection = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChatBot = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="hero-container">
      
      <div className="hero-left">
        <img src={yellowBG} alt="Background" className="hero-bg" />
        <img src={Ornament} alt="Ornament" className="Ornament-bg" />
        <img src={whiteCard} alt="White Card" className="white-card" />
        <img src={blueCard} alt="Blue Card" className="blue-card" />
        <img src={Ornament2} alt="Ornament2" className="Ornament2-bg" />
        
      </div>

      
      <div className="hero-right">
        <h1>Empowering Your Financial Journey</h1>
        <p>
          Transforming Banking Experiences, Empower Your Finances with Viztrust,
          where security meets simplicity for seamless online banking.
        </p>

        <div className="hero-buttons">
          <button className="install-btn">Install Now</button>
          <button className="learn-btn">Learn More</button>
        </div>

        <div className="hero-stats">
          <div>
            <h2>2M+</h2>
            <p>Registered Customers</p>
          </div>
          <div>
            <h2>$10B+</h2>
            <p>Total Revenue</p>
          </div>
        </div>
      </div>

     
      <div className="chatbot" onClick={toggleChatBot}>
        <img src={chatbotIcon} alt="ChatBot" className="chatbot-img" />
        <img src={messageIcon} alt="Message Icon" className="chatbot-icon" />
        <span className="chatbot-text">ChatBot</span>
      </div>

      
      <ChatBot isOpen={isChatOpen} toggleChatBot={toggleChatBot} />
    </div>
  );
};

export default HeroSection;