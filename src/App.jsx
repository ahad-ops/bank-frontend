import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLandingPage from "./pages/MainLandingPage/MainLandingPage";
import KYCForm from "./pages/KYCForm/KYCForm.jsx";
import VideoKYC from "./pages/VideoKYC/VideoKYC.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLandingPage />} />
        <Route path="/kycupload" element={<KYCForm />} /> 
        <Route path="/videokyc" element={<VideoKYC />} />
      </Routes>
    </Router>
  );
}

export default App;