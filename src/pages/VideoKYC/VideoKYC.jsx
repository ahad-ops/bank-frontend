import React, { useState } from "react";
import "./VideoKYC.css";

const VideoKYC = () => {
  // State variables for storing result, loading status, and any error messages.
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function that triggers the video KYC process.
  const startVideoKYC = async () => {
    setLoading(true);
    setError(null);
    try {
      // Make a GET request to your Flask endpoint.
      const response = await fetch("http://localhost:5174/detect");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Parse the JSON response.
      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="video-kyc-container">
      <h1>Video KYC</h1>
      <button onClick={startVideoKYC} disabled={loading}>
        {loading ? "Processing..." : "Start Video KYC"}
      </button>
      {error && <div className="error">Error: {error}</div>}
      {result && (
        <div className="result">
          <h2>Detected Document Details</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default VideoKYC;
