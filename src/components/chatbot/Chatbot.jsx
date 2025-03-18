import React from "react";
import "./ChatBot.css"; 
import sendIcon from "../../components/images/sendIcon.png"; 
import dropdownIcon from "../../components/images/dropdownIcon.png"; 

const ChatBot = ({ isOpen, toggleChatBot }) => {
  const messages = [
    { text: "Ask me anything", type: "bot" },
    { text: "Would you like to know recommended products for protein?", type: "bot" },
    { text: "I’m just browsing!", type: "user" },
  ];

  if (!isOpen) return null; 

  return (
    <div className="chat-window">
      <div className="chat-header">
        <h3>ChatBot</h3>
      </div>
      
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`}>
            {msg.text}
          </div>
        ))}
        <p className="timestamp">2m ago. Seen</p>
      </div>

      <div className="chat-input">
        <input type="text" placeholder="Type Message" />
        <img src={sendIcon} alt="Send" className="send-icon" />
      </div>

      <div className="chat-toggle">
        <img src={dropdownIcon} alt="Close" onClick={toggleChatBot} />
      </div>
    </div>
  );
};

export default ChatBot;