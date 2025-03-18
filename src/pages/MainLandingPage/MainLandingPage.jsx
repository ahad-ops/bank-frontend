import React from "react";
import Navbar from "../../components/navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import SecondSection from "./SecondSection/SecondSection";
import Footer from "../../components/footer/Footer";
import ChatBot from "../../components/chatbot/Chatbot";

const MainLandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SecondSection /> 
      <Footer /> 

      
      <ChatBot />
    </div>
  );
};

export default MainLandingPage;
